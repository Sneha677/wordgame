import Link from "next/link";


function HostHandling(){
    return(
        <>

<div class="flex justify-center">
  <div class="  mb-3 xl:w-96">
    <select class="form-select appearance-none
      block
      w-full
      px-4
      py-2
      text-white font-bold
      text-center
      bg-slate-800 bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=" select OPTIONS">
        <option selected>ROUND-1</option>
        <option value="2">ROUND-2</option>
        <option value="3">ROUND-3</option>
        <option value="4">ROUND-4</option>
        <option value="5">ROUND-5</option>
    </select>
  </div>
</div>

      <div class="text-black-400 text-2xl font-bold text-center">
      <h1> COUNT OF WORDS</h1></div>
      <div class="flex justify-center">      
<table class=" border-separate border border-slate-400 r ">
    
  <thead>
    <tr>
      <th class="border border-slate-600">1</th>
      <th class="border border-slate-600">2</th>
      <th class="border border-slate-600">3</th>
      <th class="border border-slate-600">4</th>
      <th class="border border-slate-600">5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-8 py-4 border-slate-600">  </td>
      <td class="border px-8 py-4 border-slate-600" > </td>
      <td class="border px-8 py-4 border-slate-600">   </td>
      <td class="border px-8 py-4 border-slate-600">   </td>
      <td class="border px-8 py-4 border-slate-600">mango</td>
    </tr>
    <tr>
      <td class="border px-8 py-4 border-slate-600">  </td>
      <td class="border px-8 py-4 border-slate-600"></td>
      <td class="border px-8 py-4 border-slate-600">apple  </td>
      <td class="border px-8 py-4 border-slate-600">  </td>
      <td class="border px-8 py-4 border-slate-600">  </td>
    </tr>
    <tr>
      <td class="border px-8 py-4 border-slate-600">grapes</td>
      <td class="border px-8 py-4 border-slate-600">  </td>
      <td class="border px-8 py-4 border-slate-600">   </td>
      <td class="border px-8 py-4 border-slate-600">   </td>
      <td class="border px-8 py-4 border-slate-600">   </td>
    </tr>
    <tr>
      <td class="border px-8 py-4 border-slate-600">   </td>
      <td class="border px-8 py-4 border-slate-600">guava</td>
      <td class="border px-8 py-4 border-slate-600">   </td>
      <td class="border px-8 py-4 border-slate-600">   </td>
      <td class="border px-8 py-4 border-slate-600">   </td>
    </tr>
    <tr>
      <td class="border px-8 py-4 border-slate-600">   </td>
      <td class="border px-8 py-4 border-slate-600" >  </td>
      <td class="border px-8 py-4 border-slate-600">   </td>
      <td class="border px-8 py-4 border-slate-600">kiwi</td>
      <td class="border px-8 py-4 border-slate-600">   </td>
    </tr>
  </tbody>
</table>
</div>
<div class="text-black-400 text-2xl font-bold text-center">
      <button className="bg-slate-800  text-white font-bold py-2 px-4 border border-black-700 rounded">START TIMER</button><br></br><br></br>
      </div>
      <div class="flex space-x-2 justify-center">
      <Link href="/leaderboard">
      <button type="button" class="inline-block px-6 py-2.5 bg-transparent text-black-800 font-medium text-xl leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">LEADERBOARD</button>
      </Link></div>
        </>
    )
}
export default HostHandling
