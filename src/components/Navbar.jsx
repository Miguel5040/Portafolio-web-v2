import { useState } from 'react'
import { motion } from 'framer-motion'
//Animacion pendiente

// const variants = {
//     open: { y: 0 },
//     closed: { y: "-170%" },
//   }

const Navbar = () => {

    const [menu, setMenu] = useState("hidden")

    //Funcion para manejar estado de visibilidad de navbar
    function menuClick() {
        if (menu === "hidden") {
            setMenu("block")
            return
        }
        setMenu("hidden")
    }

    // Función para hacer scroll a una sección después de click en navbar
    function scrollSection(id) {
        const section = document.getElementById(id)
        const yOffset = -100
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset

        window.scrollTo({ top: y, behavior: "smooth" })

        if (menu === 'block') {
            setMenu('hidden')
        }
    }

    return (
        <nav className="bg-[#fffbf6] w-full fixed top-[0%] bottom-auto left-[0%] right-[0%] z-50 py-[8px] pl-[16px] md:pl-[40px] pr-[8px] md:pr-[20px] block lg:hidden border-[1px] border-[rgba(51, 51, 51, .2)]">

            <div className="flex justify-between">
                <img className="w-[90px]" src="./images/signature.png" alt="miguel's signature" />
                <button className="flex flex-col justify-center w-[33px] md:w-[57px] px-[8px] md:px-[20px] border-0 bg-transparent gap-[3px]" onClick={menuClick}>
                    <div className="bg-[#333] h-[2px] w-full rounded-full"></div>
                    <div className="bg-[#333] h-[2px] w-full rounded-full"></div>
                    <div className="bg-[#333] h-[2px] w-full rounded-full"></div>
                </button>
            </div>

            <div className="absolute top-[100%] left-0 right-0 lg:hidden block">
                <motion.div
                // variants={variants}
                // animate={menu === "block" ? "open" : "closed"} 
                // transition={{duration: 2}}
                className={`flex flex-col w-full gap-[25px] py-[20px] bg-[#fffbf6] font-noto-sans font-normal text-[16px] items-center border-b-[1px] border-x-[1px] border-[rgba(51, 51, 51, .2)] ${menu}`}>
                    <a className='hover:font-medium cursor-pointer' onClick={() => scrollSection("inicio")}>Inicio</a>
                    <a className='hover:font-medium cursor-pointer' onClick={() => scrollSection("education")}>Educación</a>
                    <a className='hover:font-medium cursor-pointer' onClick={() => scrollSection("projects")}>Proyectos</a>
                    <a className='hover:font-medium cursor-pointer' onClick={() => scrollSection("about")}>Sobre mi</a>
                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar
