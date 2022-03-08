import Head from 'next/head'
import Link from 'next/link'
import Hostval from '../components/Hostval'
import { useState } from 'react'
import PlayerLogic from '../components/PlayerLogic';




export default function Home() {

  
  const [showChildComp, setShowChildComp] = useState(false);
  const [child1,setChild1] = useState(true);

const renderclick = (event)=>{
  event.preventDefault()
  setChild1(prevState =>! prevState)
  setShowChildComp(false)
}

  const handleClick = (e) => {
    e.preventDefault()
    // setShowChildComp(prevState => !prevState)
    setChild1(false)
    setShowChildComp(prevState => !prevState)

  }


  return (
    <>
    
      <div class="bg-no-repeat bg-cover bg-[url('https://ak.picdn.net/shutterstock/videos/20587486/thumb/1.jpg')]"><div>
      <div class= " bg-black text-white  px-5 py-3 text-gray-50 text-4xl font-bold text-center">
    <h1>WELCOME TO WORD GAME</h1></div>
      <div className='flex justify-center items-center h-screen'>
        <div className="w-3/4 rounded-lg shadow-xl bg-gray-50 p-5">
          <header>
          <div className='grid grid-cols-2 grid-rows-1 py-5 space-x-4 '>
          <div class="flex flex-wrap justify-center">
          <div class="w-6/12 sm:w-5/12 px-4 space-y-4 space-x-14 ">
          <img src="https://www.pngitem.com/pimgs/m/324-3248659_transparent-to-show-clipart-cartoon-game-show-host.png" alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-solid border-2 border-slate-900" />
          
          <button className='bg-black text-white  px-5 py-3 hover:bg-slate-800 hover:text-white rounded-full ' onClick={handleClick}>Host</button>
          </div>
          </div>

          <div class="flex flex-wrap justify-center">
          <div class="w-6/12 sm:w-6/12 px-6 space-y-10 space-x-14">
          <img src="https://www.freevector.com/uploads/vector/preview/28523/Group-of-People.jpg" alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-solid border-2 border-slate-900" />
          <Link href="/player">
          <button className='bg-black text-white  px-5 py-3 hover:bg-slate-800  hover:text-white rounded-full'  >Player</button>
          </Link>
          </div>
          </div>              
          </div>

          {showChildComp && <Hostval/>}
          </header> 
          
          <footer class="text-black-400 text-2xl font-bold text-center">
          </footer>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}
