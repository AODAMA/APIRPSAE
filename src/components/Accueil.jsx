import React from "react";
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from "@heroicons/react/24/solid"

import bgImg from '../assets/imagebanniere.jpg'

const Accueil = () => {
    return(
    <>
    <div className="relative pt-12">
        <img className="w-full h-13 sm" src={bgImg} alt="ERREUR IMAGE" />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500 text-3xl font-montserrat lg:text-2xl sm:text-sm md:text-md">Association des Professeurs d'Italien de la Région Parisienne</h2>
    </div>
    <div className="w-full h-screen bg-zinc-200  flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                <h1>Bienvenue sur le site de l'Association des Professeurs d'Italien de la Région Parisienne </h1>
                <p>Notre association a pour vocation: </p>
                <ul>
                    
                </ul>
            </div>
        </div>
    </div>
    </>
    )
}

export default Accueil 