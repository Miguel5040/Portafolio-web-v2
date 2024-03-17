import { motion } from "framer-motion"

const BigCard = (props) => (
    <article className="grid gap-[16px]">
        <motion.div whileHover={{ boxShadow: '0 0 20px 4px rgba(51, 51, 51, .1)', transition: { duration: 0 } }} className="overflow-hidden">
            <a href={props.link}>
                <motion.img
                    whileHover={{ scale: 1.04 }}
                    className="object-cover" src={`./images/${props.file}`} alt={props.alt} />
            </a>
        </motion.div>
        <div className="flex flex-col gap-[12px]">
            <a href={props.link}>
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