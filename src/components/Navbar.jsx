
const Navbar = () => (

    <nav className="bg-[#fffbf6] fixed top-[0%] bottom-auto left-[0%] right-[0%] z-50 py-[8px] pl-[16px] md:pl-[40px] pr-[8px] md:pr-[20px] block lg:hidden border-[1px] border-[rgba(51, 51, 51, .2)]">

        <div className="flex justify-between">
            <img className="w-[90px]" src="./images/signature.png" alt="" />
            <button className="flex flex-col justify-center w-[33px] md:w-[57px] px-[8px] md:px-[20px] border-0 bg-transparent gap-[3px]">
                <div className="bg-[#333] h-[2px] w-full rounded-full"></div>
                <div className="bg-[#333] h-[2px] w-full rounded-full"></div>
                <div className="bg-[#333] h-[2px] w-full rounded-full"></div>
            </button>
        </div>
    </nav>
)

export default Navbar
