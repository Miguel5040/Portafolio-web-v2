import { useState } from "react"
import { useTranslation } from "react-i18next"

const Introduction = () => {

    const { i18n, t } = useTranslation()

    const isSpanish = i18n.language.startsWith('es');

    const [email, setEmail] = useState(t("introduction.text8"))
    const [classEmail, setClassEmail] = useState("underline hover:text-[#777] cursor-pointer text-nowrap")

    function emailTrigger() {
        setEmail("miguel-ordonez@outlook.com")
        setClassEmail("text-[#fc6563] text-nowrap")
    }

    return (
        <div className="font-jakarta text-[24px] md:text-[30px] leading-[40px] lg:leading-[45px] font-normal">
            <div className="lg:flex lg:flex-col hidden items-center justify-center">
                <div className="h-[64px] flex flex-row gap-2">
                    <div>{t("introduction.text1")}<a href={isSpanish ? "https://es.wikipedia.org/wiki/Caf%C3%A9" : "https://en.wikipedia.org/wiki/Coffee"} target="_blank" className="cursor-pointer hover:text-[#fc6563]">{t("introduction.text2")}</a> <img className="absolute h-[25px] top-[28.6rem] right-[36rem]" src="./images/espresso.png" /></div> <img className="h-[60px]" src="./images/cafe.png" /> <div>{t("introduction.text3")}</div> <img className="h-[50px]" src="./images/tenis.png" />,
                </div>
                <div className="h-[64px] flex flex-row gap-2">
                    <div>{t("introduction.text4")}</div> <img className="h-[50px]" src="./images/light-knight.png" /> <div className="relative">{t("introduction.text5")}<img className={"absolute h-[14px] " + (isSpanish ? "w-[180px] right-2" : "w-[270px] right-0")} src="./images/underline-red.png" /></div>
                </div>
                <div className="min-h-[64px] flex justify-center items-center">
                    <div className="w-full text-center">
                        {t("introduction.text6")}<a className={classEmail} onClick={emailTrigger}>{email}</a>{t("introduction.text7")}<a className="underline hover:text-[#777] cursor-pointer" href="https://www.linkedin.com/in/miguel-alberto-ordonez/" target="_blank">linkedin</a>.
                    </div>
                </div>
            </div>
            <div className="block lg:hidden md:leading-[50px]">
                {t("introduction.responsiveText1")}<a href="https://es.wikipedia.org/wiki/Caf%C3%A9" target="_blank" className="cursor-pointer hover:text-[#fc6563]">{t("introduction.responsiveText2")}</a><img className="h-[40px] md:h-[50px] inline mx-2" src="./images/cafe.png" />{t("introduction.responsiveText3")}<img className="h-[35px] md:h-[45px] inline mx-2" src="./images/tenis.png" />{t("introduction.responsiveText4")}<img className="h-[30px] md:h-[40px] inline mx-2" src="./images/light-knight.png" />{t("introduction.responsiveText5")}<div className="inline xs:text-nowrap"><a className={classEmail} onClick={emailTrigger}>{email}</a></div>{t("introduction.responsiveText6")}<a className="underline hover:text-[#777] cursor-pointer" href="https://www.linkedin.com/in/miguel-alberto-ordonez/" target="_blank">linkedin</a>.
            </div>

        </div >
    )
}

export default Introduction

