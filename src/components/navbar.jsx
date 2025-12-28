import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects & Stack", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 w-full flex justify-center z-50 px-6 font-sans">
      <nav className="flex items-center justify-between md:justify-center gap-6 px-6 py-3 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-lg shadow-2xl">
        <div className="flex items-center gap-2 md:border-r md:border-slate-700 md:pr-6 md:mr-2">
          <h1 className="text-sm font-bold text-blue-400 tracking-widest">
            Radyf<span className="hidden sm:inline">'s Portfolio</span>
          </h1>
        </div>

        <div className="hidden md:flex gap-4 md:gap-8 text-[13px] font-semibold tracking-wide uppercase">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-1.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-500"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-400 p-1"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-6 right-6 p-4 rounded-2xl bg-slate-900 border border-slate-800 backdrop-blur-xl flex flex-col gap-2 md:hidden"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 rounded-xl text-[13px] font-bold text-blue-400 hover:bg-blue-600/20 text-center uppercase tracking-widest transition-all"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
