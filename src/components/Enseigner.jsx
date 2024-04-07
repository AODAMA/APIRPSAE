import React from "react";
import Banner from "./Banner";

const DevenirEnseignant = () => {
    return (
        <>
            <Banner heading="Enseigner" />
            <div className="flex hidden 2xl:block fixed">
                <div className="w-3/4 mt-10 bg-green-600 pr-10 rounded-br-3xl font-montserrat text-white">
                    <div className="">
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center font-montserrat mt-10">
                <div className="max-w-screen-lg w-full my-10">
                    <div className="bg-white rounded-lg overflow-hidden mb-8" id="premiere-etapes">
                        <div className="font-bold text-3xl text-green-700 mb-6">Devenir Enseignant</div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-4">Première Étape : Obtenez une Licence (Bac+3)</div>
                            <p className="text-gray-700 mb-4">Votre voyage vers le monde de l'enseignement commence par l'obtention d'une licence dans le domaine qui vous passionne. Cette étape cruciale marque le début de votre parcours vers le partage du savoir.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden mb-8" id="inscription-master">
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-4">Inscription en Master MEEF</div>
                            <p className="text-gray-700 mb-4">Le Master MEEF (Métiers de l’Enseignement, de l’Éducation et de la Formation) vous ouvre les portes du monde de l'enseignement. Ce programme spécialisé, avec ses différentes mentions, vous prépare à façonner les futures générations.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden mb-8" id="concours">
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-4">Préparation et Passage des Concours</div>
                            <p className="text-gray-700 mb-4">Les concours de recrutement sont les gardiens des portes de l'enseignement. Ils sont votre chemin vers le premier degré ou le secondaire, que ce soit dans le secteur public ou privé.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden mb-8" id="validation-master">
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-4">Validation du Master MEEF</div>
                            <p className="text-gray-700 mb-4">Pour accéder à la salle des professeurs, vous devez valider les deux années du Master MEEF. Ce diplôme est votre passeport pour le monde de l'enseignement.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden mb-8" id="formation-alternance">
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-4">Formation en Alternance</div>
                            <p className="text-gray-700 mb-4">La seconde année du Master MEEF est une aventure en alternance. Vous devenez fonctionnaire stagiaire tout en suivant des cours à l'ESPE et en effectuant un stage en responsabilité devant les élèves.</p>
                        </div>
                    </div>
                    <div className="text-center mb-8">
                        <p className="text-gray-700">Pour en savoir davantage :</p>
                        <a href="http://www.devenirenseignant.gouv.fr/pid33985/enseigner-au-college-ou-au-lycee-general-le-capes.html" className="text-green-600 font-semibold hover:underline">http://www.devenirenseignant.gouv.fr/pid33985/enseigner-au-college-ou-au-lycee-general-le-capes.html</a>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden mb-8" id="annales-bac">
                    <div className="font-bold text-3xl text-green-700 mb-6">Annales du Baccalauréat d'Italien</div>
                        <div className="px-6 py-4">
                           
                            <p className="text-black-700 mb-4"><span className="font-bold">- Sujets juin 2018</span></p>
                            <ul className="list-disc pl-8 mb-4">
                                <li><span className="font-bold">Général <a className="text-red-500 hover:underline" href="https://drive.google.com/file/d/14GumrwVu_b9ktTntiqf8qfzZ5IQnkNFA/view">LV1</a> et <a className="text-green-500 hover:underline" href="https://drive.google.com/file/d/1Gfa185oueavngLmIbyfgBXOPSKhPMUh0/view">LV2</a> - métropole</span></li>
                                <li><span className="font-bold">Technologique <a className="text-red-500 hover:underline" href="https://drive.google.com/file/d/1vzQ_CDQB3XfIiB6jdZzoYzxATE6nY2Wl/view">LV1</a> et <a className="text-green-500 hover:underline" href="https://drive.google.com/file/d/1wzh0kuI9zOjZvfshxsCUAS7RW5nEU7c2/view">LV2</a> - métropole</span></li>
                                <li><span className="font-bold">Général <a className="text-red-500 hover:underline" href="https://drive.google.com/file/d/1CyTW4cyc8zwRsT9_7xkEVsnZRcsMc6of/view">LV1</a> et <a className="text-green-500 hover:underline" href="https://drive.google.com/file/d/11MkdblXUOeRNefhpLkkh6LxBfvBdTCB2/view">LV2</a> - centres étrangers</span></li>
                            </ul>
                            <p className="text-black-700 mb-4"><span className="font-bold">- Sujets septembre 2017</span></p>
                            <ul className="list-disc pl-8 mb-4">
                                <li><span className="font-bold">Général <a className="text-red-500 hover:underline" href="https://drive.google.com/file/d/15fh0IwEDRpkhocqmkXq2Sm6IdOZbO7uc/view">LV1</a> et <a className="text-green-500 hover:underline" href="https://drive.google.com/file/d/1q4n_DefrKiSL8mn93BcJy0NCm35PbeZ4/view">LV2</a></span></li>
                                <li><span className="font-bold">Technologique <a className="text-red-500 hover:underline" href="https://drive.google.com/file/d/1SjoZlSdtjdOVtBzrt6_3t0M-OzxT7eSo/view">LV1</a> et <a className="text-green-500 hover:underline" href="https://drive.google.com/file/d/1vZH1xwfwJmrodOcOsLHS50TlaDWfTB3f/view">LV2</a></span></li>
                            </ul>
            
                            <p className="text-black-700 mb-4"><span className="font-bold">- Sujets 2016</span></p>
                           
                            <ul className="list-disc pl-8">
                                <li><a className="font-bold text-red-500 hover:underline" href="https://drive.google.com/file/d/0B34j4qalEtJsZzlYemJzd2pnZms/view?resourcekey=0-R9RLDqHEwKQRQ1r4yStJ9Q">LV1</a> <a className="font-bold text-green-500 hover:underline" href="https://drive.google.com/file/d/0B34j4qalEtJsUGZTZ25yWVNHNzQ/view?resourcekey=0-6J82GR75FslIxDc_trT2uw">LV2</a> </li>
                            </ul>
                        <br />
                        <div className="font-bold text-3xl text-green-700 mb-6">Programmes</div>
                        <div className="bg-white rounded-lg overflow-hidden mb-8" id="programmes-lycee">
    <div className="px-6 py-4">
        <div className="font-bold text-1xl text-black-700 mb-6">Programmes Lycée 2019</div>
        <p className="text-black-700 mb-4">Les nouveaux programmes définitifs du Lycée sont parus:</p>
        <a href="https://drive.google.com/file/d/1T2N1ne5bLgI2qdaG8NqWsO_82roUkvzA/view" className="text-green-600 font-semibold hover:underline block">Programme 1</a>
        <a href="https://drive.google.com/file/d/1SHj-xlUzQa-v303RnBYa6wc022gtJN8p/view" className="text-green-600 font-semibold hover:underline block">Programme 2</a>
    </div>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DevenirEnseignant;
