import { motion } from "framer-motion"

const BigCard = () => (
    <article className="grid gap-[16px]">
        <motion.div whileHover={{ boxShadow: '0 0 20px 4px rgba(51, 51, 51, .1)', transition: {duration: 0} }} className="overflow-hidden">
            <a href="">
                <motion.img
                    whileHover={{ scale: 1.04 }}
                    className="object-cover" src="./images/imagen-ejemplo2.webp" alt="" />
            </a>
        </motion.div>
        <div className="flex flex-col gap-[12px]">
            <div className="font-noto-sans text-[24px] font-normal leading-[32px]">
                custom fields & kanban view on air
            </div>
            <div>
                Enabling teams to efficiently organize and track creative assets
            </div>
            <div className="font-inter text-[#666] tracking-[1.3px] text-[12px] font-semibold">
                SEP 2023 - FEB 2024
            </div>
        </div>
    </article>
)

export default BigCard

// no te olvides de checar si vale la pena agregar un ancho maximo al las card, o al menos a la imagen, para que no se extienda por toda la pantalla en resoluciones pequeñas