import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Tech from "./components/Tech"
import Footer from "./components/Footer"
import Fade from "./sub-components/Fade"

const App = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <Education />
            <Projects />
            <About />
            <Footer />
            <Fade />
        </>
    )
}

export default App
