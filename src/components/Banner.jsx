import React from "react";

import bgImg from '../assets/imagebanniere.jpg'



const Banner = () => {
    return(
        <>
        <div className="relative pt-12">
            <img className="w-full h-13 sm" src={bgImg} alt="ERREUR_IMAGE" />
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500 text-3xl font-montserrat lg:text-2xl sm:text-sm md:text-xl">Association des Professeurs d'Italien de la Région Parisienne</h2>
        </div>
        </>
    )
}

 export default Banner