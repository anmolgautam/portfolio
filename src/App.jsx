import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Navbar } from "@/layout/Navbar";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Research } from "@/sections/Research";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Research />
          <Projects/>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
