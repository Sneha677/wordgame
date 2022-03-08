import Link from "next/link";

export default function PlayerLogic(){
    return(
        <>
        
        <div className="flex justify-center p-20">
            <Link href="/player">
         <button className='text-white-300 bg-slate-800 p-2 rounded-md' >Join Game</button> 
        
            </Link>
        </div>   
        </>
    )
}

