import { useState, useContext, useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import falcon from "../assets/falcon.webp"
import Footer from "./Footer"
import axios from 'axios'

export default function Login(){
    const [form, setForm] = useState({
        username:"",
        password:""
    })
    const [token,setToken]= useState(localStorage.getItem("token"))
    const [username, setUsername] = useState(localStorage.getItem("username"))
    const [user,setUser] = useState(localStorage.getItem("user"))
    const [loaded, setLoaded] = useState(false)
    useEffect( ()=>{
        if(loaded){
            console.log(token,user,username)
            window.localStorage.setItem("user", user)
        window.localStorage.setItem("username",username)
        window.localStorage.setItem("token", token)
        }else{
            console.log("empty")
        }
    },[loaded])
    const formChange = (e)=>{
       let {name, value} = e.target
       setForm( (preForm)=> ({...preForm,[name]:value}))

    }
    const handSubmit = async (e)=>{
        
        e.preventDefault()
       let response =  await axios.post(`https://backendblogapi-b563b8bcb606.herokuapp.com/api/login`, form)
       console.log(response.data)
       setUser(response.data.user.id)
       setUsername(response.data.user.username)
       setToken(response.data.token)
        setLoaded(true)
    //  redirect to new page and now have access to user and token. 
    }
    if(loaded){
        return(
            <Navigate to="/"/>
        )
    }
        return(
   <>
   <header className="bg-zinc-700 p-3 shadow-lg">
   <button className="px-3 py-2 bg-zinc-900 text-slate-50 block ml-auto rounded-lg w-20 shadow-lg"><Link to="/">Home</Link></button> 
   </header>
   <main className=" flex justify-center items-center p-28 bg-zinc-100 border-2 shadow-lg ">
        <article className="w-1/2  max-h-[600px] self-stretch bg-white rounded-l-lg hidden lg:block ">
            <img className="w-full h-full object-cover rounded-lg shadow-lg" src={falcon}></img>
        </article>
        <article className="lg:w-1/2 max-h-[600px] bg-white lg:rounded-r-lg lg:rounded-l-none rounded-lg shadow-md ">
        <form 
        onSubmit={handSubmit}
        className="font-semibold p-10 lg:p-0 *:py-2 lg:border-0 lg:rounded-l-none lg:m-10 min-h-screen ">
    <h2 className="text-3xl text-bold">Sign into your account</h2>
    <div>
        <label className="block ml-2" htmlFor="username">
            Username
        </label>
        <input className="border-2 p-2 rounded-md w-full" placeholder="username" min={1} maxLength={20} id="username" name="username" required value={form.username} onChange={formChange}/>
    </div>
    <div>
        <label className="block ml-2" htmlFor="password">
            Password
        </label>
        <input type="password" className="border-2 p-2 rounded-md w-full" placeholder="password" maxLength={20} name="password" id="password" required minLength={2} value={form.password} onChange={formChange}/>
    </div>
    <div className="py-2">
    <button type="submit" className="px-3 py-2 bg-zinc-900 text-slate-50 block w-full rounded-lg " onClick={handSubmit}>Login</button>
    </div>
    <p className="block text-center py-3 ">Not a user? <Link to={'/signup'} className="text-blue-700">Sign Up!</Link></p>
    </form>
        </article>
   </main>
       <Footer/>
       </>
)
}

{/* <form 
onSubmit={handSubmit}
className="font-semibold p-10 lg:p-0 *:py-2 lg:border-0 lg:rounded-l-none lg:h-full lg:m-10 min-h-screen ">
<h2 className="text-3xl text-bold">Sign into your account</h2>
<div>
<label className="block ml-2" htmlFor="username">
    Username
</label>
<input className="border-2 p-2 rounded-md w-full" placeholder="username" min={1} maxLength={20} id="username" name="username" required value={form.username} onChange={formChange}/>
</div>
<div>
<label className="block ml-2" htmlFor="password">
    Password
</label>
<input type="password" className="border-2 p-2 rounded-md w-full" placeholder="password" maxLength={20} name="password" id="password" required minLength={2} value={form.password} onChange={formChange}/>
</div>
<div className="py-2">
<button type="submit" className="px-3 py-2 bg-zinc-900 text-slate-50 block w-full rounded-lg " onClick={handSubmit}>Login</button>
</div>
<p className="block text-center py-3 ">Already a user? <Link to={'/signup'} className="text-blue-700">Sign In.</Link></p>
</form> */}