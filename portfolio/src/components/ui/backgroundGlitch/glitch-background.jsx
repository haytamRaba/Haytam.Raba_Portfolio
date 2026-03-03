import React, { useEffect, useRef } from "react";

export default function GlitchBackground({
  intensity = 0.35,
  scanlineOpacity = 0.12,
  glitchInterval = 2500,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let raf;
    let lastGlitch = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const paintScanlines = () => {
      ctx.fillStyle = `rgba(0,0,0,${scanlineOpacity})`;
      for (let y = 0; y < canvas.height; y += 3) {
        ctx.fillRect(0, y, canvas.width, 1);
      }
    };

    const glitch = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // RGB split burst
      if (t - lastGlitch > glitchInterval && Math.random() < intensity) {
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = "rgba(255,0,0,0.8)";
        ctx.fillRect(Math.random() * 30 - 15, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0,255,0,0.8)";
        ctx.fillRect(Math.random() * 30 - 15, 0, canvas.width, canvas.height);
        ctx.restore();
        lastGlitch = t;
      }

      paintScanlines();
      raf = requestAnimationFrame(glitch);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(glitch);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [intensity, scanlineOpacity, glitchInterval]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}