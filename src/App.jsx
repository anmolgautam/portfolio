import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Navbar } from "@/layout/Navbar";
import {Projects} from "@/sections/Projects"
import {Experience} from "@/sections/Experience"
import {Research} from "@/sections/Research"
import {Contact} from "@/sections/Contact"


function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar/>
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Research />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
