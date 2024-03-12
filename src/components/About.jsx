
const About = () => (
    <section className="flex flex-col lg:flex-row max-w-[1120px] mx-[16px] md:mx-[40px] lg:mx-[48px] xl:mx-[80px] mt-[80px] sm:mt-[100px] lg:mt-[120px] gap-10">

        <div className="w-1/3 flex justify-start items-center">
            <div className="max-w-[300px]">
                <img className="aspect-square object-cover rounded-full border-2 border-[#333] p-2" src="./images/foto.jpg" alt="imagen de perfil" />
            </div>
        </div>
        
        <article className="w-2/3">
            <div className="text-[30px]">
                <p className="mb-[30px]">
                    Apasionado por crear experiencias digitales únicas y funcionales. Mi enfoque se centra en la innovación y la creatividad para superar desafíos y ofrecer resultados excepcionales.
                </p>
                <p>
                    Persona trabajadora y dedicada, si estás buscando a alguien que aporte pasión y determinación a tu equipo, ¡aquí estoy yo!
                </p>
            </div>
        </article>

    </section>
)

export default About
