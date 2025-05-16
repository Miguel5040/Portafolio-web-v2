import Container from "../sub-components/Container"
import BigCard from "../sub-components/BigCard"

const Projects = () => (
    <Container id={"projects"} className={"flex flex-col gap-[12px]"}>
        <div>
            <h2 className="font-canela-deck text-[32px]">Proyectos:</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[45px]">
            <BigCard
                link={"https://hidroequipos.vercel.app/"}
                target={"_blank"}
                file={"pagina-hidro.png"}
                name={"Pagina web Hidroequipos"}
                description={"Pagina web para la constructora y mantenimiento de albercas de Los Cabos Hidroequipos"}
                tech={"REACT - HTML - CSS - JAVASCRIPT - MYSQL - EXPRESS"}
            />
            <BigCard
                link={"/project"}
                target={"_self"}
                file={"system-ilustration.png"}
                name={"Sistema para exportacion de catalogo de productos"}
                description={"Sistema para extraer informacion de una base de datos"}
                tech={"JAVASCRIPT - EXPRESS - SQL SERVER"}
            />
            <BigCard
                link={""}
                target={"_self"}
                file={"dmc-website-frame.png"}
                name={"Pagina web DMC (En desarrollo)"}
                description={"Pagina web para venta de tours y actividades en Los Cabos"}
                tech={"REACT - HTML - TAILWIND - JAVASCRIPT"}
            />
            <BigCard
                link={"https://github.com/Miguel5040/Proyecto-Pet-"}
                target={"_blank"}
                file={"petplus.png"}
                name={"Pet+"}
                description={"Aplicación para llevar un control total sobre tus mascotas"}
                tech={"REACT - PYTHON - HTML - CSS - JAVASCRIPT - FLASK - SQL ALCHEMY"}
            />
        </div>
    </Container>
)

export default Projects