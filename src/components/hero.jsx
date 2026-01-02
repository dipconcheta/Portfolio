import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-auto flex items-center justify-center px-6 overflow-hidden pt-52 pb-24 bg-[#0b0f1a]"
    >
      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Hi There,
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500">
              I'm Muhamad Radyf Al Zikra
            </span>
          </h1>

          <div className="text-xl md:text-3xl font-bold text-slate-400 mb-12 h-10 tracking-wide">
            <Typewriter
              options={{
                strings: [
                  "Information Systems Student",
                  "Front End Enthusiast",
                  "Tech Explorer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 mb-10 w-full md:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1 active:scale-95 text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold border border-slate-700 transition-all hover:-translate-y-1 active:scale-95 text-center"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            {[
              {
                icon: faInstagram,
                href: "https://www.instagram.com/_rradyf?igsh=MWllYWZxbmt4MTUybw==",
                color: "hover:text-pink-500 hover:border-pink-500/50",
              },
              {
                icon: faGithub,
                href: "https://github.com/dipconcheta",
                color: "hover:text-white hover:border-white/50",
              },
              {
                icon: faWhatsapp,
                href: "https://wa.me/6281273507037",
                color: "hover:text-green-500 hover:border-green-500/50",
              },
              {
                icon: faLinkedin,
                href: "https://www.linkedin.com/in/muhamad-radyf-alzikra",
                color: "hover:text-blue-500 hover:border-blue-500/50",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center w-12 h-12 rounded-xl border border-slate-700 bg-slate-800/30 backdrop-blur-sm text-slate-400 transition-all duration-300 ${social.color} hover:bg-slate-800/60 hover:-translate-y-1`}
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="text-xl transition-transform group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
