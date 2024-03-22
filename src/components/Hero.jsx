import Title from "../sub-components/Title"
import Introduction from "../sub-components/Introduction"

const Hero = () => {

    return (
        <header id="inicio" className="flex flex-col relative items-center gap-[72px] justify-center pt-[48px] md:pt-[64px] lg:pt-[110px] lg:w-[880px] mx-[16px] md:mx-[40px] lg:mx-[48px] mt-[80px] lg:mt-[0px]">
            <Title />
            <Introduction />
        </header>
    )
}

export default Hero