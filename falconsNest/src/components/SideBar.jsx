import { useState } from "react"
import snackData from "/public/data.js"
function Snack({snack}){
    return(
        <article className="w-full py-3 px-2 ">
            <img src={snack.src} atl={snack.alt} className="w-full rounded-md"></img>
            <h4 className="font-semibold text-center text-red-700">{snack.title}</h4>
            <p className="text-md text-center border-b-2 mx-5 pb-2 border-zinc-500">{snack.content}</p>
        </article>
    )
}
export default function SideBar(){
    const [snacks, setSnacks] = useState(snackData)
return(
    <section className='hidden lg:flex bg-zinc-600/10 mx-2 lg:min-h-full lg:col-span-1 rounded-lg shadow-lg  '>
        <ul>
            {snacks.map( (s)=>{
                return(
                    <Snack snack={s} key={s.title}/>
                )
            })}
        </ul>
    </section>
)
}