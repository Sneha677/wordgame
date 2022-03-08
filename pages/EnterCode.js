import Link from "next/link";
import { useState } from "react";


function EnterCode(){

    const [name, setName] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(` ${name}`);
    }
  
    return (
      
      <div className="flex justify-center items-center h-screen">
        <div class="box-content-auto border-4 border-slate-900 border-double ">
        <div class="h-100 bg-gradient-to-r from-indigo-500 to-indigo-200">
      <form onSubmit={handleSubmit}>  
        <label>Generated Game Code 
        <br></br> <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />   
        </label> <br></br><br></br>  
        <div className="lg:grid justify-center mt-5 flex items-center space-y-4">
        <button className="bg-slate-900  text-white font-bold py-2 px-4 border border-black-700 rounded">
        COPY  
        </button>
        </div>
        <br></br><br></br>
        <Link href="/HostHandling">
        <div className="lg:grid justify-center mt-5 flex items-center space-y-4">
        <button className="bg-slate-900  text-white font-bold py-2 px-4 border border-black-700 rounded">
        NEXT  
       </button>
       </div>
       </Link>
       </form>
       </div>  
       </div>
       </div>
    )  
  }
 
export default EnterCode;

