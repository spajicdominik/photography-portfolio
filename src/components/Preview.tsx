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
                <div key={index} className="mb-4 break-inside-avoid">
                    <img src={src} className="w-full object-cover rounded-lg" alt="" />
                </div>
            ))}
        </div>
        </div>
    )
}

export default Preview;