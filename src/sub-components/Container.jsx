
const Container = (props) => (

    <section id={props.id} className={`max-w-[1120px] mx-[16px] md:mx-[40px] lg:mx-[48px] xl:mx-[80px] mt-[80px] sm:mt-[100px] lg:mt-[120px] ${props.className}`}>
        {props.children}
    </section>
)

export default Container