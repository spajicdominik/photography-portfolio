import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-black flex flex-col items-center pt-8 mt-4">
      <div className="flex justify-between w-48 mt-4">
        <motion.a
          whileHover={{scale: 1.2}}
          whileTap={{scale:0.9}}
          href="https://www.instagram.com/andreapetrisevac/"
          className="text-white hover:text-white"
        >
          <FaInstagram size={32}/>
        </motion.a>

        <motion.a
          whileHover={{scale: 1.2}}
          whileTap={{scale:0.9}}
          href="https://www.facebook.com/andrea.petrisevac.5"
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
            <p className="text-xs " onClick={() => navigate("/")}>HOME</p>
        </div>
        <div className="mr-3 flex items-center justify-center cursor-pointer">
            <p className="text-xs" onClick={() => navigate("/galleries")}>GALLERIES</p>
        </div>
        <div className="mr-3 flex items-center justify-center cursor-pointer">
            <p className="text-xs" onClick={() => navigate("/about")}>ABOUT</p>
        </div>
        <div className="mr-3 flex items-center justify-center cursor-pointer">
            <p className="text-xs" onClick={() => navigate("/contact")}>CONTACT</p>
        </div>
        <div className="mr-3 flex items-center justify-center cursor-pointer">
            <p className="text-xs" onClick={() => navigate("/journal")}>JOURNAL</p>
        </div>
      </div>

      <div className="flex justify-between mt-6 mb-8">
        <p className="text-xs">Copyright ©2025; Designed by Dominik Spajić</p>
      </div>
    </div>
  );
}

export default Footer;
