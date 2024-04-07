import React from "react";
import Banner from "./Banner"



const Connaitre = () => {
    const newHeading ="Nous Connaître";

    return(
        <>
        <Banner heading={newHeading} />
        <div className=" flex hidden 2xl:block  fixed">  
            <div className="w-3/4 mt-10 bg-green-600 pr-10 rounded-br-3xl font-montserrat text-white">
                <div className="">
                    <h2 className="text-lg font-semibold px-3 mb-4">Sections</h2>
                    <ul>
                        <li><a href="#presentation" className="block px-3">Présentation</a></li>
                        <li><a href="#CA" className="block px-3">Membres du CA</a></li>
                        <li><a href="#bulletins" className="block px-3">Bulletins</a></li>
                        <li><a href="#contact" className="block px-3">Nous contacter</a></li>
                    </ul>
                </div>
            </div>
        </div>           
         <div className="flex flex-col items-center font-montserrat ">
                <div className="max-w-screen-lg w-full py-10 " id="presentation">
                    <h1 className="text-green-600 text-center font-semibold text-2xl mb-8" >Présentation de l'APIRP: Association des Professeurs d'Italien de la Région Parisienne</h1>
                    <div className="flex items-center mb-8">
                        <div className="flex-1 ml-4 text-justify">
                            <p className="mb-5">
                            Le 9 mai 1977 était déclarée à la Préfecture de Police de Paris la création de « L'Amicale des professeurs d'italien de la région parisienne ». Rebaptisée « Association des professeurs d'italien de la région parisienne » (APIRP) en 1984, elle eut pour président(e)s successifs(ives) des professeurs de Collège et de Lycée de l’Éducation Nationale, Jean Constantin, Pierre Méthivier, Anne Mazire, Gabrielle Kerleroux, Ketty Zanforlini et depuis janvier 2017, Romina De Lucia. 
                            </p>
                            <p className="mb-5">Quarante ans après  sa création, sa vocation originelle (« établir et développer des liens de solidarité et d'amitié entre les italianistes de la région parisienne ») reste toujours d'actualité. Mais l'APIRP a évolué avec le temps. De nouvelles actions sont en effet apparues nécessaires : tout d'abord, la collecte d'informations fiables au sujet des implantations de postes dans les trois académies; ensuite, la mise en commun d'informations culturelles, de ressources pédagogiques, d'idées pour les cours; et enfin, l'entre-aide en cas de mutation, de fragilisation de poste, etc. Pour ce faire, l'APIRP entretient un dialogue régulier et constructif avec l'Inspection d'italien, en toute indépendance.                               
                            </p>
                            <p className="mb-5">
                            L'APIRP a élaboré une plaquette de promotion de la langue italienne à destination des parents et des élèves en situation de choix, publie un bulletin par an, réunit ses adhérents en assemblée générale au début et à la fin de chaque année scolaire et a également créé un site Internet et une page Facebook. 
                            </p>
                            <p className="mb-5">
                            Elle est présente lors de manifestations culturelles italo-françaises (Forum des association italiennes du XIIIè arrondissement, Festa del libro des Blancs Manteaux, réceptions au Centre culturel et à l'Ambassade d'Italie, entre autres). Elle représente aussi tous les professeurs d'italien de l'Ile de France au Congrès annuel de la FNAI (Fédération Nationale des Associations d'Italianistes).
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-lg w-full py-10">
                    <h1 className="text-green-600 ml-4 font-semibold text-lg mb-10">STATUTS VOTES EN ASSEMBLÉE GÉNÉRALE EXTRAORDINAIRE DU 9 MAI 2007 ET MODIFIÉS LE 24 JANVIER 2014</h1>
                    <div className="flex items-center mb-8">
                        <div className="flex-1 ml-4 text-justify">
                            <h2 className="mb-5 font-semibold">
                            Art .1 DÉNOMINATION
                            </h2>
                            <p className="mb-12">
                            Il est fondé entre les adhérents aux présents statuts une association régie par la loi du 1er juillet 1901 et le décret du 16 août 1901, sous la dénomination de « Association des Professeurs d’Italien de la Région Parisienne » dite, en abrégé, « A.P.I.R.P. » 
                            </p>

                            <h2 className="mb-5 font-semibold">
                            Art.2 OBJET
                            </h2>
                            <p className="mb-4">
                            Cette association a pour objet d’établir et de développer des liens de solidarité et d’amitié entre les italianistes de la région parisienne, et de leur permettre, au cours de réunions périodiques, d’examiner les problèmes spécifiques à leur discipline .
                            </p>
                            <p className="mb-12">
                            Peuvent faire partie de l’Association tous les professeurs d’italien de la région parisienne en activité ou à la retraite, quel que soit l’ordre d’enseignement auquel ils appartiennent. Le bureau se réserve le droit d’examiner la candidature de toute autre personne désireuse d’adhérer à l’Association.
                            </p>


                            <h2 className="mb-5 font-semibold">
                            Art.3. SIÈGE SOCIAL
                            </h2>
                            <p className="mb-12">
                            Le siège social de l’association est fixé à PARIS (75). Le siège social sera transféré par simple décision du bureau.
                            </p>

                            <h2 className="mb-5 font-semibold">
                            Art.4. COMPOSITION
                            </h2>
                            <p className="mb-4">
                            L’association se compose :
                            </p>
                            <p className="mb-4">
                            1. de membres d’honneur. Ce titre honorifique peut être conféré par le Conseil d’Administration aux personnes n’ayant pas adhéré à l’association, qui ont rendu ou rendent des services notables à celle-ci. Ils peuvent assister aux assemblées générales avec voix consultative. Ils ne sont ni électeurs, ni éligibles.
                             </p>
                             <p className="mb-4">
                             2. de membres honoraires. Ce titre honorifique est conféré par le Conseil d’administration aux anciens dirigeants de l’association.
                             </p>
                             <p className="mb-4">
                             3. de membres bienfaiteurs. Ce sont les personnes, physiques ou morales, qui ont apporté une contribution financière importante à l’Association. Ils participent aux assemblées générales avec voix consultatives.
                             </p>
                             <p className="mb-12">
                             4. de membres actifs. Ils participent aux activités de l’Association et versent annuellement une cotisation dont le montant est fixé chaque année par le Conseil d’administration. Ils participent aux assemblées générales avec voix délibérative.
                             </p>

                            <h2 className="mb-5 font-semibold">
                            Art.5. PERTE DE LA QUALITÉ DE MEMBRE
                            </h2>
                            <p className="mb-4">
                            La qualité de membre de l’Association se perd :
                            </p>
                            <p className="mb-4">
                            - par démission adressée par lettre
                            </p>
                            <p className="mb-4">
                            - par non-paiement de la cotisation, après 3 rappels consécutifs
                            </p>
                            <p className="mb-12">
                            - par radiation décidée par le Conseil d’Administration, pour motif grave, le membre intéressé ayant été invité au préalable à fournir des explications devant le Conseil d’Administration
                            </p>


                            <h2 className="mb-5 font-semibold">
                            Art.6. RESSOURCES DE L’ASSOCIATION
                            </h2>
                            <p className="mb-4">
                            Les ressources de l’Association se composent :
                            </p>
                            <p className="mb-4">
                            - des cotisations versées par les membres qui en sont redevables
                            </p>
                            <p className="mb-12">
                            - de toute autre ressource autorisée par la loi
                            </p>

                            <h2 className="mb-5 font-semibold">
                            Art.7. CONSEIL D’ADMINISTRATION
                            </h2>
                            <p className="mb-4">
                            L’Association est administrée par un Conseil d’Administration élus tous les 2 ans par l’Assemblée Générale, à la majorité des présents ou représentés. Le vote par procuration est autorisé sans limitation de mandat.
                            </p>
                            <p className="mb-4">
                            Le Conseil se renouvelle par moitié, tous les deux ans, les membres sortants sont rééligibles.
                            </p>
                            <p className="mb-4">
                            En cas de vacance, le conseil pourvoit au remplacement du ( ou des) membre(s).
                            </p>
                            <p className="mb-12">
                            Le nombre d’élus au Conseil d’Administration est décidé, lors des élections, par l’Assemblée Générale.
                            </p>
 

                            <h2 className="mb-5 font-semibold">
                            Art.8. RÉUNIONS DU CONSEIL
                            </h2>
                            <p className="mb-4">
                            Le Conseil d’Administration se réunit toutes les fois que cela est nécessaire, et au moins une fois tous les 6 mois, sur convocation du président, ou sur la demande du ¼ de ses membres.
                            </p>
                            <p className="mb-4">
                            Les décisions sont prises à la majorité simple des voix.
                            </p>
                            <p className="mb-4">
                            En cas de partage, la voix du président est prépondérante.
                            </p>
                            <p className="mb-4">
                            Les membres absents peuvent être représentés par un autre membre du conseil.
                            </p>
                            <p className="mb-12">
                            Tout membre qui, sans excuse, n’aura pas assisté à 3 réunions consécutives, pourra être considéré comme démissionnaire.
                            </p>

                            <h2 className="mb-5 font-semibold">
                            Art.9. LE BUREAU
                            </h2>
                            <p className="mb-4">
                            Le Conseil d’Administration choisit lui-même en son sein les membres du bureau composé de :
                            </p>
                            <p className="mb-4">
                            - Un président, si nécessaire de 3 vice-présidents (un par académie Créteil, Paris, Versailles),
                            </p>
                            <p className="mb-4">
                            - Un secrétaire général, si nécessaire de 2 secrétaires généraux adjoints
                            </p>
                            <p className="mb-4">
                            - Un trésorier, si nécessaire un trésorier adjoint
                            </p>
                            <p className="mb-4">
                            - Les membres du bureau sont élus pour 2 ans et les membres sortants sont rééligibles
                            </p>
                            <p className="mb-4">
                            - Le bureau se réunit chaque fois que nécessaire sur convocation du président ou du ¼ de ses membres.
                            </p>
                            <p className="mb-4">
                            - Tout membre qui, sans excuse, n’aura pas assisté à 3 réunions consécutives, pourra être considéré comme démissionnaire.
                            </p>
                            <p className="mb-12">
                            - Les modifications devront être adoptées à la majorité des membres présents.
                            </p>

                            <h2 className="mb-5 font-semibold">
                            Art.10. ASSEMBLÉE GÉNÉRALE ORDINAIRE
                            </h2>
                            <p className="mb-4">
                            L’Assemblée Générale ordinaire est convoquée ordinairement une fois par an, et extraordinairement chaque fois nécessaire, par le président ou à la demande du ¼ au moins de ses membres.
                            </p>
                            <p className="mb-4">
                            L’ordre du jour est fixé par le Conseil d’Administration et est indiqué sur les convocations.
                            </p>
                            <p className="mb-4">
                            Les convocations doivent être envoyées au moins 15 jours à l’avance , par courrier simple par les soins du bureau. 
                            </p>
                            <p className="mb-4">
                            L’Assemblé Générale entend les rapports sur la gestion du Conseil d’Administration et la situation financière et morale de l’association.
                            </p>
                            <p className="mb-4">
                            Elle approuve les comptes de l’exercice clos et pourvoit, s’il y a lieu au renouvellement des membres du Conseil d’Administration.  
                            </p>
                            <p className="mb-4">
                            Les décisions sont prises à la majorité des membres présents ou représentés.
                            </p>
                            <p className="mb-4">
                            Le vote par procuration est autorisé sans limitation de mandat.
                            </p>
                            <p className="mb-12">
                            Les délibérations de l’Assemblée Générale sont prises à main levée. Le scrutin à bulletin secret peut être demandé par le Conseil d’Administration ou par ¼ des membres présents.
                            </p>
                           
                            <h2 className="mb-5 font-semibold">
                            Art.11. ASSEMBLÉE GÉNÉRALE EXTRAORDINAIRE
                            </h2>
                            <p className="mb-4">
                            L’Assemblée Générale Extraordinaire a seule compétence pour modifier les statuts, décider la dissolution de l’Association et l’attribution des biens de l’Association.
                            </p>
                            <p className="mb-4">
                            Les décisions sont prises à la majorité des 2/3 des présents. 
                            </p>
                            <p className="mb-4">
                            Elle doit être convoquée spécialement à cet effet, par le président ou le 1/3 des membres de l’Association dans un délai de 15 jours avant la date fixée. 
                            </p>
                            <p className="mb-4">
                            La convocation doit indiquer l’ordre du jour et comporter en annexe le texte de la modification proposé. 
                            </p>
                            <p className="mb-12">
                            Les délibérations sont prises à main levée. 
                            </p>

                            <h2 className="mb-5 font-semibold">
                            Art.12 DISSOLUTION
                            </h2>
                            <p className="mb-12">
                            En cas de dissolution volontaire, statutaire ou judiciaire, l’Assemblée Générale Extraordinaire, désigne un ou plusieurs liquidateurs et l’actif, s’il y a lieu, est dévolu à des œuvres ayant un caractère analogue.
                            </p>

                            <h2 className="mb-5 font-semibold">
                            Art.13. RÈGLEMENT INTÉRIEUR
                            </h2>
                            <p className="mb-12">
                            Le Conseil d’Administration peut, s’il le juge nécessaire, établir un règlement intérieur destiné à déterminer les détails d’exécution des présents statuts.
                            </p>

                            <h2 className="mb-5 font-semibold">
                            ART.14. FORMALITÉS
                            </h2>
                            <p className="mb-4">
                            Le Conseil d’Administration peut donner mandat exprès à toute personne en son sein pour accomplir les formalités de déclarations et de publications prévues par la loi du 1er juillet 1901 et par le décret du 16 août 1901
                            </p>

                            <p className="mb-12">
                            La présidente, Les secrétaires de séance, Anne MAZIRE, Edmée N’GATOUM Olivier MORIN 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-lg w-full py-10 " id="CA">
                    <h1 className="text-green-600 text-center font-semibold text-2xl mb-8" >Membres du C.A. et du Bureau élus le 16 mars 2019</h1>
                    <div className="flex items-center mb-8">
                        <div className="flex-1 ml-4 text-justify">

                            <p className="mb-5">
                            <span className="font-semibold">Président : </span>
                            Olivier Morin 
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Vice-Présidente :  </span>
                            Ilaria Madonna
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Secrétaire : </span>
                            Estelle Paint
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Trésorière : </span>
                            Valérie Guillouet
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Correspondante APIRP pour l'académie de Paris : </span>
                            Alexandra Martinez
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Correspondant APIRP pour l'académie de Créteil : </span>
                            Graziano Tassi
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Correspondante APIRP pour l'académie de Versailles : </span>
                            Charlotte Ostrovsky-Richard
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Secrétaire adjointe + correspondante “CPGE”: </span>
                            Gabrielle Kerleroux
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Trésorière adjointe  </span>
                            Patrizia Bisson
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Webmestre :  </span>
                            Maria Letizia Gabanini 
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Contact avec les Universités: </span>
                            Graziano Tassi
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Contact avec l'IIC et le Consulat : </span>
                            Olivier Morin - Ilaria Madonna 
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Redactrice en chef du Bulletin :  </span>
                            Charlotte Ostrovsky-Richard
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Directeur artistique du Bulletin: </span>
                            Francesco Forlani
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Présidents Honoraires :  </span>
                            Madame Anne Mazire
                            </p>

                            <p className="mb-5">
                            <span className="font-semibold">Membre honoraire: </span>
                            Ketty Zanforlini
                            </p>                            
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-lg w-full py-10 " id="bulletins">
                    <p className="my-5 font-mono">Si vous souhaitez commander l'un de ces bulletin vous pouvez envoyer un chèque de 4 € à l'ordre de l'APIRP à l'adresse suivante : Mme Valérie GUILLOUET - 10, rue Blondel - 92400 COURBEVOIE</p>
                    <h1 className="text-green-600  font-semibold text-2xl mb-8" >Le dernier bulletin 2018 - 2019 a été consacré à la cuisine italienne</h1>
                    <div className="flex items-center mb-8">
                        <div className="flex-1 ml-4 text-justify">
                            <ul>
                            <li>
                            <a className="mb-5 text-green-600" href="https://drive.google.com/file/d/1Iqk0kTEXSH5eEQyVRmXXjufPeTUmlwHX/view">
                            - Italie à la carte
                            </a>
                            </li>
                            <li>
                            <a className="mb-5 text-green-600" href="https://drive.google.com/file/d/1AhBJZCmjYmjvKCe58RbusWGJzaMnC7i6/view">
                            - Menu
                            </a>
                            </li>
                            <li>
                            <a className="mb-5 text-green-600" href="https://drive.google.com/file/d/1jCvJfoMlt2iwGd-ebsV9iu0X-jpdbr1n/view">
                            - Lettre aux adhérents
                            </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <h1 className="text-green-600  font-semibold text-2xl mb-8" > Ci-dessous les sommaires des derniers bulletins</h1>
                    <div className="flex items-center mb-8">
                        <div className="flex-1 ml-4 text-justify">
                            <ul>
                            <li>
                            <a className="mb-5 text-green-600" href="https://drive.google.com/file/d/18nlDFxe32kEFDDg4a_mYTsgHAW3uwTfR/view">
                            - Images d'Italie, images d'Europe
                            </a>
                            </li>
                            <li>
                            <a className="mb-5 text-green-600" href="https://drive.google.com/file/d/1J_ffMlPtrx7OyrkYuz1gO14r5PcK-ms6/view">
                            - Sommaire
                            </a>
                            </li>
                            <li>
                            <a className="mb-5 text-green-600" href="https://drive.google.com/file/d/1jCvJfoMlt2iwGd-ebsV9iu0X-jpdbr1n/view">
                            - Lettre aux adhérents
                            </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-lg w-full py-10 " id="contact">
                    <h1 className="text-green-600  font-semibold text-2xl mb-8" >Adresse mail: apirp.association@gmail.com</h1>
                    <div className="flex items-center mb-8">
                        <div className="flex-1 ml-4 text-justify">
                            <p className="mb-5">
                            Pour nous signaler tout changement de coordonnées personnelles (adresse de domicile, téléphone, courriel) ou professionnelles (changement d’établissement de rattachement, de statut, etc.), merci d’envoyer un courriel à : apirp.association@gmail.com.  
                            </p>
                            <p className="mb-5">Pour les renouvellement d’adhésion et pour les commandes de plaquettes pour la promotion de l’italien, nos adhérents peuvent aussi se servir des formulaires publiés dans les deux dernières page de notre bulletin annuel.                               
                            </p>
                            <h1 className="text-green-600 font-semibold text-2xl mb-8" >Facebook:</h1>
                            <p className="mb-5">
                            L'APIRP a élaboré une plaquette de promotion de la langue italienne à destination des parents et des élèves en situation de choix, publie un bulletin par an, réunit ses adhérents en assemblée générale au début et à la fin de chaque année scolaire et a également créé un site Internet et une page Facebook. 
                            </p>
                            <p className="mb-5">
                            Si vous souhaitez nous suivre :
                            </p>
                            <a className="font-bold text-blue-600 hover:text-blue-800" href="https://m.facebook.com/APIRP">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Connaitre