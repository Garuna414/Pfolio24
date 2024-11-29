import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  )
}
