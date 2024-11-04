import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../public/logo.png"
import { Link } from "react-router-dom";
import ProfileBar from "./ProfileBar";
function Nav(props){
    return(
        <header>
        <ProfileBar/>
        <nav className=" p-10 md:p-0 border-b-2 flex items-center mx-[10%] justify-around">
        <ul className="hidden md:flex md:flex-row md:gap-5 justify-center w-full py-5 ">
          <li ><Link to={'/'} ><span className="w-36 p-5 px-10 text-2xl font-semibold  text-center hover:bg-slate-200 ">Home</span></Link></li>
          <li > <Link to={'/authors'}><span className="w-36 p-5 px-10 text-2xl font-semibold  text-center hover:bg-slate-200">Authors</span></Link></li>
          <li><Link to={'/about'}> <span className="w-36 p-5 px-10 text-2xl font-semibold  text-center hover:bg-slate-200">About</span></Link> </li>
        </ul>
        <div className="md:hidden flex justify-between items-center w-full">
        <h1 className="text-center py-5 text-5xl font-serif ">Blog</h1>
        <GiHamburgerMenu className="text-3xl font-light hover:text-blue-700 "/>
        </div>
      </nav>
      </header>
    )
}
export default Nav;