import React from "react";
import { Code, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  return (
    <div
      id="about"
      className="py-24 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Animated neon grid background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(56,189,248,0.1)_25%,transparent_25%,transparent_50%,rgba(236,72,153,0.1)_50%,rgba(236,72,153,0.1)_75%,transparent_75%,transparent)] bg-[length:50px_50px] animate-[gridmove_10s_linear_infinite]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* === Hero Profile Card === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.7 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 40px rgba(56,189,248,0.4)",
            }}
            className="relative bg-gradient-to-br from-cyan-600/30 to-pink-600/20 border border-cyan-400/30 shadow-2xl p-10 rounded-3xl backdrop-blur-2xl overflow-hidden"
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-pink-500/20 blur-2xl animate-pulse" />
            <div className="relative text-center space-y-4">
              {/* รูปโปรไฟล์ */}
              <motion.div
                whileHover={{ rotate: [0, 2, -2, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/40 shadow-lg"
              >
                <img
                  src="/Supakit1.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                สวัสดี ผมชื่อ นายศุภกิตติ์ บุญเขียน
              </h2>
              <p className="text-gray-300">
                นักศึกษาชั้นปีสุดท้ายสาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยพะเยา
                สนใจอยากลองฝึกงานด้านการพัฒนาเว็บไซต์แบบ Full-Stack และเทคโนโลยีสมัยใหม่
                ชื่นชอบการสร้างสรรค์{" "}
                <span className="text-cyan-400">ซอฟต์แวร์</span> และ{" "}
                <span className="text-pink-400">ฮาร์ดแวร์</span>{" "}
                เพื่อสร้างอนาคตใหม่
              </p>
            </div>
          </motion.div>

          {/* === Timeline Skill & Tech === */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="relative pl-6 border-l-2 border-cyan-500/40">
              {[
                {
                  icon: Code,
                  color: "text-cyan-400",
                  title: "Software Development",
                  desc: "Full-stack | React | Next.js | Node.js ",
                  dot: "bg-cyan-400",
                },
                {
                  icon: Cpu,
                  color: "text-pink-400",
                  title: "Embedded & IoT",
                  desc: "Arduino | ESP32 | Sensors | PCB Design | MQTT",
                  dot: "bg-pink-400",
                },
              ].map((item, idx) => (
                <div key={idx} className="mb-8 relative">
                  <div
                    className={`absolute -left-4 top-1.5 w-3 h-3 ${item.dot} rounded-full shadow-md animate-ping`}
                  />
                  <h3
                    className={`text-xl font-semibold flex items-center gap-2 ${item.color}`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* keyframes for grid animation */}
      <style>{`
        @keyframes gridmove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 400px;
          }
        }
      `}</style>
    </div>
  );
};
