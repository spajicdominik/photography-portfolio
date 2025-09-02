import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  return (
    <div>
      <motion.div
        className="w-full relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="bg-contact.jpg"
          alt=""
          className="h-100 md:h-130 lg:h-180 w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-28 h-1/4 flex items-center justify-center">
          <h1 className="text-6xl font-[Italiana] text-gray-200 font-extrabold">
            CONTACT
          </h1>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
