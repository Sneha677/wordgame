import Link from "next/link";

function GameIDCreation(){
    return(
        <>
        <div className="flex justify-center items-center h-screen">       
        <div class="h-100 bg-gradient-to-r from-indigo-500 to-indigo-200">
        <div class="text-black-400 text-2xl font-bold text-center" >  
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">    
        <slot>CREATE GAME CODE</slot>
        </div>
        </div>
        <div className="lg:grid justify-center mt-5 flex items-center space-y-4">
        <Link href="/EnterCode">
        <button className="bg-slate-900  text-white font-bold py-2 px-4 border border-black-700 rounded">
        GENERATE CODE
        </button>
        </Link>
        <br></br><br></br>
        </div>
        </div>   
        </div>
       
       
        </>
    )
}

export default  GameIDCreation


