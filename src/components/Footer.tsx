import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import {motion, AnimatePresence} from "framer-motion"


function Footer() {
  return (
    <div className="w-full bg-black flex flex-col items-center pt-8 mt-4">
      <div className="flex justify-between w-48 mt-4">
        <motion.a
          whileHover={{scale: 1.2}}
          whileTap={{scale:0.9}}
          href="https://instagram.com"
          className="text-white hover:text-white"
        >
          <FaInstagram size={32}/>
        </motion.a>

        <motion.a
          whileHover={{scale: 1.2}}
          whileTap={{scale:0.9}}
          href="https://facebook.com"
          className="text-white hover:text-white"
        >
          <FaFacebook size={32}/>
        </motion.a>

        <motion.a
          whileHover={{scale: 1.2}}
          whileTap={{scale:0.9}}
          href="https://whatsapp.com"
          className="text-white hover:text-white"
        >
          <FaWhatsapp size={32}/>
        </motion.a>
      </div>

      <div className="flex justify-between mt-6">
        <div className="mr-3 flex items-center justify-center cursor-pointer">
            <p className="text-xs ">HOME</p>
        </div>
        <div className="mr-3 flex items-center justify-center cursor-pointer">
            <p className="text-xs">PORTFOLIO</p>
        </div>
        <div className="mr-3 flex items-center justify-center cursor-pointer">
            <p className="text-xs">ABOUT</p>
        </div>
        <div className="mr-3 flex items-center justify-center cursor-pointer">
            <p className="text-xs">CONTACT</p>
        </div>
        <div className="mr-3 flex items-center justify-center cursor-pointer">
            <p className="text-xs">GALLERIES</p>
        </div>
      </div>

      <div className="flex justify-between mt-6 mb-8">
        <p className="text-xs">Copyright ©2025; Designed by Dominik Spajić</p>
      </div>
    </div>
  );
}

export default Footer;
