import React from "react";
import Banner from "./Banner"

import Act1 from '../assets/act1.PNG';
import Act2 from '../assets/act2.PNG';
import Act3 from '../assets/act3.PNG';

const messages = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      sujet: 'Dernière sortie Cinéma',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      sujet: 'Nouvelle adresse Ambassade',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    },
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      sujet: 'Festival',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
  ]

const Divers = () => {
    const newHeading ="Divers";

    return(
        <>
         <Banner heading={newHeading} />
         <div className=" flex hidden 2xl:block  fixed">  
            <div className="w-3/4 mt-10 bg-green-600 pr-10 rounded-br-3xl font-montserrat text-white">
                <div className="">
                    <h2 className="text-lg font-semibold px-3 mb-4">Sections</h2>
                    <ul>
                        <li><a href="#" className="block px-3">Actualités</a></li>
                        <li><a href="#lien" className="block px-3">Liens et Contacts</a></li>
                        <li><a href="#forum" className="block px-3">Forum</a></li>
                    </ul>
                </div>
            </div>
        </div>           
            <div className="flex flex-col items-center font-montserrat ">
            <h1 className="text-green-600  font-semibold text-3xl pt-10 mb-8" >Actualités</h1>
            <div className="flex max-w-screen-lg justify-center grid grid-cols-3 gap-4" id="actualites">
                <div className="border bg-slate-200 rounded-lg p-3" >
                    <div><img className="w-96 h-24 mb-5" src={Act1} alt="ERR" /> </div>
                    <div>La 5ème édition de la «Semaine de la Cuisine Italienne dans le Monde» se déroulera du lundi 23 novembre au dimanche 29 novembre 2020, et pour la France se poursuivra tout le mois de décembre. </div>
                </div>
                <div className=" border bg-slate-200  rounded-lg p-3">
                    <div><img className="w-96 h-24 mb-5" src={Act2} alt="ERR" /> </div>
                    <div>
                    Sortie au cinéma en France à partir du 5 février de "Un soir en Toscane" ("Dolce fine giornata"),  un film où le réalisateur polonais Jacek Borcuch explore l’identité européenne et la montée du nationalisme.
                    </div>
                </div>
                <div className=" border bg-slate-200  rounded-lg p-3">
                    <div><img className="w-96 h-24 mb-5" src={Act3} alt="ERR" /> </div>
                    <div>Les 10 et 11 octobre au Pavillon Cambon, transformé pour l'occasion en une galerie d'art, s'est tenue la 8ème édition du Barilla Pasta World Championship, pour la première fois en France.</div>
                </div>
            </div>
            <h1 className="text-green-600 mt-10 font-semibold text-3xl mb-10">Liens et contacts</h1>
            <div className="max-w-screen-lg w-full py-10" id="lien">       
                <div className="flex items-center mb-8">
                    <div className="flex-1 ml-4 text-justify">
                            <h2 className="mb-12 text-green-600 font-bold text-lg">Inspection</h2>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                INSPECTRICE GÉNÉRALE
                                </h2>
                                <p className="mb-3"> 
                                Madame Antonella DURAND
                                </p>
                                <p className="mb-3"> 
                                Adresse : 110 rue de grenelle 75357 Paris SP 07
                                </p>
                                <p className="mb-3"> 
                                Tél : 01 55 55 10 10
                                </p>
                                <p className="mb-3"> 
                                Courriel : antonella.durand@education.gouv.fr
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                IA – IPR académie de Paris
                                </h2>
                                <p className="mb-3"> 
                                Madame Odile PAGLIARI
                                </p>
                                <p className="mb-3"> 
                                Adresse : Rectorat de l’Académie de Paris, 12 boulevard d’Indochine 75019 Paris
                                </p>
                                <p className="mb-3"> 
                                Courriel : odile.pagliari@ac-paris.fr
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                IA – IPR académie de Créteil
                                </h2>
                                <p className="mb-3"> 
                                Madame Marialuisa CUTINO
                                </p>
                                <p className="mb-3"> 
                                Adresse : Rectorat de l’académie de Créteil, 4 rue Georges Enesco 94010 Creteil cédex
                                </p>
                                <p className="mb-3"> 
                                Courriel : marialuisa.cutino@ac-creteil.fr
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                IA – IPR académie de Versailles
                                </h2>
                                <p className="mb-3"> 
                                Monsieur Frédéric CHERKI
                                </p>
                                <p className="mb-3"> 
                                Adresse : Rectorat de l’académie de Versailles, Secrétariat des IA-IPR, 3 boulevard de Lesseps 78017 Versailles cedex
                                </p>
                                <p className="mb-3"> 
                                Tél : 01 30 83 40 43
                                </p>
                                <p className="mb-3"> 
                                Courriel : frederic.cherki@ac-versailles.fr
                                </p>
                                <p className="mb-3"> 
                                </p>
                            </div>
                            <h2 className="mb-12 text-green-600 font-bold text-lg">Associations pour les professeurs de langues</h2>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                FNAI (Fédération Nationale des Associations d’Italianistes)
                                </h2>
                                <p className="mb-3">
                                Présidente : Mme  Josette JUANICO 
                                </p>
                                <p className="mb-3"> 
                                Adresse : 37, rue Pierre Dupré
                                </p>
                                <p className="mb-3">
                                13008 MARSEILLE 
                                </p>
                                <p className="mb-3"> 
                                Courriel : fnaiprofital@gmail.com
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                APLV (Association des professeurs des Langues Vivantes)
                                </h2>
                                <p className="mb-3">
                                Adresse : 19 rue de la Glacière, 75013 PARIS 
                                </p>
                                <p className="mb-3"> 
                                Tél : 01 47 07 94 82
                                </p>
                                <p className="mb-3"> 
                                Courriel : aplv.lm@gmail.com
                                </p>
                                <p className="mb-3"> 
                                Site Internet : http://www.aplv-languesmodernes.org/
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                S.I.E.S. (Syndicat Indépendant Enseignement Secondaire)
                                </h2>
                                <p className="mb-3"> 
                                Site internet : http://www.sies.fr/
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                Le portail qui recense les associations franco-italiennes en île-de-France :
                                </h2>
                                <p className="mb-3"> 
                                http://www.associazioni-italiane.org/
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                Les sites des autres associations des professeurs d’italien 
                                </h2>
                                <p className="mb-3"> 
                                Académie des Alpes Maritimes : API06
                                </p>
                                <p className="mb-3"> 
                                http://www.api06.com/
                                </p>
                                <p className="mb-3"> 
                                Académie de Grénoble : APIAG
                                </p>
                                <p className="mb-3"> 
                                http://apiag.wifeo.com/
                                </p>
                            </div>
                            <h2 className="mb-12 text-green-600 font-bold text-lg">Organismes officiels (Coté France)</h2>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                C.I.E.P
                                </h2>
                                <p className="mb-3"> 
                                Le centre international d’études pédagogiques est l’organisme référent pour les différents programmes européens de mobilités (Léonardo, Coménius, Jules Vernes), pour la nomination des assistants de langues et pour les stages de formation et les séminaires destinés aux enseignants.
                                </p>
                                <p className="mb-3"> 
                                Adresse : Centre international d’études pédagogiques,
                                </p>
                                <p className="mb-3"> 
                                1 avenue Léon-Journault , 92318 Sèvres cedex
                                </p>
                                <p className="mb-3"> 
                                Tél. : 01 45 07 60 00
                                </p>
                                <p className="mb-3"> 
                                Fax : 01 45 07 60 01
                                </p>
                                <p className="mb-3"> 
                                Site Internet : http://www.ciep.fr/
                                </p>    
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                EDUSCOL
                                </h2>
                                <p className="mb-3"> 
                                Le site pour les professionnels de l’enseignement. Il offre l’accès aux programmes des langues vivantes du primaire au lycée et de nombreux outils de travail officiels.
                                </p>
                                <p className="mb-3"> 
                                Site Internet : http://eduscol.education.fr/
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                EMILANGUES
                                </h2>
                                <p className="mb-3"> 
                                Le site d’accompagnement pour les sections européennes. Vous y retrouverez les textes officiels et de nombreuses ressources pédagogiques pour l’italien discipline linguistique et pour l’italien DNL (discipline non linguistique aussi). Cliquant sur l’onglet « ressources pédagogiques » vous pourrez accéder aux sitographies proposées par le site : il s’agit de listes de liens Internet très complètes.
                                </p>
                                <p className="mb-3"> 
                                Site Internet : http://www.emilangues.education.fr/
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                Lien direct vers un exemple de sitographie pour les musée et les arts italiens : http://www.emilangues.education.fr/ressources-pedagogiques/sitographies/discipline-linguistique/arts-et-musees-en-italien
                                </h2>
                            </div>
                            <h2 className="mb-12 text-green-600 font-bold text-lg">Organismes officiels (Coté Italie)</h2>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                Ambassade
                                </h2>
                                <p className="mb-3">
                                Ambasciata d’Italia a Parigi 
                                </p>
                                <p className="mb-3"> 
                                51, rue de Varenne
                                </p>
                                <p className="mb-3">
                                75343 PARIS CEDEX 07    
                                </p>
                                <p className="mb-3">
                                Tel +33 1 49 54 03 00 
                                </p>
                                <p className="mb-3"> 
                                Fax +33 1 49 54 04 10
                                </p>
                                <p className="mb-3"> 
                                e-mail : ambasciata.parigi@esteri.it
                                </p>
                                <p className="mb-3"> 
                                site Internet : http://www.ambparigi.esteri.it/ambasciata_parigi
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                Consulat
                                </h2>
                                <p className="mb-3"> 
                                Consolato Generale d’Italia a Parigi
                                </p>
                                <p className="mb-3"> 
                                5, bd Emile Augier Paris
                                </p>
                                <p className="mb-3"> 
                                Telefono : 0144304700 ; Fax : 01 - 45258750, (00331-45258750) 
                                </p>
                                <p className="mb-3"> 
                                Site Internet : http://www.consparigi.esteri.it/Consolato_Parigi
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                Institut Culturel Italien
                                </h2>
                                <p className="mb-3"> 
                                73, rue de Grenelle 75007 Paris 
                                </p>
                                <p className="mb-3"> 
                                Tél. 33 (0)1 44 39 49 39 - Fax 33 (0) 1 42 22 37 88 
                                </p>
                                <p className="mb-3"> 
                                Courriel : iicparigi@esteri.it 
                                </p>
                                <p className="mb-3"> 
                                Site Internet : http://www.iicparigi.esteri.it/IIC_Parigi
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                La bibliothéque de l’Institut Culturel Italien, Italo Calvino
                                </h2>
                                <p className="mb-3"> 
                                73, rue de Grenelle 75007 Paris 
                                </p>
                                <p className="mb-3"> 
                                Courriel : biblioteca.iic.parigi@esteri.it  
                                </p>
                                <p className="mb-3"> 
                                Tél. : 01 44 39 49 25
                                </p>
                            </div>
                            <div className="mb-12">
                                <h2 className="mb-5 font-semibold">
                                MIUR, Ministero della pubblica istruzione dell’università e della ricerca Vous y retrouvez, entre autre, le calendrier scolaire et les programmes officiels :
                                </h2>
                                <p className="mb-3"> 
                                http://www.istruzione.it/
                                </p>
                            </div>
                            <h2 className="mb-12 text-green-600 font-bold text-lg">Institut Culturel Italien - Paris</h2>
                            <div className="mb-12">
                                <p className="mb-3"> 
                                L'Institut culturel italien est un organisme du Ministère italien des Affaires Étrangères chargé de diffuser et de promouvoir la langue et la culture italiennes. Des multiples initiatives culturelles qui ont pour thème l'Italie, sa vie culturelle, artistique et scientifique sont organisées à l'Institut.
                                </p>
                                <p className="mb-3">
                                L'Hôtel de Galliffet abrite également la bibliothèque  "Italo Calvino" d'environ 50 000 documents, dont 5 500 titres de matériel audiovisuel. 
                                </p>
                                <p className="mb-3"> 
                                Adresse: 50, rue de Varenne - 75007 Paris 
                                </p>
                            </div>
                            <h2 className="mb-12 text-green-600 font-bold text-lg">APEsabac</h2>
                            <div className="mb-12">
                                <p className="mb-3"> 
                                L'APEsabac  a été créée depuis le 10 mars 2018, la cotisation est fixée à  22€.
                                </p>
                                <p className="mb-3"> 
                                Le bureau se constitue ainsi: 
                                </p>
                                <p className="mb-3"> 
                                Présidente : Agnès Pallini-Martin (Histoire-Géographie en langue italienne)
                                </p>
                                <p className="mb-3"> 
                                Vice Présidente : Alexandra Rainon-Martinez (Littérature italienne en langue italienne)
                                </p>
                                <p className="mb-3">  
                                Secrétaire : Camille Plaze (Histoire-Géographie en langue italienne)
                                </p>
                                <p className="mb-3">
                                Vice-secrétaire : Julie Delamard (Histoire-Géographie en langue italienne) 
                                </p>
                                <p className="mb-3"> 
                                Trésorière : Kathleen Carthy  (Littérature italienne en langue italienne)
                                </p>
                                <p className="mb-3"> 
                                Vice-trésorier : Gwenael Le Lu (Histoire-Géographie en langue italienne)
                                </p>
                                <p className="mb-3"> 
                                Une plateforme EDMODO a été créée au profit des adhérents . 
                                </p>
                                <p className="mb-3"> 
                                Pour joindre l'association vous pouvez envoyer un mail à l'adresse suivante: profesabac@googlegroups.com
                                </p>
                                <p className="mb-3"> 
                                Page Facebook:  https://www.facebook.com/pg/apesabac/posts/?ref=page_internal
                                </p>
                            </div>
                    </div>
                </div>
            </div>
            <h1 className="text-green-600 mt-10 font-semibold text-3xl mb-10">Forum</h1>
            <div className="max-w-screen-lg w-full pt-10 mb-4" id="forum">
            <button className="bg-green-500 border-green-500 hover:text-green-700 mb-5 mr-3 p-3">Nouvelle discussion</button>
            <button className="bg-green-500 border-green-500 hover:text-green-700 mb-5 p-3">Rafraichir</button>           
            <ul role="list" className="bg-transparent rounded-2xl">
                {messages.map((person) => (
                    <li key={person.email} className="flex justify-between gap-x-6 shadow-lg  hover:bg-green-500 border-2 rounded-2xl py-6 mb-1">
                    <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-700">{person.email}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{person.sujet}</p>
                    </div>
                    </li>
                        ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Divers