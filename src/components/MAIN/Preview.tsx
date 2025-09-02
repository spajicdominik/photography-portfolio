import {motion, AnimatePresence} from "framer-motion"

const images = [
    'pic7.jpg',
    'pic8.jpg',
    'pic9.jpg',
    'pic10.jpg',
    'pic11.jpg',
    'pic12.jpg',
    'pic13.JPG'
]

function Preview() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-5/6 max-md:columns-2 md:columns-3 py-10 md:py-20 gap-8 border-b border-[#B2B2B2]">
            {images.map((src, index) => (
                <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.5,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                        }}
 
                    key={index} className="mb-4 break-inside-avoid">
                    <motion.img
                        whileHover={{scale:1.02}} 
                        src={src} className="w-full object-cover rounded-lg" alt="" />
                </motion.div>
                </AnimatePresence>
            ))}
        </div>
        </div>
    )
}

export default Preview;