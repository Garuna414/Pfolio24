import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div className="overflow-x-hidden mt-[68px] bg-gradient-to-br from-[#ffd4d4] to-[#f5f5f5]">
        <div>
          <Landing />
          <div className="mb-auto">
            <About />
          </div>
          <Projects />
          <Skills />
          <Footer />
        </div>
      </div>
    </div>
  );
}
