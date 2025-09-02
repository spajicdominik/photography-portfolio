import { motion, AnimatePresence } from "framer-motion";

function Gallery() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center my-6 lg:my-20">
        <h1 className="text-xl lg:text-4xl font-[Italiana] text-black font-extrabold">PORTFOLIO GALLERIES</h1>
      </div>
      <div className="w-5/6 grid max-sm:grid-cols-1 md:grid-cols-2 mt-4">
        <div className="w-full relative">
          <img
            src="pic1.jpg"
            alt=""
            className="h-64 xl:h-84 2xl:h-100 w-full object-cover"
          />
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-28 h-1/4 flex items-center justify-center bg-[#dedfde]"
          >
            <p className="text-l font-[Italiana] text-black font-medium">
              ANIMALS
            </p>
          </motion.div>
        </div>
        <div className="w-full relative">
          <img
            src="pic3.jpg"
            alt=""
            className="h-64 xl:h-84 2xl:h-100 w-full object-cover"
          />
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-60 h-1/4 flex items-center justify-center bg-[#dedfde]"
          >
            <p className="text-l font-[Italiana] text-black font-medium">
              NATURE AND LANDSCAPE
            </p>
          </motion.div>
        </div>
        <div className="w-full relative">
          <img
            src="pic5.jpg"
            alt=""
            className="h-64 xl:h-84 2xl:h-100 w-full object-cover"
          />
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-32 h-1/4 flex items-center justify-center bg-[#dedfde]"
          >
            <p className="text-l font-[Italiana] text-black font-medium">
              CITYSCAPE
            </p>
          </motion.div>
        </div>

        <div className="w-full relative">
          <img
            src="pic2.jpg"
            alt=""
            className="h-64 xl:h-84 2xl:h-100 w-full object-cover"
          />
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-32 h-1/4 flex items-center justify-center bg-[#dedfde]"
          >
            <p className="text-l font-[Italiana] text-black font-medium">
              TRAVEL
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
