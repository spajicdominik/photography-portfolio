function Navbar() {
    return (
        <div className="w-full h-36 border-b border-[#B2B2B2] flex justify-between">
            <div className="bg-[#232323] w-48 h-full flex items-center justify-center" >
                <img src="src/assets/logo.png" alt="" className="w-2/3"/>
            </div>

            <div className="flex justify-evenly">
                <div className="font-[Italiana] text-black w-28 flex items-center justify-center">HOME</div>
                <div className="font-[Italiana] text-black w-28 flex items-center justify-center">PORTFOLIO</div>
                <div className="font-[Italiana] text-black w-28 flex items-center justify-center">ABOUT</div>
                <div className="font-[Italiana] text-black w-28 flex items-center justify-center">CONTACT</div>
                <div className="font-[Italiana] text-black w-28 flex items-center justify-center">GALLERIES</div>
            </div>
        </div>
    )
}

export default Navbar;