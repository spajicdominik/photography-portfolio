function Galleries() {
    return(
        <div className="w-full flex items-center justify-center">
            <div className="flex flex-col w-5/6  justify-center mb-4">
                <div className="my-5 flex items-center justify-center">
                    <h1 className="text-xl font-[Italiana] text-black font-medium">IMAGE GALLERIES</h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="w-full relative mb-3">
                            <img src="pic1.jpg" alt="" className="h-64 w-full object-cover"/>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-28 h-1/4 flex items-center justify-center bg-[#dedfde]">
                                <p className="text-l font-[Italiana] text-black font-medium">ANIMALS</p>
                            </div>
                        </div>
                        <div className="w-full relative mb-3">
                            <img src="pic3.jpg" alt="" className="h-64 w-full object-cover"/>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-60 h-1/4 flex items-center justify-center bg-[#dedfde]">
                                <p className="text-l font-[Italiana] text-black font-medium">NATURE AND LANDSCAPE</p>
                            </div>
                        </div>
                        <div className="w-full relative mb-3">
                            <img src="pic5.jpg" alt="" className="h-64 w-full object-cover"/>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-32 h-1/4 flex items-center justify-center bg-[#dedfde]">
                                <p className="text-l font-[Italiana] text-black font-medium">CITYSCAPE</p>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Galleries;