import Link from "next/link";

 function Score() {
    return (
        <>
        <div class="text-black-400 text-2xl font-bold text-center">
      <h1> SCORE BOARD</h1></div><br></br>
<div class="flex justify-center ...">

<table class="border-separate border border-slate-400 r">
  <thead>
    <tr>
      <th>Username</th>
      <th>userID</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-8 py-4 border-slate-600">Tom</td>
      <td class="border px-8 py-4 border-slate-600" >t1</td>
      <td class="border px-8 py-4 border-slate-600">1</td>
    </tr>
    <tr>
      <td class="border px-8 py-4 border-slate-600">Star</td>
      <td class="border px-8 py-4 border-slate-600">star1</td>
      <td class="border px-8 py-4 border-slate-600">2</td>
    </tr>
    <tr>
      <td class="border px-8 py-4 border-slate-600">ABC</td>
      <td class="border px-8 py-4 border-slate-600">abc1</td>
      <td class="border px-8 py-4 border-slate-600">2</td>
    </tr>
    <tr>
      <td class="border px-8 py-4 border-slate-600">XYZ</td>
      <td class="border px-8 py-4 border-slate-600">xyz1</td>
      <td class="border px-8 py-4 border-slate-600">1</td>
    </tr>
    <tr>
      <td class="border px-6 py-2 border-slate-600">PQR</td>
      <td class="border px-6 py-2 border-slate-600">pqr1</td>
      <td class="border px-6 py-2 border-slate-600">1</td>
    </tr>
  </tbody>
</table>
</div><br></br>
<div className="flex justify-center">
<Link href="/GameIntro">
        <button className="bg-slate-900 text-white font-bold py-2 px-4 border border-black-700 rounded">BACK</button>
        </Link></div>
        </>   
    )
}

export default Score