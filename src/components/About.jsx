import Container from "../sub-components/Container"

const About = () => (

    <Container id={"about"} className={"flex flex-col lg:flex-row lg:gap-0 gap-6 items-center"}>
        <div className="lg:w-1/3 flex justify-start items-center">
            <div className="max-w-[250px]">
                <img className="aspect-square object-cover border-2 border-[#333] p-3 shadow-2xl" src="./images/foto.jpg" alt="imagen de perfil" />
            </div>
        </div>
        
        <article className="lg:w-2/3">
            <div className="sm:text-[25px] text-[20px] text-pretty font-jakarta">
                <p className="mb-[30px]">
                    Apasionado por crear experiencias digitales únicas y funcionales. Mi enfoque se centra en la innovación y la creatividad para superar desafíos y ofrecer resultados excepcionales.
                </p>
                <p>
                    Persona trabajadora y dedicada, si estás buscando a alguien que aporte pasión y determinación a tu equipo, ¡aquí estoy yo!
                </p>
            </div>
        </article>
    </Container>
)

export default About
