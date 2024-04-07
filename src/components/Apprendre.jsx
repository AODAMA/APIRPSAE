import React from "react";
import Banner from "./Banner"



const Apprendre = () => {
    const newHeading ="Apprendre L'italien";

    return(
        <>
         <Banner heading={newHeading} />
         <div className="flex flex-col items-center font-montserrat" id="pourquoi" >
                <div className="max-w-screen-lg w-full py-10">
                    
                    <div className="flex items-center">
                        <div className="flex-1 ml-4 text-justify">
                            <p className="mb-5 font-semibold">
                            Nous pouvons vous proposer les listes qui suivent grâce à l'aimable contribution de Mme Pagliari, IA-IPR de l'académie de Paris , de Mme Cutino, IA-IPR de l'académie de Créteil et de M. Cherki, IA-IPR de l'académie de Versailles. 
                            </p>
                            <p className="mb-5">
                            Les listes ont été mises à jour le mois de juin 2018                             
                            </p>
                            <ul>
                            <li><a  href="https://pia.ac-paris.fr/portail/jcms/pre1_441344/apprendre-l-italien-a-paris" className="text-green-600 text-center font-semibold text-2xl mb-8 hover:text-green-800" >ACADÉMIE DE PARIS </a></li>
                            <li><a href="https://interlangues.ac-creteil.fr/spip.php?rubrique51" className="text-green-600 text-center font-semibold text-2xl mb-8 hover:text-green-800" >ACADÉMIE DE CRÉTEIL </a></li>
                            <li><a href="https://italien.ac-versailles.fr" className="text-green-600 text-center font-semibold text-2xl mb-8 hover:text-green-800" >ACADÉMIE DE VERSAILLES </a></li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Apprendre