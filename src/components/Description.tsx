function Description(){
    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex items-center justify-between w-5/6">
                <div className="flex flex-col">
                    <div className="flex">
                        <h2 className="font-[Italiana] font-black text-black text-xl">“Ovdje ce ici neki tvoj originalan citat o fotografiji, ili nesto sto ti osjecas, nesto inspirativno”</h2>
                        <div className="w-100">
                            <img src="public/author.png" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <p className="font-[Italiana] text-black text-l text-base/8 w-1/2">
                    Ovdje cemo isto staviti neki poduzi tekst gdje cemo napisati 
                    ukratko tko si ti, sta radis inace, odakle dolazis i tako dalje. 
                    U biti ovdje ce biti kao sazetak tvog zivotopisa koji ce imati 
                    svoju produzenu verziju na “about” stranici. Lorem ipsum dolor 
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud.</p>
                    <button type="button" className=" w-70 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">LEARN MORE ABOUT ANDREA</button>
                </div>
            </div>
        </div>
        
    )
}

export default Description;