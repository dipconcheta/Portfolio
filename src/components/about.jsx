export default function About() {
  return (
    <section
      id="about"
      className="py-10 px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* 1. JUDUL: linear Text tetap dipertahankan */}
      <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 mb-20 flex items-center justify-center gap-4 text-center">
        <div className="hidden sm:block h-px w-12 md:w-24 bg-linear-to-r from-transparent to-slate-700"></div>
        Let Me Introduce Myself
        <div className="hidden sm:block h-px w-12 md:w-24 bg-linear-to-l from-transparent to-slate-700"></div>
      </h2>

      <div className="grid md:grid-cols-5 gap-16 items-center">
        {/* SISI KIRI: Deskripsi dengan Border Menarik */}
        <div className="md:col-span-3 order-2 md:order-1">
          <div className="relative group">
            {/* Efek Border linear Berpendar (Animated Border Layer) */}
            <div className="absolute -inset-px bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-sm opacity-30 group-hover:opacity-100 group-hover:blur-md transition-all duration-700"></div>

            {/* Kontainer Utama Deskripsi */}
            <div className="relative bg-slate-900/80 border border-slate-800 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl">
              {/* Dekorasi Pojok (Aksen Kode) */}
              <div className="absolute top-4 right-6 font-mono text-slate-700 text-xs select-none"></div>

              <div className="text-slate-300 space-y-6 text-lg leading-relaxed">
                <p>
                  I'm an Information System student with a strong interest in{" "}
                  web development. I have experience in building web interfaces
                  using
                  <span className="text-cyan-400 font-mono bg-cyan-400/5 px-2 py-1 rounded-md border border-cyan-400/20 mx-1">
                    HTML, CSS, and JavaScript
                  </span>
                  , along with several modern frameworks. I am highly motivated,
                  and able to work effectively both independently and as part of
                  a team.
                </p>
              </div>

              {/* Aksen bawah dekoratif */}
              <div className="mt-8 pt-6 border-t border-slate-800/50 flex gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-purple-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-500/50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* SISI KANAN: Gambar Profil */}
        <div className="md:col-span-2 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-slate-700 overflow-hidden bg-slate-800 shadow-2xl">
              <img
                src="./src/assets/mnyt.webp"
                alt="Muhamad Radyf Al Zikra"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
