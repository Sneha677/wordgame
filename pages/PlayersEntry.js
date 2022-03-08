import Link from "next/link";
import { useState } from "react";

function PlayersEntry(){
const [name, setName] = useState("");
const handleSubmit = (event) => {
  event.preventDefault();
  console.log(` ${name}`);
}

    return(
        <>
        <div class="h-screen bg-gradient-to-b from-red-200 to-red-400">
        <div className="flex justify-center items-center h-screen">
        <div class="text-black-400 text-2xl font-bold text-center" >
        <form onSubmit={handleSubmit}>
        <label>Enter The Game Code 
        <br></br> <input 
            type="text" 
            //value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label> <br></br><br></br>
        <Link href="/GameIntro">
        <input type="submit" value="SUBMIT" className="bg-slate-900  text-white font-bold py-2 px-4 border border-black-700 rounded" />
        </Link>
        </form>
        </div>  
        </div>
        </div>
        </>
    )
}

export default  PlayersEntry

