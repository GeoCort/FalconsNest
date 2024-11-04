import axios from 'axios';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import def from "../assets/default.jpg"
import { FaEye, FaExternalLinkAlt } from "react-icons/fa";
function BlogPost(props){
    let italicStyle = "italic text-zinc-600 text-xl "
    const [snippet, setSnippet ]= useState("")
    
    return(
           <>
           {props.blogs?.map((b)=>{
            return(
                <article key={b.id} className='p-12 gap-3 flex flex-col justify-center font-sans border-b-2  border-black last-of-type:border-b-0 bg-zinc-100 rounded-lg' >
                    <Link to={`/blog/?id=${b.id}`}><h2 className='text-4xl md:text-5xl font-bold'>{b.title}</h2></Link>
                    <h3 className={italicStyle}>Updated on {b.updatedAt}</h3>
                    <img src={b.headline != ""? b.headline : def} alt="image" className='w-full lg:w-10/12 m-auto rounded-lg my-5' ></img>           
                     <p className='text-2xl lg:text-4xl font-normal font-serif line-clamp-3'>{b.content}</p>
                     <span className='flex gap-5 items-center text-2xl'><FaEye/>{b.viewCount}</span>
                     <div className="flex justify-between">
                        <span className={italicStyle}>By {b.author.name}</span>
                        <Link to={`/blog/?id=${b.id}`} ><span className='text-xl text-blue-600 hover:text-purple-600'>Read the Article</span></Link>
                     </div>
                </article>
            )   
           })}
           </>
    )
}
export default BlogPost 