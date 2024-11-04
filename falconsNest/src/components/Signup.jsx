import { Link } from "react-router-dom";
import falcon from "../assets/falcon.webp"
import Footer from "./Footer"
import { useState } from "react";
import axios from "axios"
export default function Signup(){
    const initialForm = {
        fName:"",
        lName:"",
        name:"",
        email:"",
        username:"",
        password:"",
        age:""
    }
    const formChange = (e)=>{
         let {name, value} = e.target;
        setForm( (preForm)=>({...preForm, [name]:value}))
    }
    const handSubmit = async (e)=>{
        e.preventDefault()
       const result = await  axios.post("https://backendblogapi-b563b8bcb606.herokuapp.com/api/signup", form )
    }
    const [form, setForm] = useState(initialForm)
    // todo
    const [errors, setErrors] = useState({})
    return(
        <div>
            <header className="bg-zinc-700 p-3 shadow-lg">
   <button className="px-3 py-2 bg-zinc-900 text-slate-50 block ml-auto rounded-lg w-20 shadow-lg"><Link to="/">Home</Link></button> 
   </header>
        <main className="min-h-screen flex justify-center items-center flex-col bg-zinc-100 p-10" >
            <section className="flex justify-center items-center lg:w-4/5 max-w-[1100px] bg-white  rounded-lg border-2   h-min">
                <article style={{backgroundImage:`url(${falcon})`}}  className="min-w-[50%] lg:flex hidden self-stretch items-center lg:rounded-l-lg bg-cover bg-center" >
                    <h1 className=" text-5xl text-white  rounded-md h-min bg-black  w-full text-center -translate-y-full ">Digital Nest</h1>
                </article>
                <article className="lg:w-1/2 h-full ">
                     <form 
                        onSubmit={handSubmit}
                     className="font-semibold p-10 lg:p-0 *:py-2 lg:border-0 lg:rounded-l-none lg:h-full lg:m-10  ">
                        <h2 className="text-3xl text-bold">Create an account.</h2>
                        <div className="flex flex-col lg:flex-row lg:gap-3 ">
                             <div className="lg:w-1/2">
                                <label htmlFor="fName"  className="block ml-2">First Name</label>
                            <input className="border-2 p-2 rounded-md w-full " id="fName" name="fName" placeholder="John" required minLength={1} maxLength={25} value={form.firstName} onChange={formChange} />
                        </div>
                            <div className="lg:w-1/2">
                                <label className="block ml-2" htmlFor="lName">
                                    Last Name
                                </label>
                                <input className="border-2 p-2 rounded-md w-full" placeholder="Appleseed" id="lName" name="lName" required minLength={1} maxLength={25} value={form.lastName} onChange={formChange}/>
                            </div>
                        </div>
                        <div>
                            <label className="block ml-2" htmlFor="email">
                                Email
                            </label>
                            <input className="border-2 p-2 rounded-md w-full" type="email" name="email" id="email" required placeholder="enter an email" value={form.email} min={3} maxLength={60} onChange={formChange}/>
                        </div>
                        <div>
                            <label className="block ml-2" htmlFor="username">
                                Username
                            </label>
                            <input className="border-2 p-2 rounded-md w-full" placeholder="username" min={4} maxLength={20} id="username" name="username" required value={form.username} onChange={formChange}/>
                        </div>
                        <div>
                            <label className="block ml-2" htmlFor="password">
                                Password
                            </label>
                            <input type="password" className="border-2 p-2 rounded-md w-full" placeholder="password" min={5} maxLength={20} name="password" id="password" required minLength={5} value={form.password} onChange={formChange}/>
                        </div>
                        <div>
                            <label className="block ml-2" htmlFor="age">
                                Age
                            </label>
                            <input type="number" className="border-2 p-2 rounded-md w-full" placeholder="Age" id="age" name="age" required min="1" max={100} value={form.age} onChange={formChange} />
                        </div>
                        <div className="py-2">
                        <button type="submit" className="px-3 py-2 bg-zinc-900 text-slate-50 block w-full rounded-lg " onClick={handSubmit}>Create Account</button>
                        </div>
                        <p className="block text-center py-3 ">Already a user? <Link to={'/login'} className="text-blue-700">Sign In.</Link></p>
                        </form>
                </article>
            </section>
        </main>
                    <Footer/>
                    </div>
    )
}
