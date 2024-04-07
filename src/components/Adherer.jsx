import React from "react";
import Banner from "./Banner"



const Adherer = () => {
    const newHeading ="Adhérer";

    return(
        <>
        <Banner heading={newHeading} />          
         <div className="flex flex-col items-center font-montserrat" id="pourquoi" >
                <div className="max-w-screen-lg w-full py-10">
                    <h1 className="text-green-600 text-center font-semibold text-2xl mb-8" >Pourquoi adhérer?</h1>
                    <div className="flex items-center">
                        <div className="flex-1 ml-4 text-justify">
                            <p className="mb-5 font-semibold">
                            Pour: 
                            </p>
                            <p className="mb-5">
                            Participer activement aux assemblées générales.                               
                            </p>
                            <p className="mb-5">
                            Recevoir chaque année le bulletin imprimé de l’association et les plaquettes gratuites pour la promotion de l’italien. 
                            </p>
                            <p className="mb-5">
                            Soutenir des initiatives pour la promotion de l’enseignement de l’italien en île-de-France :
                            </p>
                            <p className="mb-5 text-sm">
                            - la réalisation de ce site, conçu comme un outil de partage et de renseignement pour tous les professeurs d’italien de l’île-de-France ;
                            </p>
                            <p className="mb-5 text-sm">
                            - la réalisation et l’impression de plaquettes pour la promotion de l’italien
                            </p>
                            <p className="mb-10 text-sm">
                            - notre présence lors des manifestations et des évènements culturels (tels que La festa del libro e della cultura italiana ou le Forum des associations franco-italiennes, etc)
                            </p>
                            <p className="mb-5">
                            Connaître le réseaux des professeurs d’italien de la Région Parisienne.
                            </p>
                            <p className="mb-5">
                            Pouvoir être représenté et soutenu, en toutes circonstances et auprès des instances officielles, par une association reconnue.
                            </p>
                            <p className="mb-12">
                            L’union faisant la force, l’A.P.I.R.P. est un moyen pour ne pas rester isolé et avoir des échanges actifs sur notre métier.
                            </p>
                            <h1 className="text-green-600 text-center font-semibold text-2xl mt-10 mb-8" >Qui peut adhérer</h1>
                            <p className="mb-5">
                            Peuvent faire partie de l’Association tous les professeurs d’italien de la région parisienne en activité ou à la retraite, quel que soit l’ordre d’enseignement auquel ils appartiennent.
                            </p>
                            <p className="mb-5 font-semibold">
                            Comment adhérer
                            </p>
                            <p className="mb-5">
                            Pour devenir membres il faut : remplir une fiche d’inscription ET verser annuellement une cotisation, dont le montant est fixé chaque année par le Conseil d’administration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-lg w-full py-10" id="fiche">
                    <div className="flex items-center mb-8">
                        <div className="flex-1 ml-4 text-justify">
                            <h2 className="mb-5 font-semibold">
                            Pour adhérer à l'association, téléchargez la fiche suivante et retournez-la à l'adresse qu'y est indiquée
                            </h2>
                            <a href="Pour adhérer à l'association, téléchargez la fiche suivante et retournez-la à l'adresse qu'y est indiquée" className="mb-12 font-semibold text-green-600 hover:text-green-800">
                            Fiche d'adhésion 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adherer