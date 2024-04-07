import React from "react";
import Banner from "./Banner";

const Apprendre = () => {
    const newHeading = "Apprendre";

    return (
        <>
            <Banner heading={newHeading} />
            <div className=" flex hidden 2xl:block  fixed">  
            <div className="w-3/4 mt-10 bg-green-600 pr-10 rounded-br-3xl font-montserrat text-white">
                <div className="">
                    <h2 className="text-lg font-semibold px-3 mb-4">Sections</h2>
                    <ul>
                        <li><a href="#secondaire" className="block px-3">L'italien dans le secondaire</a></li>
                        <li><a href="#bac" className="block px-3">L'italien après le bac</a></li>
                    </ul>
                </div>
            </div>
        </div>          
            <div className="flex flex-col items-center font-montserrat mt-10">
                <div className="max-w-screen-lg w-full my-10">
                    <div className="bg-white rounded-lg overflow-hidden mb-8" id="secondaire">
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-4">L'italien dans le secondaire</div>
                            <div className="px-0 py-2">
                                <span className="inline-block bg-green-700 rounded-full px-4 py-2 text-base font-semibold text-white mr-2 mb-2">ACADÉMIE DE PARIS</span>
                                <span className="inline-block bg-white rounded-full px-4 py-2 text-base font-semibold text-gray-800 mr-2 mb-2">ACADÉMIE DE CRÉTEIL</span>
                                <span className="inline-block bg-red-700 rounded-full px-4 py-2 text-base font-semibold text-white mr-2 mb-2">ACADÉMIE DE VERSAILLES</span>
                            </div>
                            <p className="text-gray-700 mb-4">Nous pouvons vous proposer les listes qui suivent grâce à l'aimable contribution de :</p>
                            <ul className="list-disc pl-5">
                                <li className="text-gray-700">Mme Pagliari, IA-IPR de l'académie de Paris</li>
                                <li className="text-gray-700">Mme Cutino, IA-IPR de l'académie de Créteil</li>
                                <li className="text-gray-700">M. Cherki, IA-IPR de l'académie de Versailles</li>
                            </ul>
                            <br />
                            <p className="text-gray-700">Grâce à des programmes pédagogiques dynamiques et interactifs, les étudiants découvrent non seulement la langue, mais aussi la passionnante histoire et la riche tradition artistique de l'Italie. </p>
                            <br />
                            <p className="text-gray-700">L'étude de l'italien dans le secondaire permet aux jeunes de développer leurs compétences linguistiques tout en explorant une culture vivante et diversifiée.</p>
                            <br />
                            <p className="text-gray-700">Des professeurs passionnés guident les élèves à travers des activités variées, telles que des jeux de rôle, des débats et des projets artistiques, qui stimulent l'apprentissage et favorisent l'expression créative.</p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg overflow-hidden mb-8" id="bac">
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-4">L'italien après le bac</div>
                            <p className="text-gray-700 mb-4">Voici quelques possibilités d'études universitaires en italien après le baccalauréat :</p>
                            
                            <div className="border-l-4 border-green-700 pl-4 mb-6">
                                <h3 className="font-semibold text-lg mb-2">ACADÉMIE DE PARIS</h3>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-base mb-2">POST-BAC</h4>
                                    <p className="text-gray-700">
                                        Liste des établissements proposant l'Italien en Post-Bac dans l'académie de Paris
                                        <ul className="list-disc pl-5">
                                            <li>Lycée Henri IV</li>
                                            <li>Lycée Fénélon</li>
                                            <li>Lycée Jules Ferry</li>
                                            <li>Lycée Janson de Sailly</li>
                                            <li>École Nationale de Commerce</li>
                                            <li>Lycée Ravel</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            
                            <div className="border-l-4 border-white-00 pl-4 mb-6">
                                <h3 className="font-semibold text-lg mb-2">ACADÉMIE DE CRÉTEIL</h3>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-base mb-2">POST-BAC</h4>
                                    <p className="text-gray-700">
                                        Liste des établissements proposant l'Italien en Post-Bac dans l'académie de Créteil
                                        <ul className="list-disc pl-5">
                                            <li>Lycée Marcelin Berthelot de St Maur des fossés (94) Saint Maur des Fossés</li>
                                            <li>Lycée Auguste Blanqui Saint-Ouen</li>
                                            <li>Lycée Jean Jaurès Montreuil</li>
                                            <li>Lycée Robert Schuman (Privé) Joinville-le-Pont</li>
                                            <li>Maison d’Éducation de la Légion d'Honneur Saint-Denis</li>
                                            <li>Lycée Jean Macé Vitry sur Seine</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div className="border-l-4 border-red-700 pl-4 mb-6">
                                <h3 className="font-semibold text-lg mb-2">ACADÉMIE DE VERSAILLES</h3>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-base mb-2">POST-BAC</h4>
                                    <p className="text-gray-700">
                                        Liste des établissements proposant l'Italien en Post-Bac dans l'académie de Versailles
                                        <ul className="list-disc pl-5">
                                            <li>Lycée La Bruyère Versailles</li>
                                            <li>Lycée Lakanal Sceaux</li>
                                            <li>Lycée Sainte-Croix (privé) Neuilly-sur-Seine</li>
                                            <li>Lycée Parc de Vilgénis Massy</li>
                                            <li>Lycée Jean-Jacques Rousseau Sarcelles</li>
                                            <li>Lycée Alexandre Dumas Saint Cloud</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Apprendre;
