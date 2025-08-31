import {motion} from "framer-motion"

export default function Dropdown() {
  return (
    <div className="flex flex-col absolute w-full">
      <ul className="flex flex-col gap-4 text-center border-b border-[#B2B2B2] bg-[#dedfde]">
        <motion.li whileHover={{scale: 1.2}} 
                    whileTap={{scale:0.9}} 
                    className="font-[Italiana] text-black border-b border-[#B2B2B2] cursor-pointer">HOME</motion.li>
        <motion.li whileHover={{scale: 1.2}} 
                    whileTap={{scale:0.9}} 
                    className="font-[Italiana] text-black border-b border-[#B2B2B2] cursor-pointer">PORTFOLIO</motion.li>
        <motion.li whileHover={{scale: 1.2}} 
                   whileTap={{scale:0.9}} 
                   className="font-[Italiana] text-black border-b border-[#B2B2B2] cursor-pointer">ABOUT</motion.li>
        <motion.li whileHover={{scale: 1.2}} 
                   whileTap={{scale:0.9}} 
                   className="font-[Italiana] text-black border-b border-[#B2B2B2] cursor-pointer">CONTACT</motion.li>
        <motion.li whileHover={{scale: 1.2}} 
                   whileTap={{scale:0.9}} 
                   className="font-[Italiana] text-black border-b border-[#B2B2B2] cursor-pointer">GALLERIES</motion.li>
      </ul>
    </div>
  )
}
