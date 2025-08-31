import {motion, AnimatePresence} from "framer-motion"

const images = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg',
    'pic6.jpg'
]

function Preview() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-5/6 max-md:columns-2 md:columns-3 py-10 md:py-20 gap-8 border-b border-[#B2B2B2]">
            {images.map((src, index) => (
                <AnimatePresence>
                <motion.div
                    initial={{opacity: 0, y:-30}}
                    animate={{opacity: 1, y:0}}
                    transition={{ duration: 2 }} 
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