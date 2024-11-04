import { useEffect, useState } from "react"
import def from "../assets/cybernetic.webp"
import { Link, Navigate } from "react-router-dom"
import falcon from "../assets/falcon.webp"
import axios from "axios"
export default function ProfileBar(props){
    const [user,setUser] = useState(localStorage.getItem("user"))
    const [token, setToken] = useState(localStorage.getItem("token"))
    const logout = ()=>{
        console.log("this is being called")
        // remove all elements in local storage
        window.localStorage.clear()
        window.location.reload();
    }
    return(
             <div className="bg-zinc-700 p-5 py-1 flex justify-between items-center gap-3 text-slate-50">
             <div className="w-12 h-12 "> <img src={falcon} className="w-full rounded-md"/></div>
             <h1 className="text-center py-5 text-5xl hidden md:block ">The Digital Nest</h1>

        {user == null?
         <button className="px-3 py-2 bg-zinc-900 text-slate-50 block ml-auto rounded-lg w-20 shadow-lg"><Link to="/login">Login</Link></button> 
        :<div className="flex justify-end ">
           <div className="flex gap-5">
           <button className="px-3 py-2 bg-red-600 hover:bg-red-800 text-slate-50 block ml-auto rounded-lg w-20" onClick={logout}>Logout</button>
           <img src={def} className="w-12 h-12 rounded-full ml-auto"/> 
           </div>
        </div>
            }
      </div>
    )
}