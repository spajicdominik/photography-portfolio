
function About(){
    return(
        <div>
            <div className="w-full relative">
                <img src="bg-about.jpg" alt="" className="h-100 md:h-130 lg:h-180 w-full object-cover"/>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-28 h-1/4 flex items-center justify-center">
                    <h1 className="text-6xl font-[Italiana] text-gray-200 font-extrabold">ABOUT</h1>
                </div>
            </div>
        </div>
    )
}

export default About;