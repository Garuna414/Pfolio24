import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Landing/>
      <div className="mb-auto">
      <About/>
      </div>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  )
}