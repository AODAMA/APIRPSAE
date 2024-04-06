import React, {useState} from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"; // Import Link from React Router

import logoImg from '../assets/logo.jpg'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        
        <div className="w-screen h-[80px] z-10 fixed drop-shadow-lg bg-white">   
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <img className="mr-4 w-16 h-13" src={logoImg} alt="ERR" />
                    <ul className="hidden lg:flex md:text-sm lg:text-sm">
                        <li className=" text-black hover:text-green-600 font-montserrat"><Link to="/">Accueil</Link> {}</li>
                        <li className=" text-black hover:text-green-600 font-montserrat"><Link to="/Forum">Forum des associations franco-italiennes</Link> {}</li>
                        <li className=" text-black hover:text-green-600 font-montserrat"><Link to="/Activites">Activités Culturelles</Link> {}</li>
                        <li className=" text-black hover:text-green-600 font-montserrat"><Link to="/Connaitre">Nous connaître</Link> {}</li>
                        <li className=" text-black hover:text-green-600 font-montserrat"><Link to="/Adherer">Adhérer</Link> {}</li>
                        <li className=" text-black hover:text-green-600 font-montserrat"><Link to="/Promouvoir">Promouvoir l'italien</Link> {}</li>
                        <li className=" text-black hover:text-green-600 font-montserrat"><Link to="/Apprendre">Apprendre</Link> {}</li>
                        <li className=" text-black hover:text-green-600 font-montserrat"><Link to="/Enseigner">Enseigner</Link> {}</li>
                        <li className=" text-black hover:text-green-600 font-montserrat"><Link to="/Divers">Divers</Link> {}</li>
                    </ul>
                </div>
                <div className="lg:hidden" onClick={handleClick}>
                    {! nav ? <Bars3Icon className="w-5"/> : <XMarkIcon className="w-5"/>}
                    
                </div>
                
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className="border-b-2 border-zinc-300 w-full"><Link to="/">Accueil</Link> {}</li>
                <li className="border-b-2 border-zinc-300 w-full"><Link to="/Forum">Forum des associations franco-italiennes</Link> {}</li>
                <li className="border-b-2 border-zinc-300 w-full"><Link to="/Activites">Activités Culturelles</Link> {}</li>
                <li className="border-b-2 border-zinc-300 w-full"><Link to="/Connaitre">Nous connaître</Link> {}</li>
                <li className="border-b-2 border-zinc-300 w-full"><Link to="/Adherer">Adhérer</Link> {}</li>
                <li className="border-b-2 border-zinc-300 w-full"><Link to="/Promouvoir">Promouvoir l'italien</Link> {}</li>
                <li className="border-b-2 border-zinc-300 w-full"><Link to="/Apprendre">Apprendre</Link> </li>
                <li className="border-b-2 border-zinc-300 w-full"><Link to="/Enseigner">Enseigner</Link> {}</li>
                <li className="border-b-2 border-zinc-300 w-full"><Link to="/Divers">Divers</Link> {}</li>
            </ul>
        </div>
    )
}

export default Navbar