import Link from "next/link";


function PlayersWaitingRoom(){
    return(
        <>
        <div class="h-screen bg-gradient-to-b from-red-300 to-red-500">
        <div class="text-black-400 text-2xl font-bold text-center" >
        <h1 align="center">PLAYERS WAITING ROOM</h1><br></br><br></br>
        <h2 align="center">Waiting for all the players to join the game!!</h2></div>
        <Link href="/GameIntro">
        <div className="lg:grid justify-center mt-5 flex items-center space-y-4">
        <button className="bg-blue-500  text-white font-bold py-2 px-4 border border-blue-700 rounded">
         Game Starts in 30s
        </button>
        </div> 
        </Link></div>
        </>
    )
}

export default PlayersWaitingRoom

