import React from "react";
import Banner from "./Banner";
import FestivalImg from '../assets/article.jpg';
import SamediImg from '../assets/programme1.jpg';
import DimancheImg from '../assets/programme2.jpg';

const Forum = () => {
    const newHeading = "Forum des associations Franco-italiennes";

    return (
        <>
            <Banner heading={newHeading} />
            <div className="flex flex-col items-center font-montserrat">
                <div className="max-w-screen-lg w-full py-10">
                    <h1 className="text-green-600 font-semibold text-lg mb-8">Forum des Associations italiennes virtuel: APIRP 2020</h1>
                    <div className="flex items-center mb-8">
                        <div className="w-1/4"> 
                            <img className="w-full h-auto" src={FestivalImg} alt="ERR" /> 
                        </div>
                        <div className="flex-1 ml-4">
                            <p className="text-justify">
                                Le forum des associations franco-italiennes initialement prévu place Baudoyer à Paris,
                                se déroulera cette année de façon virtuelle le 20 et 21 juin 2020. 
                                L' APIRP participera avec une intervention de Olivier Morin et Ilaria Madonna, président et vice-présidente de l'association,
                                le samedi 20 juin de 16h30 à 16h50. Pour l'occasion Ilaria Madonna a créé un padlet pour illustrer les projets menés par l'APIRP,
                                intitulé APIRP 2020. Vous y trouverez des renseignements sur la diffusion de l'enseignement de l'italien dans les trois académies franciliennes, 
                                des documents pour la promotion de notre belle langue, une vidéo pour présenter le bilan des activités de l'APIRP de cette année, 
                                le dossier ESABAC, le programme du concours de recrutement ainsi que des projets menés par nos adhérents. 
                                Voici le lien : <a className="text-green-600" href="https://padlet.com/apirpassociation/apirp2020">https://padlet.com/apirpassociation/apirp2020</a>. 
                                L'intégralité du forum sera retransmise sur la page Facebook du Forum des Associations italiennes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col max-w-screen-lg justify-center mb-8">
                    <img className="mr-4" src={SamediImg} alt="ERR" />
                    <img src={DimancheImg} alt="ERR" />
                </div>
            </div>
        </>
    );
};

export default Forum;
