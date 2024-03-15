import Container from "../sub-components/Container"
import BigCard from "../sub-components/BigCard"

const Projects = () => (
    <Container id={"projects"} className={"flex flex-col gap-[12px]"}>
        <div>
            <h2 className="font-canela-deck text-[32px]">Proyectos:</h2>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <BigCard />
            <BigCard />
            <BigCard />
        </div>
    </Container>
)

export default Projects