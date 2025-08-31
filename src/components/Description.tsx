function Description(){
    return (
        <div className="w-full flex items-center justify-center">
            <div className="mt-8 flex w-5/6 border-b border-[#B2B2B2]">
               <div className="mr-5 flex flex-col max-md:items-center">
                    <h1 className="mb-5 text-lg lg:text-2xl xl:text-4xl font-[Italiana] text-black font-black">“Ovdje ce ici neki tvoj originalan citat o fotografiji, ili nesto sto ti osjecas, nesto inspirativno”</h1>
                    <p className="mb-5 text-md lg:text-xl xl:text-2xl font-[Italiana] text-black">Ovdje cemo isto staviti neki poduzi tekst gdje cemo napisati ukratko tko 
                        si ti, sta radis inace, odakle dolazis i tako dalje. U biti ovdje ce biti kao 
                        sazetak tvog zivotopisa koji ce imati svoju produzenu verziju na “about” 
                        stranici. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                    <button className="w-32 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">READ MORE</button>
               </div>
               <div className="max-md:hidden ml-10">
                    <img src="author.png" alt="" className="w-400"/>
               </div>
            </div>
        </div>
        
    )
}

export default Description;