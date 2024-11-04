import Nav from "./Nav";
import Footer from "./Footer";
import {Link } from "react-router-dom"
export default function About(){
    return(
        <main>
            <header>
                <Nav/>
            </header>
    <div className=" text-2xl grid grid-cols-1 justify-center min-h-screen m-[10%]">
        <h1 className="text-center text-5xl">About Me</h1>
        <p className=" ">Hello! I'm a passionate <span className="highlight">JavaScript enthusiast</span> who loves coding, exploring the latest trends in web development, and sharing my journey through this blog.</p>
        <p>With JavaScript being such a versatile language, it powers everything from the simplest scripts to full-scale web applications. I created this blog to document my learning process, share tips, tutorials, and exciting projects in the world of <span className="font-semibold">JavaScript</span>.</p>
        <div >
            "JavaScript is the language of the web, and there's always something new to learn!"
        </div>
        <p>Whether you're a beginner or an experienced developer, I hope my posts inspire you to dive deeper into the JavaScript world. Let's code, create, and grow together!</p>
        <p>Feel free to reach out if you'd like to connect or collaborate. You can find me on <Link to={"https://github.com/GeoCort"} className="text-blue-600 hover:underline">GitHub</Link> or drop me an email at <a className="text-blue-600 hover:underline" href="mailto:cortes.george93@icloud.com">cortes.george93@icloud.com</a>.</p>
    </div>
    <Footer/>
        </main>
    )
}