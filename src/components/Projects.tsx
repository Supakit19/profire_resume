import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  gradient: string;
  border: string;
  techColor: string;
  shadow: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "เว็บไซต์สำหรับเก็บและแบ่งปันโปรเจกต์",
      description:
        "แพลตฟอร์มสำหรับเก็บ รวบรวม และแบ่งปันโปรเจกต์กิจกรรมของเพื่อนๆในสาขา พร้อมระบบจัดการโปรเจกต์ที่ใช้งานง่ายและแสดงผลงานได้อย่างสวยงาม",
      technologies: [
        "React",
        "Bun",
        "Elysia",
        "MariaDB",
        "Tailwind CSS",
        "Prisma ORM",
      ],
      images: [
        "/Projects/ProjectHub.png",
        "/Projects/ProjectHub1.png",
        "/Projects/ProjectHub2.png",
        "/Projects/ProjectHub3.png",
        "/Projects/ProjectHub4.png",
        "/Projects/ProjectHub5.png",
      ],
      gradient: "from-cyan-600/20 to-pink-600/20",
      border: "border-cyan-400/30",
      techColor: "cyan-300",
      shadow: "cyan-500/60",
    },
    {
      title: "Miniproject (ปี2): เว็บไซต์สำหรับขาย ID GAME ",
      description:
        "เว็บไซต์สำหรับขาย ID เกม ที่พัฒนาโดยใช้ React, NestJS และ Prisma ORM พร้อมระบบจัดการผู้ใช้งานและการสั่งซื้อที่ปลอดภัย รองรับฐานข้อมูล MariaDB และออกแบบ UI ด้วย Tailwind CSS",
      technologies: [
        "React",
        "NestJS",
        "MariaDB",
        "Tailwind CSS",
        "Prisma ORM",
      ],
      images: [
        "/Projects/wedshop.png",
        "/Projects/wedshop1.png",
        "/Projects/wedshop2.png",
        "/Projects/wedshop3.png",
        "/Projects/wedshop4.png",
        "/Projects/wedshop5.png",
      ],
      gradient: "from-green-600/20 to-emerald-600/20",
      border: "border-green-400/30",
      techColor: "green-300",
      shadow: "green-500/60",
    },
    {
      title: "Application ระบบติดตามกิจกรรม (พระ)",
      description:
        "แอปพลิเคชันสำหรับติดตามและบันทึกกิจกรรมของพระภิกษุ รองรับการแจ้งเตือน ตารางกิจกรรม และการซิงค์ข้อมูลกับฐานข้อมูลกลาง พัฒนาโดยใช้ Flutter และ NestJS",
      technologies: ["Flutter", "NestJS", "MariaDB"],
      images: [
        "/Projects/carrot.png",
        "/Projects/carrot1.png",
        "/Projects/carrot2.png",
        "/Projects/carrot3.png",
        "/Projects/carrot4.png",
        "/Projects/carrot5.png",
      ],
      gradient: "from-yellow-600/20 to-orange-600/20",
      border: "border-yellow-400/30",
      techColor: "yellow-300",
      shadow: "yellow-500/60",
    },
    {
      title: "เว็บไซต์ระบบสั่งอาหารและจัดการออเดอร์",
      description:
        "ระบบเว็บไซต์สำหรับสั่งอาหารและจัดการออเดอร์แบบครบวงจร รองรับการเพิ่มเมนู จัดการคำสั่งซื้อแบบเรียลไทม์ และติดตามสถานะออเดอร์ พัฒนาโดยใช้ React, Bun และ Elysia เชื่อมต่อฐานข้อมูล MariaDB พร้อมการออกแบบ UI ที่ทันสมัยด้วย Tailwind CSS และ Prisma ORM",
      technologies: [
        "React",
        "Bun",
        "Elysia",
        "MariaDB",
        "Tailwind CSS",
        "Prisma ORM",
      ],
      images: [
        "/Projects/Pos.jfif",
        "/Projects/Pos1.jfif",
        "/Projects/Pos2.jfif",
      ],
      gradient: "from-pink-600/20 to-rose-600/20",
      border: "border-pink-400/30",
      techColor: "pink-300",
      shadow: "pink-500/60",
    },
    {
      title: "เว็บไซต์ระบบสั่งอาหารและจัดการออเดอร์",
      description: "หุ่นยนต์ควบคุมด้วยไมโครคอนโทรลเลอร์พร้อมระบบวิชัน",
      technologies: [
        "React",
        "Bun",
        "Elysia",
        "MariaDB",
        "Tailwind CSS",
        "Prisma ORM",
      ],
      images: [
        "/Projects/child.png",
        "/Projects/child1.png",
        "/Projects/child2.png",
        "/Projects/child3.png",
        "/Projects/child4.png",
      ],
      gradient: "from-green-600/20 to-rose-600/20",
      border: "border-green-400/30",
      techColor: "green-300",
      shadow: "green-500/60",
    },
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>(
    projects.map(() => 0)
  );
  const [isAnimating, setIsAnimating] = useState<boolean[]>(
    projects.map(() => false)
  );
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [fullView, setFullView] = useState<boolean>(false);

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
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 1,
        speedX: Math.random() * 0.4 - 0.2,
        speedY: Math.random() * 0.4 - 0.2,
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

  const handlePrevImage = (projectIndex: number) => {
    if (isAnimating[projectIndex]) return;
    setIsAnimating((prev) =>
      prev.map((val, i) => (i === projectIndex ? true : val))
    );
    setCurrentImageIndices((prev) =>
      prev.map((index, i) =>
        i === projectIndex
          ? index === 0
            ? projects[projectIndex].images.length - 1
            : index - 1
          : index
      )
    );
    setTimeout(() => {
      setIsAnimating((prev) =>
        prev.map((val, i) => (i === projectIndex ? false : val))
      );
    }, 500);
  };

  const handleNextImage = (projectIndex: number) => {
    if (isAnimating[projectIndex]) return;
    setIsAnimating((prev) =>
      prev.map((val, i) => (i === projectIndex ? true : val))
    );
    setCurrentImageIndices((prev) =>
      prev.map((index, i) =>
        i === projectIndex
          ? index === projects[projectIndex].images.length - 1
            ? 0
            : index + 1
          : index
      )
    );
    setTimeout(() => {
      setIsAnimating((prev) =>
        prev.map((val, i) => (i === projectIndex ? false : val))
      );
    }, 500);
  };

  return (
    <section
      id="projects"
      className="py-24 relative z-10 bg-gray-950 text-white"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            ผลงานและประสบการณ์
          </h2>
        </div>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-r ${project.gradient} rounded-2xl p-8 border ${project.border}
                shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.9),0_0_50px_rgba(236,72,153,0.9)]
                transition-all duration-500`}
            >
              <h3 className="text-3xl font-bold mb-4 text-cyan-300">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-4 py-1 bg-${project.techColor}/30 rounded-full text-sm text-${project.techColor} font-mono`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="relative overflow-hidden bg-gray-800 rounded-lg flex items-center justify-center h-80">
                <img
                  src={project.images[currentImageIndices[index]]}
                  alt={`${project.title} preview ${
                    currentImageIndices[index] + 1
                  }`}
                  className={`max-h-full max-w-full object-contain transition-transform duration-500 rounded-lg shadow-lg
      ${isAnimating[index] ? "opacity-50 scale-95" : "scale-100"}`}
                  onClick={() =>
                    setPopupImage(project.images[currentImageIndices[index]])
                  }
                />
                <button
                  onClick={() => handlePrevImage(index)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-cyan-500/50 rounded-full text-white
      hover:bg-cyan-500/80 hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleNextImage(index)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-cyan-500/50 rounded-full text-white
      hover:bg-cyan-500/80 hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {popupImage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-4 rounded-lg shadow-xl relative max-w-3xl w-full">
            <button
              onClick={() => setPopupImage(null)}
              className="absolute top-2 right-2 text-white hover:text-red-400"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={popupImage}
              alt="Preview"
              className={`max-h-[70vh] mx-auto rounded-lg transition-all duration-300 ${
                fullView ? "scale-110" : ""
              }`}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setFullView(!fullView)}
                className="px-3 py-2 bg-cyan-500 rounded-md text-white hover:bg-cyan-600 flex items-center gap-2"
              >
                <Maximize2 className="w-4 h-4" />
                {fullView ? "ย่อ" : "ขยายใหญ่"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
