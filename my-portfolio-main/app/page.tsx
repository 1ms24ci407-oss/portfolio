"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Github, Linkedin, Download } from "lucide-react";

export default function LandingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;

    const resize = () => {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Soft Luminous Pastel Light Theme Palette
    const blobs = [
      { x: 0.22, y: 0.35, r: 0.44, speed: 1.1, color: "#38BDF8", phase: 0 },
      { x: 0.78, y: 0.6, r: 0.46, speed: 0.85, color: "#F472B6", phase: 1.2 },
      { x: 0.48, y: 0.15, r: 0.36, speed: 1.2, color: "#818CF8", phase: 2.4 },
      { x: 0.85, y: 0.25, r: 0.35, speed: 0.8, color: "#FBBF24", phase: 3.6 },
      { x: 0.15, y: 0.8, r: 0.38, speed: 1.0, color: "#34D399", phase: 4.8 },
      { x: 0.62, y: 0.85, r: 0.34, speed: 1.15, color: "#C084FC", phase: 6.0 },
    ];

    let mouse = { x: 0.5, y: 0.5 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX / (window.innerWidth || 1);
      mouse.y = e.clientY / (window.innerHeight || 1);
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    let t = 0;

    function hexAlpha(hex: string, alpha: number) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    function drawBlob(
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      r: number,
      phase: number
    ) {
      const pts = 84;
      context.beginPath();
      for (let i = 0; i <= pts; i++) {
        const a = (i / pts) * Math.PI * 2;
        const d =
          r *
          (1 +
            0.22 * Math.sin(3 * a + phase) +
            0.12 * Math.sin(5 * a - phase * 1.3) +
            0.07 * Math.sin(7 * a + phase * 0.8));
        if (i === 0) context.moveTo(cx + Math.cos(a) * d, cy + Math.sin(a) * d);
        else context.lineTo(cx + Math.cos(a) * d, cy + Math.sin(a) * d);
      }
      context.closePath();
    }

    function draw() {
      t++;
      if (!ctx) return;
      if (W === 0 || H === 0) resize();

      ctx.fillStyle = "#F8FAFC";
      ctx.fillRect(0, 0, W, H);

      blobs.forEach((b) => {
        const mx = (mouse.x - 0.5) * 0.08 * b.speed;
        const my = (mouse.y - 0.5) * 0.07 * b.speed;
        const bx = (b.x + Math.sin(t * 0.004 * b.speed + b.phase) * 0.12 + mx) * W;
        const by = (b.y + Math.cos(t * 0.003 * b.speed + b.phase) * 0.10 + my) * H;
        const pulse = 1 + Math.sin(t * 0.015 * b.speed + b.phase) * 0.06;
        const br = b.r * Math.min(W, H) * pulse;

        const grad = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        grad.addColorStop(0, hexAlpha(b.color, 0.45));
        grad.addColorStop(0.5, hexAlpha(b.color, 0.20));
        grad.addColorStop(1, hexAlpha(b.color, 0.0));

        ctx.beginPath();
        drawBlob(ctx, bx, by, br, t * 0.01 * b.speed + b.phase);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Soft Vignette for Light Mode
      const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.2, W / 2, H / 2, H * 0.85);
      vig.addColorStop(0, "rgba(248,250,252,0)");
      vig.addColorStop(1, "rgba(226,232,240,0.4)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#F8FAFC] text-[#0F172A] flex items-center justify-center font-['Manrope',sans-serif]">
      {/* Background Liquid Canvas */}
      <canvas
        ref={canvasRef}
        id="liquidCanvas"
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Soft Ambient Noise Grain */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Stage Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 animate-[fadeUp_1.2s_cubic-bezier(0.16,1,0.3,1)_both]">
        <span
          className="text-xs tracking-[5px] text-[#64748B] uppercase mb-3.5 font-semibold"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          PORTFOLIO
        </span>

        <h1
          className="text-[clamp(3.2rem,7.5vw,6rem)] font-extrabold leading-[1.05] text-[#0F172A] tracking-[-0.5px] mb-2.5 shadow-sm"
          style={{
            fontFamily: "'Baloo 2', cursive",
            textShadow: "0 4px 20px rgba(15, 23, 42, 0.08)",
          }}
        >
          Priyadarshini V
        </h1>

        <p className="text-[clamp(0.88rem,2vw,1.02rem)] text-[#475569] tracking-[0.4px] mb-12 font-semibold">
          Choose your viewing experience
        </p>

        {/* Choices */}
        <div className="flex flex-col sm:flex-row gap-7 justify-center items-center">
          {/* MINIMAL CHOICE */}
          <Link
            href="/minimal"
            className="group relative w-[310px] max-w-[88vw] px-7 pt-6 pb-[22px] rounded-[28px_48px_28px_28px] bg-gradient-to-br from-white/90 to-slate-100/70 backdrop-blur-[28px] border-[1.5px] border-slate-200/90 border-t-white shadow-[0_20px_45px_-10px_rgba(15,23,42,0.08),inset_0_1.5px_0_rgba(255,255,255,0.9),inset_0_-1.5px_0_rgba(203,213,225,0.3)] flex flex-col items-start gap-[6px] cursor-pointer overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.02] hover:border-slate-400/50 hover:shadow-[0_30px_60px_-12px_rgba(15,23,42,0.15),inset_0_1.5px_0_rgba(255,255,255,1)]"
          >
            {/* 3D Shiny Gem Sphere Green */}
            <div
              className="absolute top-[22px] right-[22px] w-[24px] h-[24px] rounded-full z-10 transition-transform duration-300 group-hover:scale-115"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, #34D399, #059669 55%, #047857 100%)",
                boxShadow:
                  "0 4px 16px rgba(5, 150, 105, 0.4), inset 0 2px 4px rgba(255,255,255,0.7)",
              }}
            >
              <div className="absolute top-[4px] left-[5px] w-[7px] h-[7px] rounded-full bg-white/90 blur-[0.5px]" />
            </div>

            <div className="relative z-1 flex flex-col gap-1 w-full text-left">
              <div className="text-[1.6rem] mb-[6px] flex items-center text-[#0284C7]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div
                className="text-[1.25rem] font-extrabold tracking-[2px] uppercase text-[#0F172A]"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                MINIMAL
              </div>
              <div className="text-[0.85rem] font-semibold text-[#475569] tracking-[0.3px]">
                Clean resume style
              </div>
            </div>
          </Link>

          {/* ANIMATED CHOICE */}
          <a
            href="/animated.html"
            className="group relative w-[310px] max-w-[88vw] px-7 pt-6 pb-[22px] rounded-[48px_28px_28px_28px] bg-gradient-to-br from-white/90 to-slate-100/70 backdrop-blur-[28px] border-[1.5px] border-slate-200/90 border-t-white shadow-[0_20px_45px_-10px_rgba(15,23,42,0.08),inset_0_1.5px_0_rgba(255,255,255,0.9),inset_0_-1.5px_0_rgba(203,213,225,0.3)] flex flex-col items-end gap-[6px] cursor-pointer overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.02] hover:border-slate-400/50 hover:shadow-[0_30px_60px_-12px_rgba(15,23,42,0.15),inset_0_1.5px_0_rgba(255,255,255,1)]"
          >
            {/* 3D Shiny Gem Sphere Pink */}
            <div
              className="absolute top-[22px] left-[22px] w-[24px] h-[24px] rounded-full z-10 transition-transform duration-300 group-hover:scale-115"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, #F472B6, #DB2777 55%, #9D174D 100%)",
                boxShadow:
                  "0 4px 16px rgba(219, 39, 119, 0.4), inset 0 2px 4px rgba(255,255,255,0.7)",
              }}
            >
              <div className="absolute top-[4px] left-[5px] w-[7px] h-[7px] rounded-full bg-white/90 blur-[0.5px]" />
            </div>

            <div className="relative z-1 flex flex-col gap-1 w-full text-right">
              <div className="text-[1.6rem] mb-[6px] flex items-center justify-end text-[#DB2777]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div
                className="text-[1.25rem] font-extrabold tracking-[2px] uppercase text-[#0F172A]"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                ANIMATED
              </div>
              <div className="text-[0.85rem] font-semibold text-[#475569] tracking-[0.3px]">
                Modern portfolio style
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Footer Social Icons */}
      <div className="fixed bottom-[26px] left-1/2 -translate-x-1/2 flex items-center gap-[16px] z-10">
        <a
          href="https://github.com/Priya67803"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[44px] h-[44px] rounded-full bg-white/85 backdrop-blur-[16px] border border-slate-300/80 flex items-center justify-center text-[#334155] hover:text-[#0F172A] hover:bg-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)]"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/priya-v-77b396273/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[44px] h-[44px] rounded-full bg-white/85 backdrop-blur-[16px] border border-slate-300/80 flex items-center justify-center text-[#334155] hover:text-[#0F172A] hover:bg-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)]"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[44px] h-[44px] rounded-full bg-white/85 backdrop-blur-[16px] border border-slate-300/80 flex items-center justify-center text-[#334155] hover:text-[#0F172A] hover:bg-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)]"
          aria-label="Download CV"
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
    </main>
  );
}
