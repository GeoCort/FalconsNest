import Nav from './Nav'
import BlogPost from './BlogPost'
import SideBar from './SideBar'
// import Authors from "./Authors"
import {useState, useEffect} from 'react'
import Footer from './Footer'
import axios from 'axios'
function Home(props){
        const [blogPost, setBlogPost] = useState([]);
        useEffect(()=>{
            const fetchBlogPosts =  async()=>{
                try{
                    const response = await axios.get("https://backendblogapi-b563b8bcb606.herokuapp.com/api/blog")
                    setBlogPost(response.data)
                }catch(e){
                    console.log("error", e)
                }
            }
            fetchBlogPosts()
    },[])
    return(
   <>
        <Nav/>
    <div className='grid grid-cols-1 lg:grid-cols-5  mx-[10%] my-[5%] xl:mx[15%] '>
    <section id="blog" className='  col-span-1 lg:col-span-4 flex flex-col gap-5'>
        <BlogPost blogs={blogPost}/>
    </section>
    <SideBar/>
    </div>
    <Footer/>
    </>
    )
}
export default Home;