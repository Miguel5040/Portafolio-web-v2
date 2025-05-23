import { useTranslation } from "react-i18next"

const Title = () => {

    const { i18n, t } = useTranslation()

    const isSpanish = i18n.language.startsWith('es');

    return (
        < div className=" lg:block hidden font-canela-deck text-[78px] text-center leading-[125%]" >
            <div className="text-nowrap">
                {t("title1")}
            </div>
            <div className="text-nowrap relative">
                {t("title2")}
                <img className={"absolute h-[18px] top-[46%] " + (isSpanish ? "right-[29.23rem]" : "right-[21.85rem]")} src="./images/face.png" />
            </div>
            <div className="text-nowrap relative">
                {t("title3")}
                <img className={"absolute h-[14px] w-[6px] right-[14rem] top-[0.7rem] rotate-[30deg] " + (isSpanish ? "" : "hidden")} src="./images/tilde.png" />
            </div>
        </div >
    )
}

export default Title