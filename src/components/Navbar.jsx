import React, {useState} from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"
import logoImg from '../assets/logo.jpg'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        
        <div className="w-screen h-[80px] z-10 fixed drop-shadow-lg bg-white">   
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <img className="mr-4 w-16 h-13" src={logoImg} alt="ERR" />
                    <ul className="hidden md:flex">
                        <li className=" text-black hover:text-green-600 font-montserrat">Accueil</li>
                        <li className=" text-black hover:text-green-600 font-montserrat">Forum des associations franco-italiens</li>
                        <li className=" text-black hover:text-green-600 font-montserrat">Activités culturelles</li>
                        <li className=" text-black hover:text-green-600 font-montserrat">Nous connaître</li>
                        <li className=" text-black hover:text-green-600 font-montserrat">Adhérer</li>
                        <li className=" text-black hover:text-green-600 font-montserrat">Promouvoir l'italien</li>
                        <li className=" text-black hover:text-green-600 font-montserrat">Apprendre</li>
                        <li className=" text-black hover:text-green-600 font-montserrat">Enseigner</li>
                        <li className=" text-black hover:text-green-600 font-montserrat">Divers</li>
                    </ul>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {! nav ? <Bars3Icon className="w-5"/> : <XMarkIcon className="w-5"/>}
                    
                </div>
                
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className="border-b-2 border-zinc-300 w-full">Accueil</li>
                <li className="border-b-2 border-zinc-300 w-full">Forum des associations franco-italiens</li>
                <li className="border-b-2 border-zinc-300 w-full">Activités culturelles</li>
                <li className="border-b-2 border-zinc-300 w-full">Nous connaître</li>
                <li className="border-b-2 border-zinc-300 w-full">Adhérer</li>
                <li className="border-b-2 border-zinc-300 w-full">Promouvoir l'italien</li>
                <li className="border-b-2 border-zinc-300 w-full">Apprendre</li>
                <li className="border-b-2 border-zinc-300 w-full">Enseigner</li>
                <li className="border-b-2 border-zinc-300 w-full">Divers</li>
            </ul>
        </div>
    )
}

export default Navbar