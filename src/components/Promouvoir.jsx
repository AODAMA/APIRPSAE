import React from "react";
import Banner from "./Banner";

import BonDeCommandeNonAdherents from '../assets/bon_de_commande_NON_adhérents.pdf';
import BonDeCommandeAdherents from '../assets/bon_de_commande_adherents.pdf';
import CaptureNonAdherents from '../assets/non_adherents.png';
import CaptureAdherents from '../assets/adherents.png';
import QuizzAnswers from '../assets/quizz.pdf';
import QuizzImg from '../assets/quizz.png';

const PromouvoirItalien = () => {
    const newHeading = "Promouvoir l'italien";

    return (
        <>
            <Banner heading={newHeading} />
            
            <div className="flex flex-col items-center font-montserrat mt-10">
                <div className="max-w-screen-lg w-full py-10 px-10 border-2 my-10 border-red-100 rounded shadow-md">
                    <h1 className="text-green-600 font-semibold text-lg mb-8">Explorer la langue italienne !</h1>
                    <div className="flex items-center mb-8">
                        <div className="flex-1 text-justify">
                            <p className="text-gray-700">
                                L'italien est bien plus qu'une langue, c'est une porte ouverte vers une culture riche et diversifiée. En apprenant l'italien, vous découvrirez les trésors de la littérature, de l'art, de la musique et de la cuisine italiennes. Rejoignez-nous dans cette aventure linguistique et culturelle !
                            </p>
                            <ul className="list-disc pl-5 mt-4">
                                <li className="text-gray-700">Culture immersive : Plongez-vous dans l'univers envoûtant de la culture italienne en apprenant sa langue.</li>
                                <li className="text-gray-700">Élargissement des horizons : Avec plus de 85 millions de locuteurs natifs dans le monde, l'italien vous ouvre des portes vers de nouvelles opportunités personnelles et professionnelles.</li>
                                <li className="text-gray-700">Voyage et découverte : Explorez l'Italie avec aisance et découvrez des régions pittoresques, une cuisine délicieuse et des traditions fascinantes.</li>
                                <li className="text-gray-700">Opportunités académiques et professionnelles : Maîtriser l'italien peut enrichir votre curriculum vitae et ouvrir des portes vers des carrières internationales passionnantes.</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                Que vous soyez débutant ou que vous souhaitiez perfectionner vos compétences, nous avons des ressources et des cours adaptés à tous les niveaux. Rejoignez notre communauté dynamique et découvrez la beauté de l'Italie à travers sa langue envoûtante !
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-lg w-full py-10 px-10 border-2 my-10 border-red-100 rounded shadow-md">
                    <h1 className="text-green-600 font-semibold text-lg mb-8">Commandez votre dépliant maintenant !</h1>
                    <div className="flex items-center mb-4">
                        <div className="flex-1 text-justify">
                            <p className="text-gray-700">
                                L'APIRP a édité un dépliant pour la promotion de l'apprentissage de la langue italienne dans les établissements scolaires de l'Île-de-France. Vous pouvez télécharger les formulaires de commande ci-dessous :
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <a href={BonDeCommandeNonAdherents} className="text-green-700 hover:underline" target="_blank" rel="noopener noreferrer">Télécharger le bon de commande (Non adhérents)</a>
                            <img src={CaptureNonAdherents} alt="Capture Non Adhérents" className="mt-3" style={{ maxWidth: "100%" }} />
                        </div>
                        <div>
                            <a href={BonDeCommandeAdherents} className="text-green-700 hover:underline" target="_blank" rel="noopener noreferrer">Télécharger le bon de commande (Adhérents)</a>
                            <img src={CaptureAdherents} alt="Capture Adhérents" className="mt-10" style={{ maxWidth: "100%" }} />
                        </div>
                    </div>
                   
                </div>
            </div>
     
        </>
    );
}

export default PromouvoirItalien;
