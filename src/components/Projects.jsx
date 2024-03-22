import Container from "../sub-components/Container"
import BigCard from "../sub-components/BigCard"

const Projects = () => (
    <Container id={"projects"} className={"flex flex-col gap-[12px]"}>
        <div>
            <h2 className="font-canela-deck text-[32px]">Proyectos:</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[45px]">
            <BigCard
                link={"https://github.com/Miguel5040/Proyecto-Pet-"}
                file={"petplus.png"}
                name={"Pet+"}
                description={"Aplicación para llevar un control total sobre tus mascotas"}
                tech={"REACT - PYTHON - HTML - CSS - JAVASCRIPT - FLASK - SQL ALCHEMY"}
            />
            <BigCard
                link={"https://github.com/Miguel5040/Miguel5040-contact-list"}
                file={"contact-list.png"}
                name={"Contact List App"}
                description={"Aplicación para registrar información de contactos"}
                tech={"REACT - HTML - CSS - JAVASCRIPT"}
            />
            <BigCard
                link={"https://github.com/Miguel5040/RESTful-API-Starwars"}
                file={"api-rest.png"}
                name={"RESTful API Star Wars"}
                description={"API rest de Star Wars para crear usuarios, agregar favoritos, solicitar información"}
                tech={"PYTHON - FLASK - SQL ALCHEMY - POSTGRE_SQL"}
            />
            <BigCard
                link={"https://github.com/Miguel5040/Proyecto-JWT-Auth"}
                file={"jwt.png"}
                name={"Modelo de registro de aplicación"}
                description={"Modelo de aplicación Backend para realizar registros de usuarios y autenticarlos con JWT y creación de Tokens"}
                tech={"PYTHON - FLASK - SQL ALCHEMY - POSTGRE_SQL - JWT"}
            />
        </div>
    </Container>
)

export default Projects