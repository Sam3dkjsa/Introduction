import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const fragmentShader = `
precision highp float;
varying vec2 v_uv;
uniform vec2 u_resolution;
uniform vec2 u_pointer;
uniform float u_time;
void main() {
  vec2 uv = v_uv;
  vec2 p = (uv - 0.5) * vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 mouse = (u_pointer - 0.5) * vec2(u_resolution.x / u_resolution.y, 1.0);
  float d = length(p - mouse);
  float influence = exp(-d * 5.0);
  float t = u_time;
  p += vec2(sin(p.y * 5.0 + t * 0.20), cos(p.x * 5.0 - t * 0.17)) * (0.026 + influence * 0.095);
  float r = length(p);
  float a = atan(p.y, p.x);
  float ripple = sin(r * 27.0 - t * 0.22 + sin(a * 4.0 + t * 0.16) * 0.42 + influence * 1.4);
  float threads = smoothstep(0.88, 1.0, ripple);
  float rings = smoothstep(0.965, 1.0, sin(r * 18.0 + sin(a * 3.0 - t * 0.12) * 0.55));
  float halo = exp(-abs(ripple) * 3.0) * (0.17 + influence * 0.8);
  vec3 ink = vec3(0.075, 0.09, 0.085);
  vec3 lime = vec3(0.76, 0.96, 0.24);
  vec3 coral = vec3(1.0, 0.37, 0.25);
  float blend = smoothstep(-0.72, 0.72, sin(a * 2.0 + r * 4.0 + t * 0.12));
  vec3 glow = mix(lime, coral, blend);
  float falloff = (1.0 - smoothstep(0.04, 0.83, r));
  vec3 color = ink + glow * (threads * 0.58 + rings * 0.22 + halo * 0.22) * falloff;
  float vignette = (1.0 - smoothstep(0.12, 1.0, length((uv - 0.5) * vec2(1.1, 1.0))));
  color *= 0.74 + vignette * 0.26;
  gl_FragColor = vec4(color, 1.0);
}`;

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function InteractiveField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { alpha: false, antialias: true, powerPreference: "low-power" });
    if (!canvas || !gl) {
      canvas?.classList.add("field-fallback");
      return;
    }

    const vertex = compileShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) {
      canvas.classList.add("field-fallback");
      return;
    }

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      canvas.classList.add("field-fallback");
      return;
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    gl.useProgram(program);
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const resolution = gl.getUniformLocation(program, "u_resolution");
    const pointer = gl.getUniformLocation(program, "u_pointer");
    const time = gl.getUniformLocation(program, "u_time");
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pointerX = 0.5;
    let pointerY = 0.5;
    let raf = 0;
    let start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
      const width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
      if (resolution) gl.uniform2f(resolution, width, height);
    };

    const draw = (now: number) => {
      resize();
      gl.useProgram(program);
      if (pointer) gl.uniform2f(pointer, pointerX, 1.0 - pointerY);
      if (time) gl.uniform1f(time, motionPreference.matches ? 0 : (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    const animate = (now: number) => {
      draw(now);
      raf = window.requestAnimationFrame(animate);
    };
    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      pointerY = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
      if (motionPreference.matches) draw(performance.now());
    };
    const onPointerLeave = () => { pointerX = 0.5; pointerY = 0.5; if (motionPreference.matches) draw(performance.now()); };
    const onMotionChange = () => { start = performance.now(); };
    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", onPointerLeave, { passive: true });
    motionPreference.addEventListener("change", onMotionChange);
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    draw(start);
    if (!motionPreference.matches) raf = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      motionPreference.removeEventListener("change", onMotionChange);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-field" role="img" aria-label="An animated field of glowing coral and lime threads that bends around the cursor." />;
}
