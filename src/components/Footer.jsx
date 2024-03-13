import Container from "../sub-components/Container"

const Footer = () => (
    <Container className={"px-[40px] py-[32px]"}>
        <footer className="flex flex-col gap-4 items-center">
            <div className="flex gap-5">
                <div>
                    Miguel Alberto
                </div>
                <span>
                    .
                </span>
                <div>
                    <a className="hover:underline" href="">Linkedin</a>
                </div>
                <span>
                    .
                </span>
                <div>
                    <a className="hover:underline" href="">github</a>
                </div>
                <span>
                    .
                </span>
                <div>
                    <a className="hover:underline" href="">email</a>
                </div>
            </div>
            <div className="text-[14px]">
                website built with webflow, figma, procreate. set in söhne buch & kraftig, canela deck light.
            </div>
        </footer>
    </Container>
)

export default Footer
