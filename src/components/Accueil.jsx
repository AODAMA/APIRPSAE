import React from "react";
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from "@heroicons/react/24/solid"

import Banner from "./Banner"

const Accueil = () => {
    const newHeading ="Association des Professeurs d'Italien de la Région Parisienne";
    return(
    <>
    <Banner heading={newHeading} />
    <div className="w-full py-10 flex justify-center font-montserrat">
        <div className="">
            <div className="">
                <h1 className="mb-5 font-medium">Bienvenue sur le site de l'Association des Professeurs d'Italien de la Région Parisienne </h1>
                    <div className="text-sm ">
                    <p className="mb-1">Notre association a pour vocation: </p>
                        <ul className="px-5 mb-3 list-disc ">
                        <li className="">D’établir et développer des liens de solidarité et d’amitié entre les italianistes de la région parisienne ; </li>
                        <li className="">De renseigner les professeurs d’italien à tous niveaux sur la diffusion de l’enseignement de l’italien en région parisienne ; </li>
                        <li className="">De promouvoir l’enseignement de l’italien. </li>
                    </ul>
                   </div>
                <p className="text-sm"><span className="font-bold">Pour nous contacter :</span> apirp.association@gmail.com </p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Accueil 