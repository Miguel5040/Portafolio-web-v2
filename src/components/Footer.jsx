import Container from "../sub-components/Container"
import { useTranslation } from "react-i18next"

const Footer = () => {
    const { t } = useTranslation();
    return (

        <Container className={"px-[40px] py-[32px] z-[100]"}>
            <footer className="flex flex-col gap-2 items-center">
                <div className="flex gap-3 flex-wrap xs:flex-nowrap text-[12px] sm:text-[14px] font-normal items-center justify-center">
                    <div className="text-nowrap">
                        miguel-ordonez@outlook.com
                    </div>
                    <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 24 24" fill="#333" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-point"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /></svg>
                    </span>
                    <div>
                        <a className="hover:underline" href="https://www.linkedin.com/in/miguel-alberto-ordonez/" target="_blank">LinkedIn</a>
                    </div>
                    <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 24 24" fill="#333" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-point"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /></svg>
                    </span>
                    <div>
                        <a className="hover:underline" href="https://github.com/Miguel5040" target="_blank">Github</a>
                    </div>
                </div>
                <div className="text-[10px] sm:text-[13px]">
                    {t("footerText")}
                </div>
            </footer>
        </Container>
    )
}

export default Footer
