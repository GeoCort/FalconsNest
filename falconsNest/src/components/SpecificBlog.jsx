import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import def from "../assets/default.jpg"
import profile from "../assets/cybernetic.webp"
import { FaEye } from "react-icons/fa";

function Comment(props){
    return(
        <article className="grid p-5 grid-cols-[50px_1fr] gap-3 border-b-2 border-zinc-400  m-5  first-of-type:rounded-t-md">
            <div  className="col-span-1">
                <img src={profile} className="rounded-lg"/>
            </div>
            <div className="flex flex-col">
            <h2 className="font-semibold text-lg">{props.author?.username}</h2>
            <p className="text-md">{props.content}</p>
            </div>
        </article>)
    
}
export default function SpecificBlog(props){
    const [blog,setBlog] = useState({})
    const [searchParams] = useSearchParams()
    const [user,setUser] = useState(localStorage.getItem("user"))
    const [token,setToken] = useState("")
    const [reload, setReload] = useState(false)
    var id = searchParams.get("id")
    useEffect( ()=>{

    })
    let baseComment = {
        content:"",
        authorId:window.localStorage.getItem("user"),
        postId:id
    }
    const [form, setForm] = useState(baseComment)
    const change = (e)=>{
        let {name, value} = e.target
        setForm( (preForm)=> ({...preForm,[name]:value }))
    }
    const submitComment = async (e)=>{
        e.preventDefault();
        let response =  await axios.post(`https://backendblogapi-b563b8bcb606.herokuapp.com/api/blog/${id}/comment`, {...form, postId:id}, {
            headers:{
                "authorization": token
            }
        })
        console.log(response.data);
        if(response.data.success = "true"){
            setReload(true)
        }
        
    }
    useEffect( ()=>{
        setUser(window.localStorage.getItem("user"))
        setToken("Bearer "+ window.localStorage.getItem("token"))
        
    },[])
    useEffect( ()=>{
        const loadBlog = async ()=>{
            const response = await axios.get(`https://backendblogapi-b563b8bcb606.herokuapp.com/api/blog/${id}`)
            setBlog(response.data.blog)      
        }
        loadBlog()
    },[reload])
return(
    <>
    <header>
        <Nav/>
    </header>
    <section className="m-[10%] mt-10 xl:mx-[20%] min-h-screen">
        <article className="flex flex-col justify-center gap-3">
            <h1 className="text-5xl font-serif xl:text-6xl">{blog.title}</h1>
            <h2 className="italix text-lg font-semibold text-zinc-600">{blog.createdAt}</h2>
            <div className="py-5">
                <img src={blog.headline} className="max-h-[500px] xl:max-h-[700px] xl:max-w-[700px] w-full rounded-lg xl:m-auto" alt={blog.headlineAlt}></img>
            </div>
            <div className="flex justify-between">
                <span className="italix text-lg font-semibold text-zinc-800" >By {blog.author?.name} </span>
                <span className='flex gap-5 items-center text-2xl'><FaEye/>{blog.viewCount}</span>
            </div>
            <p className="text-xl space-y-8 ">
                {blog.content}
            </p>
        </article>
        {/* Comments */}
        <h2 className="text-3xl font-semibold  py-5 underline underline-offset-4"> Let us know your insights</h2>
        {/* Add a Comment Route  */}
        <form className="w-full p-10" onSubmit={submitComment}>
            <textarea name="content" className="border-2 border-zinc-400 w-full min-h-28 rounded-lg  p-2 disabled:bg-zinc-400" onChange={change} placeholder={user == null? "Please Login to Comment": ""} disabled={user == ""? true: false} >
            </textarea>
            <button className="bg-zinc-800 block ml-auto px-3 py-2 rounded-lg text-white disabled:bg-zinc-400" disabled={user == null? true:false}>Submit</button>
        </form>
        <section className="min-h-96 border-2 border-zinc-400 rounded-md p-5">
        {blog.Comment?.map(c =>{
            return(
            <Comment key={c.id} content={c.content} author={c.author} timestamp={c.createdAt} />
             )
})}
        </section>
    </section>
    <Footer/>
</>
)

}