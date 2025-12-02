// src/components/SnowfallOverlay.tsx
import { useEffect, useRef, useState } from 'react';

type SnowfallProps = {
  /** Only show in December (default: true) */
  decemberOnly?: boolean;
  /** Disable on mobile / touch devices (default: true) */
  disableOnMobile?: boolean;
  /** Max amount of snowflakes (default: 80) */
  maxFlakes?: number;
};

type Snowflake = {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
};

export const SnowfallOverlay = ({
  decemberOnly = true,
  disableOnMobile = true,
  maxFlakes = 80,
}: SnowfallProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  // Decide whether we should render at all
  useEffect(() => {
    const now = new Date();
    const isDecember = now.getMonth() === 11; // 0 = Jan, 11 = Dec

    const isTouchDevice =
      typeof window !== 'undefined' &&
      (window.matchMedia?.('(pointer: coarse)')?.matches ||
        window.innerWidth < 768);

    const allowForMonth = decemberOnly ? isDecember : true;
    const allowForDevice = disableOnMobile ? !isTouchDevice : true;

    setShouldRender(allowForMonth && allowForDevice);
  }, [decemberOnly, disableOnMobile]);

  // Snowfall animation
  useEffect(() => {
    if (!shouldRender) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const flakes: Snowflake[] = [];

    const createFlake = (): Snowflake => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 1 + Math.random() * 2.5, // Small, subtle
      speedY: 0.5 + Math.random() * 1.2,
      speedX: -0.4 + Math.random() * 0.8, // Slight drift
    });

    for (let i = 0; i < maxFlakes; i += 1) {
      flakes.push(createFlake());
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < flakes.length; i += 1) {
        const flake = flakes[i];

        flake.x += flake.speedX;
        flake.y += flake.speedY;

        // Wrap around
        if (flake.y > height) {
          flake.y = -flake.radius;
          flake.x = Math.random() * width;
        }
        if (flake.x > width) flake.x = 0;
        if (flake.x < 0) flake.x = width;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [shouldRender, maxFlakes]);

  if (!shouldRender) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50, // adjust if needed
      }}
    />
  );
};
