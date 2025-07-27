import React, { useEffect, useRef } from "react";

interface Skill {
  name: string;
  logo: string;
  category: string;
}

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "HTML", logo: "/html5.svg", category: "พัฒนาเว็บไซต์" },
    { name: "CSS", logo: "css.svg", category: "พัฒนาเว็บไซต์" },
    {
      name: "JavaScript",
      logo: "/java.png",
      category: "พัฒนาเว็บไซต์",
    },
    {
      name: "TypeScript",
      logo: "/typescript.png",
      category: "พัฒนาเว็บไซต์",
    },
    { name: "React", logo: "/react.svg", category: "พัฒนาเว็บไซต์" },
    { name: "Next.js", logo: "/nextdotjs.svg", category: "พัฒนาเว็บไซต์" },
    {
      name: "Tailwind",
      logo: "/tailwindcss.svg",
      category: "พัฒนาเว็บไซต์",
    },
    {
      name: "Bootstrap",
      logo: "/bootstrap.svg",
      category: "พัฒนาเว็บไซต์",
    },
    { name: "Node.js", logo: "/nodedotjs.svg", category: "ฝั่งเซิร์ฟเวอร์" },
    { name: "MariaDB", logo: "/mysql.svg", category: "ฝั่งเซิร์ฟเวอร์" },
    { name: "Figma", logo: "/figma.svg", category: "ออกแบบ UI/UX" },
    { name: "Bun", logo: "/bun.svg", category: "ฝั่งเซิร์ฟเวอร์" },
    { name: "Elysia", logo: "/elysia.png", category: "ฝั่งเซิร์ฟเวอร์" },
    { name: "NestJS", logo: "/nestjs.svg", category: "ฝั่งเซิร์ฟเวอร์" },
  ];

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
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.3 - 0.15,
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
        ctx.fillStyle = "rgba(6, 182, 212, 0.6)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    card: HTMLDivElement
  ) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = y / 10;
    const rotateY = -x / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (card: HTMLDivElement) => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-gray-950 text-white">
      {/* Neon grid background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(6,182,212,0.1)_25%,transparent_25%,transparent_50%,rgba(236,72,153,0.1)_50%,rgba(236,72,153,0.1)_75%,transparent_75%,transparent)] bg-[length:50px_50px] animate-gridmove" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-pink-500/15 pointer-events-none filter blur-xl animate-glow-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-neon drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">
            Skill
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-2xl p-6 border border-cyan-400/30
                shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8),0_0_40px_rgba(236,72,153,0.8)]
                transition-all duration-500 transform hover:scale-105 animate-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <img
                src={skill.logo || "/logos/placeholder.png"}
                alt={`${skill.name} logo`}
                className="w-24 h-24 object-contain mb-4 mx-auto transform hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]"
              />
              <h3 className="text-xl font-semibold text-center text-cyan-300">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-300 text-center font-mono">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
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
        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-glow-pulse {
          animation: glow-pulse 6s ease-in-out infinite;
        }
        @keyframes reveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-reveal {
          animation: reveal 0.8s ease-out forwards;
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
};
