import Container from "../sub-components/Container"
import Card from "../sub-components/Card"
import { useTranslation } from "react-i18next"

const Education = () => {
    const { t } = useTranslation()
    return (

        <Container id={"education"} className={"flex flex-col gap-[12px]"}>
            <div>
                <h2 className="font-canela-deck text-[32px]">{t("experienceEducation")}</h2>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px]">
                <Card
                    file={"hidro-blue.png"}
                    link={"https://www.facebook.com/hidropools"}
                    alt={"Hidroequipos Logo"}
                    name={t("experience1")}
                    date={t("dateExperience1")}
                />
                <Card
                    file={"4geeks-academy.png"}
                    link={"https://certificate.4geeks.com/31d61db754308ddec0deb4eb329eab8f07dcd948"}
                    alt={"4geeks academy logo"}
                    name={t("education1")}
                    date={t("dateEducation1")}
                />
            </div>
        </Container>
    )
}

export default Education