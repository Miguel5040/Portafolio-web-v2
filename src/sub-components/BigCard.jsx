import { motion } from "framer-motion"

const BigCard = (props) => (
    <article className="gap-[16px] flex flex-col">
        <motion.div whileHover={{ boxShadow: '0 0 20px 4px rgba(51, 51, 51, .2)', transition: { duration: 0.3 } }} className="overflow-hidden">
            <a href={props.link} target={props.target}>
                <motion.img
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    className="object-cover aspect-[3/2]" src={`./images/${props.file}`} alt={props.alt} />
            </a>
        </motion.div>
        <div className="flex flex-col gap-[12px] flex-1">
            <a href={props.link} target={props.target}>
                <div className="font-noto-sans text-[24px] font-normal leading-[32px] hover:underline">
                    {props.name}
                </div>
            </a>
            <div>
                {props.description}
            </div>
            <div className="font-inter text-[#666] tracking-[1.3px] text-[12px] font-semibold">
                {props.tech}
            </div>
        </div>
    </article>
)

export default BigCard

// no te olvides de checar si vale la pena agregar un ancho maximo al las card, o al menos a la imagen, para que no se extienda por toda la pantalla en resoluciones pequeñas