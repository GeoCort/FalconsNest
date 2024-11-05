import { useRouteError } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState } from "react";

export default function ErrorPage(){
    const  error = useRouteError()
    const [errorDefault, setErrorDefault] = useState("Page Not Found")
    console.log(error)  
    return (
        <div id="error-page" className="min-h-screen">
          <Nav/>
          <div className="text-zinc-600 flex justify-center items-center w-full flex-col min-h-screen gap-3">
          <h1 className="text-6xl font-bold ">Oops!</h1>
          <p className="text-4xl font-bold">Sorry, an unexpected error has occurred.</p>
          <p className="text-3xl font-bold">
            <i>{error.statusText || errorDefault}</i>
          </p>
          </div>
          <Footer/>
        </div>
      );
}