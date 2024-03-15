import Container from "../sub-components/Container"
import Card from "../sub-components/Card"

const Education = () => (
    <Container id={"education"} className={"flex flex-col gap-[12px]"}>
        <div>
            <h2 className="font-canela-deck text-[32px]">Educación:</h2>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px]">
            <Card />
            <Card />
            <Card />
        </div>
    </Container>
)

export default Education