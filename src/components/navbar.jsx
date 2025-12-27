export default function Navbar() {
  return (
    // Container utama agar navbar berada di tengah
    <header className="fixed top-6 w-full flex justify-center z-50 px-6">
      <nav className="flex items-center gap-6 px-6 py-3 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-lg shadow-2xl shadow-blue-500/10">
        {/* Nama/Logo gaya Badge */}
        <div className="hidden md:flex items-center gap-2 border-r border-slate-700 pr-6 mr-2">
          <h1 className="text-sm font-bold text-blue-400 tracking-widest">
            Radyf's Portfolio
          </h1>
        </div>

        {/* Menu Links */}
        <div className="flex gap-4 md:gap-8 text-[13px] font-semibold tracking-wide uppercase">
          <a
            href="#hero"
            className="px-4 py-1.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-4 py-1.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-500"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-4 py-1.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-500"
          >
            Projects & Stack
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-500"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
