import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-2 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Judul Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 mb-16 flex items-center justify-center gap-4 text-center"
      >
        <div className="hidden sm:block h-px w-12 md:w-24 bg-linear-to-r from-transparent to-slate-700"></div>
        Get In Touch
        <div className="hidden sm:block h-px w-12 md:w-24 bg-linear-to-l from-transparent to-slate-700"></div>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-900/40 border border-slate-800 p-8 md:p-12 rounded-[40px] backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Dekorasi Cahaya Latar */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]"></div>

        {/* SISI KIRI: Foto/Ilustrasi Anda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group justify-self-center md:justify-self-start"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-700 bg-slate-800">
            <img
              src="src/assets/contactport.png"
              alt="Contact Me"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>

        {/* SISI KANAN: Form Kontak */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <form className="space-y-4">
            {/* Input Name */}
            <div className="relative group">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors"
                size={20}
              />
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Input Email */}
            <div className="relative group">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors"
                size={20}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Input Phone */}
            <div className="relative group">
              <Phone
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors"
                size={20}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Input Message */}
            <div className="relative group">
              <MessageSquare
                className="absolute left-4 top-5 text-slate-500 group-focus-within:text-blue-400 transition-colors"
                size={20}
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="w-full md:w-64 px-10 py-4 bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1 active:scale-95"
              >
                Submit <Send size={20} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
