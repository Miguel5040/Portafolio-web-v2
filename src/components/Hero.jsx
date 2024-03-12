import Title from "../sub-components/Title"
import Introduction from "../sub-components/Introduction"

const Hero = () => {

    return (
        <header className="flex flex-col items-center gap-[72px] justify-center pt-[48px] md:pt-[64px] lg:pt-[110px] max-w-[880px] mx-[16px] md:mx-[40px] lg:mx-[48px]">
            <Title />
            <Introduction />
        </header>
    )
}

export default Hero