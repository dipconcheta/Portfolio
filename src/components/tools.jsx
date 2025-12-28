import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, LayoutGrid } from "lucide-react";

export default function Tools() {
  const [activeTab, setActiveTab] = useState("projects");

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
      name: "Javascript",
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
    { name: "HeidiSQL", icon: "/images/menu_image.png" },
  ];

  const projects = [
    {
      title: "Digital Product Sharing Subscription System",
      desc: "A digital product sharing system designed for group-based purchases. The system includes an admin role responsible for managing products and approving purchases, with full CRUD functionality implemented using Filament.",
      link: "https://github.com/dipconcheta/laravel-sistempatunganck",
      image: "/images/webptg.png",
    },
    {
      title: "Online Tutoring Website",
      desc: "An online tutoring website that presents the institution’s background, vision and mission, and available services in a clear and structured layout.",
      link: "https://github.com/dipconcheta/web-bimbel",
      image: "images/webbm.png",
    },
    {
      title: "Pempek Techi Website",
      desc: "A Pempek store website that displays the menu with ordering options through WhatsApp and GoFood, featuring store information, customer testimonials, and promotional content.",
      link: "https://github.com/dipconcheta/Pempek-Techi-Palembang",
      image: "/images/webpt.png",
    },
    {
      title: "Coffeeshop Website",
      desc: "A coffee shop website featuring a login page, menu and signature menu sections, a gallery, and an about page that highlights the store’s identity.",
      link: "https://github.com/dipconcheta/First-web-cafe",
      image: "/images/webcs.png",
    },
    {
      title: "Academic Information System",
      desc: "A simple campus academic system featuring role-based access for administrators, lecturers, and students, each with its own dedicated set of functionalities.",
      link: "https://github.com/dipconcheta/sistem-akademik-kelompok10",
      image: "/images/ska.png",
    },
    {
      title: "Personal Portfolio Website",
      desc: "A personal portfolio website built using React that showcases personal identity, interests, completed projects, and the technologies used.",
      link: "https://github.com/dipconcheta/Portfolio",
      image: "/images/portweb.png",
    },
  ];

  return (
    <section
      id="projects"
      className="pt-8 pb-8 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      <div className="flex justify-center mb-12 md:mb-20">
        <div className="inline-flex p-1.5 md:p-2 bg-slate-900/90 border border-slate-800 rounded-2xl md:rounded-3xl backdrop-blur-2xl shadow-2xl">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2 md:gap-3 px-6 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-sm md:text-lg transition-all duration-500 ${
              activeTab === "projects"
                ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/40"
                : "text-slate-500 hover:text-white"
            }`}
          >
            <LayoutGrid size={18} className="md:w-5.5" />
            Projects
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`flex items-center gap-2 md:gap-3 px-6 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-sm md:text-lg transition-all duration-500 ${
              activeTab === "tech"
                ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/40"
                : "text-slate-500 hover:text-white"
            }`}
          >
            <Code2 size={18} className="md:w-5.5" />
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {projects.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-900 border border-slate-800 rounded-3xl md:rounded-4xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-xl"
              >
                <div className="w-full h-48 sm:h-64 bg-slate-800 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-400 transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs md:text-sm hover:gap-4 transition-all uppercase tracking-wider"
                  >
                    VIEW ON GITHUB
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
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-8"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="flex flex-col items-center justify-center p-4 md:p-10 bg-slate-900/50 border border-slate-800 rounded-xl md:rounded-[2.5rem] shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-10 h-10 md:w-20 md:h-20 mb-3 md:mb-6 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                  />
                </div>
                <span className="text-slate-200 font-bold md:font-black tracking-tight md:tracking-widest text-[8px] md:text-sm uppercase text-center">
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
