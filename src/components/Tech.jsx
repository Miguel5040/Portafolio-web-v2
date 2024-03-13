import Container from "../sub-components/Container"
import Language from "../sub-components/Language"

const Tech = () => (
    <Container className={"flex flex-col gap-[15px]"}>
        <div>
            <h2 className="font-canela-deck text-[32px]">Tecnologias:</h2>
        </div>
        <div className=" grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-[30px] sm:gap-[36px] md:gap-[56px]">
            <Language archivo={"react"} nombre={"React"} />
            <Language archivo={"python"} nombre={"Python"} />
            <Language archivo={"javascript"} nombre={"Javascript"} />
            <Language archivo={"html"} nombre={"HTML"} />
            <Language archivo={"css"} nombre={"CSS"} />
            <Language archivo={"tailwind"} nombre={"Tailwind CSS"} />
            <Language archivo={"engranajes"} nombre={"RESTful APIs"} />
            <Language archivo={"vscode"} nombre={"VS Code"} />
            <Language archivo={"git"} nombre={"Git"} />
            <Language archivo={"github"} nombre={"Github"} />
            <Language archivo={"flask"} nombre={"Flask"} />
            <Language archivo={"sqlalchemy"} nombre={"SQL Alchemy"} />
            <Language archivo={"mysql"} nombre={"MySQL"} />
            <Language archivo={"jest"} nombre={"Jest"} />
        </div>
    </Container>
)

export default Tech
