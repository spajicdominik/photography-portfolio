import { useState } from "react";
import { useEffect } from "react";
import Dropdown from "./Dropdown";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.div
        className="w-full h-24 md:h-36 border-b border-[#B2B2B2] flex justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="bg-[#232323] w-24 sm:w-32 md:w-48 h-full flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            src="src/assets/logo.png"
            alt=""
            className="w-2/3 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="max-md:hidden md:flex justify-evenly mr-5">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="font-[Italiana] text-black text-xl w-28 flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            HOME
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="font-[Italiana] text-black text-xl w-28 flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/galleries")}
          >
            GALLERIES
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="font-[Italiana] text-black text-xl w-28 flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/about")}
          >
            ABOUT
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="font-[Italiana] text-black text-xl w-28 flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            CONTACT
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="font-[Italiana] text-black text-xl w-28 flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/journal")}
          >
            JOURNAL
          </motion.div>
        </div>

        <motion.svg
          whileHover={{ scale: 1.2 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          className="md:hidden size-8 m-8 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </motion.svg>
      </motion.div>
      <AnimatePresence>{isOpen && <Dropdown />}</AnimatePresence>
    </>
  );
}

export default Navbar;
