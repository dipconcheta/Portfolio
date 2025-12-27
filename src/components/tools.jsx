import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, LayoutGrid, Rocket, ExternalLink } from "lucide-react";

export default function Tools() {
  const [activeTab, setActiveTab] = useState("projects");

  // 1. DATA TECH STACK (Langsung Berwarna)
  const techStack = [
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    { name: "MAMP", icon: "/images/mamplogo.webp" },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "phpMyAdmin",
      icon: "https://www.phpmyadmin.net/static/images/logo-og.png",
    },
    {
      name: "HeidiSQL",
      icon: "/images/menu_image.png",
    },
  ];

  // 2. DATA PROJECTS (Ganti path image dengan gambar aslimu)
  const projects = [
    {
      title: "Digital Product Sharing Subscription System",
      desc: "Sistem informasi penjualan berbasis web dengan integrasi pembayaran dan manajemen produk.",
      link: "#",
      image: "/images/webptg.png", // Ganti ke path lokal: "./images/project1.png"
    },
    {
      title: "Online Tutoring Website",
      desc: "Manajemen stok barang gudang realtime menggunakan Laravel & MySQL untuk optimasi bisnis.",
      link: "#",
      image: "images/webbm.png", // Ganti ke path lokal: "./images/project2.png"
    },

    {
      title: "Pempek Techi Website",
      desc: "Manajemen stok barang gudang realtime menggunakan Laravel & MySQL untuk optimasi bisnis.",
      link: "#",
      image: "/images/webpt.png", // Ganti ke path lokal: "./images/project2.png"
    },

    {
      title: "Coffeeshop Website",
      desc: "Manajemen stok barang gudang realtime menggunakan Laravel & MySQL untuk optimasi bisnis.",
      link: "#",
      image: "/images/webcs.png", // Ganti ke path lokal: "./images/project2.png"
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      {/* TAB SELECTOR */}
      <div className="flex justify-center mb-20">
        <div className="inline-flex p-2 bg-slate-900/90 border border-slate-800 rounded-3xl backdrop-blur-2xl shadow-2xl">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-3 px-12 py-4 rounded-2xl font-black text-lg transition-all duration-500 ${
              activeTab === "projects"
                ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/40"
                : "text-slate-500 hover:text-white"
            }`}
          >
            <LayoutGrid size={22} />
            Projects
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`flex items-center gap-3 px-12 py-4 rounded-2xl font-black text-lg transition-all duration-500 ${
              activeTab === "tech"
                ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/40"
                : "text-slate-500 hover:text-white"
            }`}
          >
            <Code2 size={22} />
            Tech Stack
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "projects" ? (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-900 border border-slate-800 rounded-4xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-xl"
              >
                {/* Image Section */}
                <div className="w-full h-64 bg-slate-800 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay linear agar teks di bawahnya terlihat menyatu */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent"></div>

                  {/* Icon muncul saat Hover */}
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <ExternalLink className="text-white w-10 h-10" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-base mb-6 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm hover:gap-4 transition-all uppercase tracking-wider"
                  >
                    VIEW ON GITHUB <Rocket size={18} />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="tech"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                className="flex flex-col items-center justify-center p-10 bg-slate-900/50 border border-slate-800 rounded-[40px] shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                {/* Logo Selalu Berwarna */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                  />
                </div>
                <span className="text-slate-200 font-black tracking-widest text-sm uppercase text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
