import Container from "../sub-components/Container"
import BigCard from "../sub-components/BigCard"
import { useTranslation } from "react-i18next"

const Projects = () => {
    const { t } = useTranslation()

    return (
        <Container id={"projects"} className={"flex flex-col gap-[12px]"}>
            <div>
                <h2 className="font-canela-deck text-[32px]">{t("projects")}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[45px]">
                <BigCard
                    link={"https://hidroequipos.vercel.app/"}
                    target={"_blank"}
                    file={"pagina-hidro.webp"}
                    name={t("projectsCards.project1.name")}
                    description={t("projectsCards.project1.description")}
                    tech={"REACT - HTML - CSS - JAVASCRIPT - MYSQL - EXPRESS"}
                />
                <BigCard
                    link={"/project"}
                    target={"_self"}
                    file={"system-ilustration.webp"}
                    name={t("projectsCards.project2.name")}
                    description={t("projectsCards.project2.description")}
                    tech={"JAVASCRIPT - EXPRESS - SQL SERVER"}
                />
                <BigCard
                    link={""}
                    target={"_self"}
                    file={"dmc-website-frame.webp"}
                    name={t("projectsCards.project3.name")}
                    description={t("projectsCards.project3.description")}
                    tech={"REACT - HTML - TAILWIND - JAVASCRIPT"}
                />
                <BigCard
                    link={"https://github.com/Miguel5040/Proyecto-Pet-"}
                    target={"_blank"}
                    file={"petplus.webp"}
                    name={t("projectsCards.project4.name")}
                    description={t("projectsCards.project4.description")}
                    tech={"REACT - PYTHON - HTML - CSS - JAVASCRIPT - FLASK - SQL ALCHEMY"}
                />
            </div>
        </Container>
    )
}

export default Projects