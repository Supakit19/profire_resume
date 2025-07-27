"use client";

import { ChevronDown, Github,  Download } from "lucide-react";
import { useEffect, useRef } from "react";

export interface HeroProps {
  scrollToSection: (sectionId: string) => void;
  mousePosition: { x: number; y: number };
}

export default function Hero({ scrollToSection, mousePosition }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.7)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-white"
    >
      {/* Neon grid background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(6,182,212,0.1)_25%,transparent_25%,transparent_50%,rgba(236,72,153,0.1)_50%,rgba(236,72,153,0.1)_75%,transparent_75%,transparent)] bg-[length:50px_50px] animate-gridmove" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Enhanced glow overlay with 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-pink-500/20 pointer-events-none filter blur-xl animate-glow-pulse" />

      {/* Dynamic 3D mouse orb */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full filter blur-3xl animate-orbit pointer-events-none"
        style={{
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
          background:
            "radial-gradient(circle at center, rgba(6,182,212,0.4), rgba(236,72,153,0.2) 70%)",
          transform: `translateZ(0)`,
          boxShadow: `0 0 50px rgba(6,182,212,0.5), 0 0 80px rgba(236,72,153,0.5)`,
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-7xl sm:text-8xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-neon drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">
          Supakit Boonkien
        </h1>
        <p className="text-2xl sm:text-3xl text-gray-200 mb-4 animate-slide-in font-mono">
          วิศวะคอมพิวเตอร์ | มหาวิทยาลัยพะเยา ปี 4
        </p>
        <p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-in font-mono"
          style={{ animationDelay: "0.2s" }}
        >
          คณะเทคโนโลยีสารสนเทศและการสื่อสาร 
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="relative px-12 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-pink-500
              text-white shadow-[0_0_20px_rgba(6,182,212,0.8)]
              hover:from-cyan-600 hover:to-pink-600
              transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_30px_rgba(6,182,212,1),0_0_50px_rgba(236,72,153,1)]
              animate-pulse-slow
              flex items-center justify-center gap-3 group"
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />
            <span className="text-lg">สำรวจผลงาน</span>
          </button>
        </div>

        <div className="flex justify-center gap-10">
          {[Github].map((Icon, i) => (
            <a
              key={i}
              href="https://github.com/Supakit19"
              className="p-4 bg-gradient-to-r from-cyan-500/40 to-pink-500/40 rounded-full
                hover:from-cyan-500/80 hover:to-pink-500/80
                text-cyan-300
                shadow-[0_0_10px_rgba(6,182,212,0.6)]
                hover:shadow-[0_0_20px_rgba(6,182,212,1),0_0_30px_rgba(236,72,153,1)]
                transition-all duration-300 transform hover:scale-125 animate-spin-slow"
            >
              <Icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>

      {/* Enhanced chevron with glow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes gradient-neon {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-neon {
          background-size: 200% 200%;
          animation: gradient-neon 4s ease infinite;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
            box-shadow: 0 0 10px rgba(6, 182, 212, 0.7),
              0 0 25px rgba(236, 72, 153, 0.7);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 20px rgba(6, 182, 212, 1),
              0 0 40px rgba(236, 72, 153, 1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.5s ease-in-out infinite;
        }
        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-glow-pulse {
          animation: glow-pulse 6s ease-in-out infinite;
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20%);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        @keyframes orbit {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(15px, 15px) rotate(180deg) scale(1.1);
          }
          100% {
            transform: translate(0, 0) rotate(360deg) scale(1);
          }
        }
        .animate-orbit {
          animation: orbit 10s ease-in-out infinite;
        }
        @keyframes gridmove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }
        .animate-gridmove {
          animation: gridmove 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
