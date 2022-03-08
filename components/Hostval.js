import { async } from "@firebase/util";
import { useState } from "react";
import database, {database as db} from "../firebase/firebase";
import { getDatabase, ref, set, update } from "firebase/database";
import player from '../pages/player';


export default function Hostval(){
  const [validate,setValidate]=useState(true)
  const [btnClick,setbtnClick]=useState(false)
  const [result,setResult]=useState('')

    const handleClick=(e)=>{
        e.preventDefault();
        setValidate(false);
        setbtnClick(true)
        Math.random().toString(36).substr(2, 5);
        let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let codeVal = ""
        let charactersLength = characters.length;
    
        for ( var i = 0; i < 5 ; i++ ) {
          codeVal += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        setResult(codeVal)
      
      }
      

      const Push=()=>{
        const db=database

        set(ref(db,`gamedata/${result}`),{
            gamecode:result,

        });//.catch(alert("Data stored successfully"));
      }
    



    return(
        <>
        <div className="flex justify-center p-20">
        { validate && <button className="text-black-100 bg-blue-400 p-2 rounded-md" onClick={handleClick}>Generate Game Code</button> 
        }
        {btnClick && <h1 className="text-xl text-center" >{result}</h1>}

        <button onClick={Push} className="shadow bg-slate-900 hover:bg-slate-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                            Share code
                        </button>  
        
        </div>
        <h1>Invite your friends to join the game by sharing the game code.</h1>
    

        
        </>
    )
      
  }