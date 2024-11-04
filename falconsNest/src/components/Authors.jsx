import axios from "axios";
import logo from "../../public/logo.png"
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import cali from "../assets/staff/Cali.png"
import boopi from "../assets/staff/boopi.jpg"
import pan from "../assets/staff/pan.jpeg"
export default function Authors(){
    const [authors,setAuthors] = useState([])

    return(
        <>
        <Nav/>
        <h1 className="text-5xl text-center py-5 font-semibold ">Meet the Staff</h1>
        <section className="mx-[10%] py-10 min-h-screen mt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-5 bg-zinc-100 rounded-lg p-10 mb-10 *:shadow-lg">
        <article className="flex flex-col border-b-2 gap-2 items-center py-10 even:bg-slate-100 w-full max-w-96 mx-10 max-h-96 col-span-1 bg-slate-50 border-2 rounded-lg" >
             <div className="w-20">
                <img className="rounded-full object-center" src={logo}></img>
                </div>
             <div className="flex flex-col gap-1 p-5">
                 <h3 className="text-xl font-bold text-center italic">George Cortes</h3>
                 <h4 className="text-center italic text-lg font-semibold">Editor-in-Chief</h4>
                 <p>With a passion for storytelling and a keen eye for detail, George leads our newsroom with creativity and integrity, ensuring every issue captivates our readers.</p>
             </div>
         </article>
         <article className="flex flex-col border-b-2 gap-5 items-center py-10 even:bg-slate-100 w-full max-w-96 col-span-1 bg-slate-50 border-2 rounded-lg max-h-96 " >
             <div className="w-20"><img className="rounded-full object-cover w-20 h-20  " src={pan}></img></div>
         <div className="flex flex-col gap-2 p-5">
            <h3 className="text-xl font-bold text-center italic">Pan Cortes</h3>
            <h4 className="text-center italic text-lg font-semibold">Chief Sniff Officer</h4>
             <p>With an unparalleled nose for news, Pan digs deep to uncover the stories that matter, all while wagging her tail and spreading joy around the office!</p>
         </div>
         </article>
         <article className="flex flex-col border-b-2 gap-5 items-center py-10 even:bg-slate-100 max-w-96 w-full col-span-1 bg-slate-50 border-2 rounded-lg max-h-96 " >
             <div className="rounded-full overflow-hidden "><img className="w-20 h-20 object-cover " src={cali}></img></div>
         <div className="flex flex-col gap-2 p-5">
         <h3 className="text-xl font-bold text-center italic">Cali Cortes</h3>
         <h4 className="text-center italic text-lg font-semibold">Bark-eting Strategist</h4>
            <p>
            Always on the tail of the latest trends, Rufus fetches innovative ideas and keeps our content engaging and fun!
            </p>
         </div>
         </article>
         <article className="flex flex-col border-b-2 gap-5 items-center py-10 even:bg-slate-100 max-w-96 w-full col-span-1 bg-slate-50 border-2 rounded-lg max-h-96 " >
             <div className="w-20 h-20 overflow-hidden rounded-full"><img className="rounded-full object-center w-full " src={boopi}></img></div>
         <div className="flex flex-col gap-2 p-5">
         <h3 className="text-xl font-bold text-center italic">Boopi Nguyen</h3>
         <h4 className="text-center italic text-lg font-semibold">Paw-licy Advisor</h4>
            <p>
            Always on the tail of the latest trends, Rufus fetches innovative ideas and keeps our content engaging and fun!
            </p>
         </div>
         </article>
        </section>
        <Footer/>
        </>
    )
}

// {authors?.map(a=>{
//     return(
//         <article className="flex flex-row border-b-2 gap-5 items-center py-10 even:bg-slate-200" key={a.id}>
//             <div className="w-20"><img className="rounded-full object-center " src={logo}></img></div>
//         <div className="flex flex-col gap-2">
//         <h3 className="text-2xl font-bold">{a.name}'s most recent work</h3>
//             <ul className="">
//                 {a.posts.map((works)=>{
//                     return(
//                         <li className="font-semibold italic text-lg text-blue-600 " key={works.id} >{works.title}</li>
//                     )
//                 })}
//             </ul>
//         </div>
//         </article>
//     )
//    })}

// {a.posts.map((works)=>{
//     return(
//         <li className="font-semibold italic text-lg text-blue-600 " key={works.id} >{works.title}</li>
//     )
// // })}