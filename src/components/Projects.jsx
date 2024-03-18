import Container from "../sub-components/Container"
import BigCard from "../sub-components/BigCard"

const Projects = () => (
    <Container id={"projects"} className={"flex flex-col gap-[12px]"}>
        <div>
            <h2 className="font-canela-deck text-[32px]">Proyectos:</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <BigCard
                link={"https://github.com/Miguel5040/Proyecto-Pet-"}
                file={"petplus2.png"}
                name={"Pet+"}
                description={"Aplicacion para llevar un control total sobre tus mascotas"}
                tech={"REACT - PYTHON - HTML - CSS - JAVASCRIPT"}
            />
            <BigCard
                link={""}
                file={"recetas.webp"}
                name={"Recetas con IA"}
                description={"Aplicacion para generar y recomendar recetas con inteligencia artificial"}
                tech={"REACT - PYTHON - HTML - CSS - NODE.JS"}
            />
            <BigCard
                link={""}
                file={"imagen-ejemplo.png"}
                name={"Desayunos en 5 minutos"}
                description={"Aplicacion de recetas de desayunos faciles de preparar"}
                tech={"REACT - PYTHON - HTML - CSS - NODE.JS"}
            />
        </div>
    </Container>
)

export default Projects