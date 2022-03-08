import Link from "next/link";
import { useContext, useState } from "react";

import { getDatabase, ref, set,get,child, update } from "firebase/database";
import database, {database as db} from "../firebase/firebase";
import {v4} from "uuid";
import Hostval from "../components/Hostval";


function player(){
  
    const [name,setName] = useState();
    const [code,setCode] = useState();
    const [Joined,setJoined] = useState(false);

    const saveData = (event)=>{
        event.preventDefault();
        console.log(`${name} ${code}`);
        
    }

    const Push=()=>{
        const db=database
        const uniqueId=v4();
        const uid = uniqueId;
        const profile = 'profile';
        
        set(ref(db, `users/ ${uniqueId} /profile`),{
            username:name,
            gamecode:code,
        });//.catch(alert("Data stored successfully"));


        set(ref(db, `games/ ${code} /users joined/ ${uniqueId}`),{
            Joined:true,

        });
       
    }


    const getCode = () => {
        const db=database
        get(child(ref(db), `gamedata/`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const res = Object.keys(snapshot.val());
              console.log(res);

              if (res.includes(code)){
               alert("Valid code");

              }else{
                alert("Invalid code");
                  
              }
            
            } else {
              console.log("No data available");
            }
           

          })
          .catch((error) => {
            console.error(error);
          });
          
      };



   

    return(
        <>
           
           <div className=" bg-no-repeat bg-cover bg-[url('https://previews.123rf.com/images/milkos/milkos1708/milkos170803547/84902641-lettere-inglesi-di-legno-fondo-spazio-della-copia-studio-di-alfabeto-abc-concetto-di-educazione.jpg')]">
          
           <div className='flex justify-center items-center w-full h-screen'>
            <div className="w-2/6 h-4/8 rounded-lg shadow-2xl bg-gray-50 p-5 border-solid border-2 border-slate-900 space-x-4">
              
            <form onSubmit={saveData} className="w-full max-w-sm" >
            <div className="text-black-400 text-2xl font-bold text-center">
            <h1>Enter Player Details</h1></div>
                <div className="md:flex md:items-center mb-6 "><br></br>
                    
                <br></br><div className="md:w-1/3">
                        <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username">
                         User Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className="bg-black-200 appearance-none border-2 border-black-300 rounded w-full py-2 px-4 text-black-700 leading-tight focus:outline-black focus:bg-white focus:border-slate-800" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="gamecode">
                            Game Code
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input  type="text"  value={code}  onChange={(event)=>setCode(event.target.value)} className="bg-black-200 appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-800"/>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-2/3"></div>
                    <Link href="/GameIntro">
                    <div className="md:w-2/3">
                    
                        <button onClick={Push} className="shadow bg-slate-900 hover:bg-slate-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" id="sbmitbtn" type="submit">
                            SUBMIT
                        </button>  
                    </div>
                    </Link>
                    <button onClick={getCode} className="shadow bg-slate-900 hover:bg-slate-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" id="sbmitbtn" type="submit">
                            check
                        </button>  
                </div>
                <div className="flex justify-left">
                <Link href="/">
                <button className="bg-slate-900 text-white font-bold py-1 px-4 border border-black-700 rounded">BACK</button>
                </Link></div>
            </form>
            </div>
            </div>
            </div>
         
          
        </>

    )
}

export default player;
