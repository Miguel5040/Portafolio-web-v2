
const Language = (props) => (
    
    <div className="flex flex-col justify-center items-center gap-3">
        <img className="aspect-square w-[90px] transform transition-transform hover:scale-[1.035]" src={`./icons/${props.archivo}.svg`} alt={`Icono ${props.nombre}`} />
        <p className="font-normal">{props.nombre}</p>
    </div>
)

export default Language
