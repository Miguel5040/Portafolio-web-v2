import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Education from "../components/Education"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import Fade from "../sub-components/Fade"

const Home = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <About />
      <Footer />
      <Fade />
    </>
  )
}

export default Home
