import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col fixed top-24 left-0 w-full z-[9999] bg-[#dedfde] border-b border-[#B2B2B2]"
    >
      <ul className="flex flex-col gap-4 text-center">
        <motion.li
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="font-[Italiana] text-black cursor-pointer border-b border-[#B2B2B2]"
        >
          HOME
        </motion.li>
        <motion.li
          onClick={() => navigate("/galleries")}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="font-[Italiana] text-black cursor-pointer border-b border-[#B2B2B2]"
        >
          GALLERIES
        </motion.li>
        <motion.li
          onClick={() => navigate("/about")}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="font-[Italiana] text-black cursor-pointer border-b border-[#B2B2B2]"
        >
          ABOUT
        </motion.li>
        <motion.li
          onClick={() => navigate("/contact")}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="font-[Italiana] text-black cursor-pointer border-b border-[#B2B2B2]"
        >
          CONTACT
        </motion.li>
        <motion.li
          onClick={() => navigate("/journal")}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="font-[Italiana] text-black cursor-pointer border-b border-[#B2B2B2]"
        >
          JOURNAL
        </motion.li>
      </ul>
    </motion.div>
  );
}
