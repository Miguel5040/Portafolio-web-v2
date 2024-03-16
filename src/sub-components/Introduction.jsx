
const Introduction = () => (
    <div className="font-jakarta text-[24px] md:text-[30px] leading-[40px] lg:leading-[45px] font-normal">
        <div className="lg:flex lg:flex-col hidden items-center">
            <div className="h-[64px] flex flex-row gap-2">
                <div>le encanta el <a href="https://es.wikipedia.org/wiki/Caf%C3%A9" target="_blank" className="cursor-pointer hover:text-[#fc6563]">cafe</a> <img className="absolute h-[25px] top-[28.6rem] right-[35rem]" src="./images/espresso.png"/></div> <img className="h-[60px]" src="./images/cafe.png"/> <div>, salir a correr en la mañana</div> <img className="h-[50px]" src="./images/tenis.png"/>,
            </div>
            <div className="h-[64px] flex flex-row gap-2">
                <div>leer algo interesante</div> <img className="h-[40px]" src="./images/libro.png"/> <div className="relative">y desarrollar paginas web! <img className="absolute h-[10px] w-[180px] right-2" src="./images/underline-red.png"/></div>
            </div>
            <div className="h-[64px]">
                mandale un saludo por <a className="underline hover:text-[#777] cursor-pointer">correo electronico</a> o <a className="underline hover:text-[#777] cursor-pointer">linkedin</a>.
            </div>
        </div>
        <div className="block lg:hidden md:leading-[50px]">
            miguel alberto es un desarrollador web ubicado en los cabos, mexico. le encanta el <a href="https://es.wikipedia.org/wiki/Caf%C3%A9" target="_blank" className="cursor-pointer hover:text-[#fc6563]">cafe</a><img className="h-[40px] md:h-[50px] inline mx-2" src="./images/cafe.png"/>, salir a correr en la mañana <img className="h-[35px] md:h-[45px] inline mx-2" src="./images/tenis.png"/>, leer algo interesante <img className="h-[30px] md:h-[40px] inline mx-2" src="./images/libro.png"/> y desarrollar paginas web!. mandale un saludo por correo <a className="underline hover:text-[#777] cursor-pointer">correo electronico</a> o <a className="underline hover:text-[#777] cursor-pointer">linkedin</a>.
        </div>
    </div>

)

export default Introduction
