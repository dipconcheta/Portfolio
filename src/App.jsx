import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Tools from "./components/tools";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
  return (
    <main className="bg-[#0b0f1a] min-h-screen text-slate-300 selection:bg-blue-500/30">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6">
        <Hero />

        <div className="flex flex-col items-center gap-24 ">
          <About />
          <Tools />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}
export default App;
