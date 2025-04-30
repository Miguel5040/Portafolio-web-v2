import { motion } from "framer-motion"

const Card = (props) => (
    <article className="flex flex-col gap-[16px]">
        <motion.div whileHover={{ boxShadow: '0 0 10px 2px rgba(51, 51, 51, .2)', transition: { duration: 0.3 } }} className="overflow-hidden">
            <a href={props.link} target="_blank">
                <motion.img
                    whileHover={{ scale: 1.04 }}
                    className="object-cover aspect-[3/2]" src={`./images/${props.file}`} alt={props.alt} />
            </a>
        </motion.div>
        <div className="flex flex-col gap-[12px] justify-between">
            <a href={props.link} target="_blank">
                <div className="font-noto-sans text-[24px] font-normal leading-[32px] hover:underline">
                    {props.name}
                </div>
            </a>
            <div className="font-inter text-[#666] tracking-[1.3px] text-[12px] font-semibold">
                {props.date}
            </div>
        </div>
    </article>
)

export default Card


// no te olvides de checar si vale la pena agregar un ancho maximo al las card, o al menos a la imagen, para que no se extienda por toda la pantalla en resoluciones pequeñas