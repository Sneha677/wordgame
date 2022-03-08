import Link from "next/link";


function host(){
    return(

        <>
         <div class="h-screen bg-gradient-to-b from-indigo-200 to-indigo-500">
         <h1 align="center">HOST PAGE </h1>
         <div>
            <h2 align="center"> Hello Welcome to the game!!<br></br>
            Here are the host instructions to follow:<br></br>
            1.    <br></br>2.   <br></br>3.  <br></br>4.   <br></br>5.   <br></br>
            </h2></div>
            <div className=" lg:grid justify-center mt-5 flex items-center space-y-4">
            <Link href="/GameIDCreation">
            <button className="bg-slate-900  text-white font-bold py-2 px-4 border border-black-700 rounded">
            Next</button>
            </Link>
            </div>
            </div>
        </>

    )
}

export default host;

