import Container from "../sub-components/Container"

const About = () => (

    <Container id={"about"} className={"flex flex-col relative lg:flex-col lg:gap-8 gap-6 items-center"}>
        <div className="flex justify-start items-end gap-8">
            <div className="relative max-w-[250px]">
                <img className="aspect-square object-cover" src="./images/foto.jpg" alt="imagen de perfil" />
                <div className="absolute bg-[#aeaeae] blur-[2px] w-full h-full right-[-10px] top-[-10px] sm:right-[-15px] sm:top-[-15px] z-[-1]"></div>
                <img className="rounded-full w-[30px] xs:w-[50px] md:w-[70px] absolute right-[-10px] top-[-10px] sm:right-[-15px] sm:top-[-15px]" src="./images/sticker.png" />
            </div>
            <div className="text-[18px] xs:text-[25px] md:text-[32px] mb-6 font-canela-deck">
                <p className="text-nowrap text-[22px] xs:text-[30px] md:text-[42px]">Miguel Alberto</p>
                <p className="text-balance">Desarrollador web Full stack</p>
            </div>
        </div>

        <img className="hidden xl:block absolute top-[220px] right-[120px] rotate-[220deg] scale-x-[1] w-[100px]" src="./images/arrow.png" />

        <article>
            <div className="xs:text-[25px] text-[20px] text-pretty font-jakarta">
                <p className="mb-[30px]">
                    Apasionado por crear experiencias digitales únicas y funcionales. Mi enfoque se centra en la <strong className="text-[#fc6563]">innovación y la creatividad</strong> para superar desafíos y ofrecer resultados excepcionales.
                </p>
                <p>
                    Persona <strong className="text-[#fc6563]">trabajadora y dedicada</strong>, si estás buscando a alguien que aporte pasión y determinación a tu equipo, ¡aquí estoy yo!. <a className="hover:text-[#777] underline" href="">Mira mi curriculum aqui.</a>
                </p>
            </div>
        </article>
    </Container>
)

export default About
