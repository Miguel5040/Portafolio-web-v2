import { useState } from "react"

const Introduction = () => {

    const [email, setEmail] = useState("correo electrónico")
    const [classEmail, setClassEmail] = useState("underline hover:text-[#777] cursor-pointer")

    function emailTrigger() {
        setEmail("miguel-ordonez@outlook.com")
        setClassEmail("text-[#fc6563]")
    }

    return (
        <div className="font-jakarta text-[24px] md:text-[30px] leading-[40px] lg:leading-[45px] font-normal">
            <div className="lg:flex lg:flex-col hidden items-center justify-center">
                <div className="h-[64px] flex flex-row gap-2">
                    <div>¡Le encanta el <a href="https://es.wikipedia.org/wiki/Caf%C3%A9" target="_blank" className="cursor-pointer hover:text-[#fc6563]">café</a> <img className="absolute h-[25px] top-[28.6rem] right-[36rem]" src="./images/espresso.png" /></div> <img className="h-[60px]" src="./images/cafe.png" /> <div>, salir a correr en la mañana</div> <img className="h-[50px]" src="./images/tenis.png" />,
                </div>
                <div className="h-[64px] flex flex-row gap-2">
                    <div>jugar ajedrez en linea</div> <img className="h-[50px]" src="./images/light-knight.png" /> <div className="relative">y desarrollar páginas web! <img className="absolute h-[10px] w-[180px] right-2" src="./images/underline-red.png" /></div>
                </div>
                <div className="h-[64px] flex justify-center items-center">
                    <div className="w-max">
                        Mándale un saludo por <a className={classEmail} onClick={emailTrigger}>{email}</a> o <a className="underline hover:text-[#777] cursor-pointer" href="https://www.linkedin.com/in/miguel-alberto-ordonez/" target="_blank">linkedin</a>.
                    </div>
                </div>
            </div>
            <div className="block lg:hidden md:leading-[50px]">
                Miguel Alberto es un desarrollador web ubicado en Los Cabos, México. ¡Le encanta el <a href="https://es.wikipedia.org/wiki/Caf%C3%A9" target="_blank" className="cursor-pointer hover:text-[#fc6563]">café</a><img className="h-[40px] md:h-[50px] inline mx-2" src="./images/cafe.png" />, salir a correr en la mañana <img className="h-[35px] md:h-[45px] inline mx-2" src="./images/tenis.png" />, leer algo interesante <img className="h-[30px] md:h-[40px] inline mx-2" src="./images/libro.png" /> y desarrollar paginas web!. mandale un saludo por <div className="inline xs:text-nowrap"><a className={classEmail} onClick={emailTrigger}>{email}</a></div> o <a className="underline hover:text-[#777] cursor-pointer" href="https://www.linkedin.com/in/miguel-alberto-ordonez/" target="_blank">LinkedIn</a>.
            </div>
        </div>
    )
}

export default Introduction
