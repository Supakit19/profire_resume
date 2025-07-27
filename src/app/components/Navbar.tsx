"use client";
import React from "react";
import { Home, User, Code2, Briefcase } from "lucide-react";

interface NavItem {
  id: string;
  icon: React.ComponentType<{ className: string }>;
  label: string;
}

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  scrollToSection,
}) => {
  const navItems: NavItem[] = [
    { id: "home", icon: Home, label: "หน้าแรก" },
    { id: "about", icon: User, label: "เกี่ยวกับ" },
    { id: "skills", icon: Code2, label: "ทักษะ" },
    { id: "projects", icon: Briefcase, label: "ผลงาน" },
  ];

  return (
    <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center gap-4 bg-gradient-to-b from-cyan-500/10 to-pink-500/10 backdrop-blur-lg p-4 rounded-l-2xl border-l border-t border-b border-cyan-400/20 shadow-2xl">
      {navItems.map((item, index) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`relative group p-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
            activeSection === item.id
              ? "bg-gradient-to-r from-cyan-500 to-pink-500 shadow-lg"
              : "bg-white/10 hover:bg-white/20"
          } animate-nav-reveal`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <item.icon className="w-6 h-6 text-white group-hover:text-cyan-200" />
          <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white text-sm font-medium px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
