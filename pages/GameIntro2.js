import Link from "next/link";
import { useContext, useState } from "react";
import { getDatabase, ref, set, update } from "firebase/database";
import database, {database as db} from "../firebase/firebase";
import {v4} from "uuid";
import Hostval from "../components/Hostval";

function GamePage2(){
    return(
        <>
        <div class="h-screen bg-gradient-to-b from-indigo-200 to-indigo-500">
        <div>
        <div class="text-black-400 text-2xl font-bold text-center">  
        <h1 align="center">GAME PAGE</h1><br></br>
        </div>
        <div class="text-black-400 text-2xl font-bold text-center" >  
        <h2 align="center"> Round Number: </h2><br></br>
        
        <h1 align="center"> Enter Describing Word </h1>
        <input 
            type="text" 
            onChange={(e) => setName(e.target.value)}
          />   <br></br><br></br>
          
          <button onclick="myFunction()" className= "bg-slate-900  text-white font-bold py-2 px-4 border border-black-700 rounded hover:bg-slate-600  hover:text-white rounded-full" id="sbmitbtn" type="submit">SUBMIT </button>
        </div>
        <div className="flex justify-center items-center h-screen space-x-4 ">
        <Link href="/leaderboard">
        <button className="bg-slate-900 text-white font-bold py-2 px-4 border border-black-700 rounded">SCORE</button>
        </Link>
        <Link href="/player">
        <button className="bg-slate-900  text-white font-bold py-2 px-4 border border-black-700 rounded">BACK</button>
        </Link>
        </div>
        </div>
        </div>
        
        </>
    )
}

export default GamePage2