import Container from "../sub-components/Container"
import Card from "../sub-components/Card"

const Education = () => (
    <Container id={"education"} className={"flex flex-col gap-[12px]"}>
        <div>
            <h2 className="font-canela-deck text-[32px]">Educacion:</h2>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px]">
            <Card
                file={"4geeks-academy.png"}
                link={"https://certificate.4geeks.com/31d61db754308ddec0deb4eb329eab8f07dcd948"}
                alt={"4geeks academy logo"}
                name={"4Geeks Academy bootcamp desarrollo web full stack"}
                date={"SEP 2023 - FEB 2024"}
            />
            <Card
                file={"4geeks-academy.png"}
                link={"https://certificate.4geeks.com/31d61db754308ddec0deb4eb329eab8f07dcd948"}
                alt={"4geeks academy logo"}
                name={"4Geeks Academy bootcamp desarrollo web full stack"}
                date={"SEP 2023 - FEB 2024"}
            />
            <Card
                file={"4geeks-academy.png"}
                link={"https://certificate.4geeks.com/31d61db754308ddec0deb4eb329eab8f07dcd948"}
                alt={"4geeks academy logo"}
                name={"4Geeks Academy bootcamp desarrollo web full stack"}
                date={"SEP 2023 - FEB 2024"}
            />
        </div>
    </Container>
)

export default Education