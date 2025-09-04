import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center mb-6">
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

      <div className="w-5/6 max-md:flex-col lg:flex items-center justify-center">
        <div className="lg:pb-100">
          <h1 className="text-4xl font-[Italiana] text-black font-extrabold mt-4 mb-10">
            Contact Me
          </h1>
          <p className="text-xl font-[Italiana] text-black font-medium mb-6">
            For general inquiries or technical information, email:{" "}
            <a className="text-blue-600" href="">
              petrisevacandrea0@gmail.com{" "}
            </a>
          </p>
          <h2 className="text-2xl font-[Italiana] text-black font-extrabold mb-10">
            Connect with me on Social
          </h2>
          <div className="flex">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/andreapetrisevac/"
              className="text-black hover:text-black mr-5"
            >
              <FaInstagram size={44} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.facebook.com/andrea.petrisevac.5"
              className="text-black hover:text-black mr-5"
            >
              <FaFacebook size={44} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://whatsapp.com"
              className="text-black hover:text-black"
            >
              <FaWhatsapp size={44} />
            </motion.a>
          </div>
        </div>

        <form className="flex flex-col mt-10 md:w-2/3">
            <p className="text-xl font-[Italiana] text-black font-medium mb-2">Your name (required)</p>
            <input type="text "  className="bg-white text-black w-5/6 h-14 border p-3"/>

            <p className="text-xl font-[Italiana] text-black font-medium mb-2 mt-4">Your Email (required)</p>
            <input type="text "  className="bg-white text-black w-5/6 h-14 border p-3"/>

            <p className="text-xl font-[Italiana] text-black font-medium mb-2 mt-4">Subject</p>
            <input type="text "  className="bg-white text-black w-5/6 h-14 border p-3"/>

            <p className="text-xl font-[Italiana] text-black font-medium mb-2 mt-4">Your message</p>
            <textarea className="bg-white text-black w-5/6 h-72 border align-text-top p-3"/>

            <button className="w-32 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5">Submit</button>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default Contact;
