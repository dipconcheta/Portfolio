import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const showAlert = (title, text, icon) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      background: "#0f172a",
      color: "#f8fafc",
      confirmButtonColor: "#2563eb",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup:
          "rounded-[30px] border border-slate-800 backdrop-blur-xl shadow-2xl",
        title: "text-2xl font-black tracking-tight",
      },
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "serviceportgw9",
        "template_hcv1xfh",
        form.current,
        "0Sopb8L0irHp7K57n"
      )
      .then(
        () => {
          showAlert(
            "Success!",
            "Message sent successfully, Thank you!",
            "success"
          );
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.error(error);
          showAlert("Error!", "Failed to send message.", "error");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="pt-16 pb-8 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 mb-10 md:mb-16 flex items-center justify-center gap-3 md:gap-4 text-center"
      >
        <div className="hidden sm:block h-px w-8 md:w-24 bg-slate-700"></div>
        Get In Touch
        <div className="hidden sm:block h-px w-8 md:w-24 bg-slate-700"></div>
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center bg-slate-900/40 border border-slate-800 p-6 sm:p-8 md:p-12 rounded-[30px] md:rounded-[40px] backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 md:w-64 md:h-64 bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 md:w-64 md:h-64 bg-purple-600/10 rounded-full blur-[80px] md:blur-[100px]"></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group justify-self-center w-full max-w-sm lg:max-w-md lg:justify-self-start"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative w-full aspect-square overflow-hidden rounded-3xl border border-slate-700 bg-slate-800">
            <img
              src="./images/contactport.png"
              alt="Contact Me"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full space-y-6"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="relative group">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors w-4"
              />
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base"
              />
            </div>

            <div className="relative group">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors w-4"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base"
              />
            </div>

            <div className="relative group">
              <FontAwesomeIcon
                icon={faPhone}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors w-4"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base"
              />
            </div>

            <div className="relative group">
              <FontAwesomeIcon
                icon={faCommentDots}
                className="absolute left-4 top-5 text-slate-500 group-focus-within:text-blue-400 transition-colors w-4"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-sm md:text-base"
              ></textarea>
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={isSending}
                className="w-full md:w-64 px-8 py-3.5 md:py-4 bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl md:rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1 active:scale-95 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : <>Submit</>}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
