import { useTranslation } from "react-i18next"

const Title = () => {

    const { i18n, t } = useTranslation()

    const isSpanish = i18n.language.startsWith('es');

    return (

        < div className=" lg:flex flex-col gap-[0.60rem] justify-start hidden font-canela-deck text-[4.875rem] text-center leading-[6.1rem]" >
            <div className="text-nowrap">
                {t("title1")}
            </div>

            <div className="text-nowrap relative leading-none inline-flex items-center justify-center">
                {t("title2")}
                <img
                    className={
                        "absolute h-[18px] top-1/2 -translate-y-[20%] " +
                        (isSpanish ? "right-[29.23rem]" : "right-[21.85rem]")
                    }
                    src="./images/face.png"
                    alt="face red drawing"
                />
            </div>

            <div className="text-nowrap relative">
                {t("title3")}
                <img className={"absolute h-[14px] w-[6px] right-[14rem] top-[0.7rem] rotate-[30deg] " + (isSpanish ? "" : "hidden")} src="./images/tilde.png" alt="tilde drawing" />
            </div>
        </div >
    )
}

export default Title