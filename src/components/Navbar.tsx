import { useState } from "react";
import Dropdown from "./Dropdown";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div className="w-full h-24 md:h-36 border-b border-[#B2B2B2] flex justify-between">
            <div className="bg-[#232323] w-24 sm:w-32 md:w-48 h-full flex items-center justify-center" >
                <img src="src/assets/logo.png" alt="" className="w-2/3"/>
            </div>

            <div className="max-md:hidden md:flex justify-evenly mr-5">
                <div className="font-[Italiana] text-black text-xl w-28 flex items-center justify-center cursor-pointer">HOME</div>
                <div className="font-[Italiana] text-black text-xl w-28 flex items-center justify-center cursor-pointer">PORTFOLIO</div>
                <div className="font-[Italiana] text-black text-xl w-28 flex items-center justify-center cursor-pointer">ABOUT</div>
                <div className="font-[Italiana] text-black text-xl w-28 flex items-center justify-center cursor-pointer">CONTACT</div>
                <div className="font-[Italiana] text-black text-xl w-28 flex items-center justify-center cursor-pointer">GALLERIES</div>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="md:hidden size-8 m-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
        </div>
        {isOpen && (
            <Dropdown></Dropdown>
        )}
    </>
    )
}


export default Navbar;