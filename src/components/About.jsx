import Container from "../sub-components/Container"
import { useTranslation } from "react-i18next"
import { Trans } from 'react-i18next';

const About = () => {
    const { t } = useTranslation()
    return (

        <Container id={"about"} className={"flex flex-col relative lg:flex-col lg:gap-8 gap-6 items-center"}>
            <div className="flex justify-start items-end gap-8">
                <div className="relative max-w-[250px]">
                    <img className="aspect-square object-cover" src="./images/imagen-perfil-linkedin-square.png" alt="imagen de perfil" />
                    <div className="absolute bg-[#aeaeae] blur-[2px] w-full h-full right-[-10px] top-[-10px] sm:right-[-15px] sm:top-[-15px] z-[-1]"></div>
                    <img className="rounded-full w-[30px] xs:w-[50px] md:w-[70px] absolute right-[-10px] top-[-10px] sm:right-[-15px] sm:top-[-15px]" src="./images/sticker.png" />
                </div>
                <div className="relative text-[18px] xs:text-[25px] md:text-[32px] mb-6 font-canela-deck">
                    <p className="text-nowrap text-[22px] xs:text-[30px] md:text-[42px]">Miguel Alberto</p>
                    <p className="text-balance">{t("aboutRole")}</p>

                    <img className="hidden lg:block absolute top-[102px] right-[-112px] rotate-[220deg] w-[100px]" src="./images/arrow.png" />
                </div>
            </div>

            <article>
                <div className="xs:text-[25px] text-[20px] text-pretty font-jakarta tracking-normal" style={{ wordSpacing: "0.1em" }}>
                    <p className="mb-[30px]">
                        <Trans i18nKey="description1">
                            Profesional del desarrollo de software con <strong className="text-[#fc6563]">experiencia comprobada</strong> en la creación de soluciones digitales eficientes, automatización de procesos y mantenimiento de sistemas y plataformas web.
                        </Trans>
                    </p>
                    <p>
                        <Trans i18nKey="description2">
                            Persona <strong className="text-[#fc6563]">trabajadora y dedicada</strong>, si buscas un perfil con experiencia, dedicación y enfoque en resultados, te invito a consultar mi currículum.
                            <a className="hover:text-[#777] underline" href="./documents/miguel-alberto-cv.pdf" target="_blank" rel="noopener noreferrer">Mira mi curriculum aquí.</a>
                        </Trans>
                    </p>
                </div>
            </article>
        </Container>
    )
}

export default About
