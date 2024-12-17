import React from "react";
import { useState } from "react";

// Composent 
import ResumeChart from "../composent/ResumechartDash"; // un composent 
import ProfilUser from "../composent/ProfilUser";
import MyFullCalendar from "../composent/FullCalendar";
import StatistiqueTask from "../composent/StatistiqueTask";
import AjouterTask from "../composent/FormAddTask";
import ListTask from "../composent/ListTask";
import TotalsTask from "../composent/TotalsTask";
import HistoriqueTask from "../composent/Historiques";
import DarkMode from "../composent/DarkMode";


// les icones 
import { SlEnergy } from "react-icons/sl"; // icone de logo app 
import { RxDashboard } from "react-icons/rx"; // icone de dashboard
import { GoTasklist } from "react-icons/go"; // icone de task
import { IoCalendarOutline } from "react-icons/io5"; // icone de Calendrier
import { TfiStatsUp } from "react-icons/tfi"; // icone de statistique
import { IoSettingsOutline } from "react-icons/io5"; // icone de Parametre
import { MdOutlineManageHistory } from "react-icons/md"; // icone de historique
import { MdOutlineTaskAlt } from "react-icons/md"; // icone resumer de  tache
import { GoPlus } from "react-icons/go"; // icone plus
import { IoIosNotifications } from "react-icons/io"; // icone de notification
import IconeMenuRespo from "../composent/IconeMenuRespons/IconeMenuRespons";



function Acceuil() {
    const VIEWS = {
        VIEW1 : "view1", // le view 1
        VIEW2 : "view2", // le view 2
        VIEW3: "view3" ,// le view 3
        VIEW4: "view4", // le view 4
        VIEW5: "view5", // le view 5
        VIEW6: "view6", // le view 6
    }
    const [activeview, SetActiveView] =  useState(VIEWS.VIEW1); // l'etat de view 

    // afficher le menu pour ajouter une taches 
    const [formTask, SetFormTask] = useState(false);
    const afficherformTask = ()=>{
        SetFormTask(true);
    };
    const Closeform = ()=>{
        SetFormTask(false);
    };


    // afficher le menu de md
    const [MenuMd, setMenuMd] = useState(false);
    const AfficherMenuMd = () => {
        console.log("ok Dans le bon")
        setMenuMd(true);
    }

    return(
        <main className="p-0 m-0 box-border bg-gray-100 font-Roboto dark:bg-black">
            <section className="grid grid-cols-Grid gap-0.5 max-md:grid-cols-1">
                <section className="max-md:w-full max-md:fixed max-md:inset-0 max-md:bg-slate-50 max-md:h-screen max-md:z-10
                max-md:hidden">

                    <section className="h-screen bg-white overflow-auto px-4 py-4
                    max-md:bg-blue-600 max-md:w-1/2 max-md:z-20">
                        <div className="flex justify-center">
                            <div>
                                <div className="flex justify-center">
                                    <SlEnergy size={35} className="text-orange-400 " />
                                </div>
                                <h1 className="text-2xl font-semibold dark:text-slate-50">Task<span className="text-orange-400">Mau</span></h1>
                            </div>
                        </div>

                        <div className="mt-16">
                            <div className="mb-4">
                                <button
                                onClick={ () => SetActiveView(VIEWS.VIEW1)}
                                className={activeview === VIEWS.VIEW1 ? "flex items-center bg-orange-200/30 p-2 w-full rounded-xl text-orange-400 dark:text-slate-50" : "flex items-center text-gray-600 p-2 w-full rounded-xl dark:text-slate-50"} 
                                type="button"
                                >
                                    <RxDashboard size={20} className="mx-2" />
                                    Dashboard
                                </button>
                            </div>

                            <div className="mb-4">
                                <button 
                                onClick={() => SetActiveView(VIEWS.VIEW2)}
                                className={activeview === VIEWS.VIEW2 ? "flex items-center bg-orange-200/30 p-2 w-full rounded-xl text-orange-400 dark:text-slate-50" : "flex items-center text-gray-600 p-2 w-full rounded-xl dark:text-slate-50" } type="button">
                                    <GoTasklist size={20} className="mx-2" />
                                    Liste de tache
                                </button>
                            </div>

                            <div className="mb-4">
                                <button
                                onClick={() => SetActiveView(VIEWS.VIEW3)}
                                className={activeview === VIEWS.VIEW3 ? "flex items-center bg-orange-200/30 p-2 w-full rounded-xl text-orange-400 dark:text-slate-50" : "flex items-center text-gray-600 p-2 w-full rounded-xl dark:text-slate-50"} type="button">
                                    <IoCalendarOutline size={20} className="mx-2" />
                                    Calendrier
                                </button>
                            </div>

                            <div className="mb-4">
                                <button
                                onClick={() => SetActiveView(VIEWS.VIEW4)}
                                className={activeview === VIEWS.VIEW4 ? "flex items-center bg-orange-200/30 p-2 w-full rounded-xl text-orange-400 dark:text-slate-50" : "flex items-center text-gray-600 p-2 w-full rounded-xl dark:text-slate-50"} type="button">
                                    <TfiStatsUp size={20} className="mx-2" />
                                    Statistique
                                </button>
                            </div>


                            <div className="mb-4">
                                <button
                                onClick={() => SetActiveView(VIEWS.VIEW6)}
                                className={activeview === VIEWS.VIEW6 ? "flex items-center bg-orange-200/30 p-2 w-full rounded-xl text-orange-400 dark:text-slate-50" : "flex items-center text-gray-600 p-2 w-full rounded-xl dark:text-slate-50"} type="button">
                                    <MdOutlineManageHistory size={20} className="mx-2" />
                                    Historique
                                </button>
                            </div>

                            <div className="mb-4">
                                <button
                                onClick={() => SetActiveView(VIEWS.VIEW5)} 
                                className={activeview === VIEWS.VIEW5 ? "flex items-center bg-orange-200/30 p-2 w-full rounded-xl text-orange-400 dark:text-slate-50" : "flex items-center text-gray-600 p-2 w-full rounded-xl dark:text-slate-50"} type="button">
                                    <IoSettingsOutline size={20} className="mx-2" />
                                    Paramettre
                                </button>
                            </div>

                            {/* Dark mode */}
                            {/* <div className="mt-36 2xl:mt-52">
                                < DarkMode />
                            </div> */}
                            
                        </div>
                    </section>
                </section>

                <section className="bg-white h-screen overflow-auto dark:bg-black max-md:w-full">

                    {/* VIEW 1 DASHBOARD */}
                    {activeview === "view1" && (
                        <>
                            <div className="flex items-center px-8 dark:bg-gray-900/25 dark:text-slate-50">
                                <div className="w-1/2">
                                    <h1 className="text-2xl font-semibold max-md:hidden">
                                        Hello 
                                        <span>
                                            Use Name
                                        </span> 
                                    </h1>

                                    {/* Responsive: L'iconne de Menu de ka responsiviter*/}
                                    <IconeMenuRespo onClick={AfficherMenuMd} /> 

                            
                                </div>

                                <div className="flex justify-end w-full">
                                    <div className="flex items-center">
                                        <ProfilUser />
                                    </div>
                                </div>
                            </div>
                            {/* <hr /> */}
                            <section className="p-2">
                                <section className="bg-gray-50 dark:text-slate-50 px-3 py-3 h-[89vh] overflow-auto scrollbar-none rounded-2xl dark:bg-gray-900/25">

                                    <section>
                                        <section className="flex items-center">
                                            <div className="w-1/2">
                                                <h1 className="text-3xl">Dashboard</h1>
                                                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing  </p>
                                            </div>

                                            <div className="flex justify-end w-1/2 px-4">
                                                <button 
                                                    type="button"
                                                    onClick={afficherformTask}
                                                    className="px-4 flex items-center text-sm py-2 rounded-full bg-orange-400 text-white"
                                                >
                                                    <GoPlus size={20} />
                                                    New Task
                                                </button>

                                                {/* {formTask && <AjouterTask />} */}
                                            </div>
                                        </section>

                                        {/* Total Task, En cours, Terminer, Annuler ! */}
                                        <section>
                                            < TotalsTask />
                                        </section>


                                        <section className="grid grid-cols-GridDash gap-4 mt-4 max-md:grid-cols-none">
                                            <div className="h-auto bg-white px-4 py-3 rounded-2xl dark:bg-gray-900/15">
                                                <div className="flex items-center dark:text-slate-50">
                                                    <div className="bg-gray-100 mx-2 p-1 rounded-full dark:text-black">
                                                        <MdOutlineTaskAlt size={25} />
                                                    </div>
                                                    <h1 className="text-lg font-medium">Resume de taches</h1>
                                                </div>

                                                <section className="mt-6 w-full h-64 rounded-lg xl:h-72">
                                                    <ResumeChart />
                                                </section>
                                            </div>

                                            <div className="h-80 bg-white px-4 py-3 rounded-2xl dark:bg-gray-900/15">
                                                <div className="flex items-center">
                                                    <div className="bg-gray-100 mx-2 p-1 rounded-full dark:text-black">
                                                        <IoCalendarOutline size={25} />
                                                    </div>
                                                    <h1 className="text-lg font-medium">Calendrier</h1>
                                                </div>
                                            </div>
                                        </section>
                                    </section>

                                </section>
                            </section>
                            
                            
                        </>
                    )}

                    {/* VIEW 2 LISTE DE TACHES*/}

                    { activeview === VIEWS.VIEW2 && ( 
                        <>
                            <div className="sticky top-0 py-2 px-2 dark:bg-gray-900/25 dark:text-white">
                                <div className="flex justify-center px-8 items-center rounded-2xl">
                                    <div className="w-1/2 flex gap-2">
                                        {/* Menu iconne de la responsiviter */}
                                        <IconeMenuRespo MenuMd={true} />

                                        {/* <h1 className="text-2xl font-semibold">Hello <span>Use Name</span></h1> */}
                                        <input 
                                            type="search" 
                                            name="" 
                                            id="" 
                                            placeholder="Entrez votre recherche"
                                            className="w-full py-2 px-3 rounded-xl text-black bg-gray-100 focus:outline-dotted focus:text-black"
                                        />
                                    </div>

                                    {/* profil user */}
                                    <div className="flex justify-end w-full items-center">
                                        <div>
                                            <div>
                                                <IoIosNotifications size={30} />
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <ProfilUser />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            {/* la liste de taches */}
                            <section className="px-2 mt-4">
                                <section className="bg-gray-50 px-3 py-3 h-[85vh] overflow-auto scrollbar-none rounded-2xl dark:bg-gray-900/25">
                                    
                                <div className="flex items-center">
                                    <div className="w-1/2">
                                        <h1 className="text-3xl dark:text-white">Listes des Taches</h1>
                                    </div>

                                    <div className="flex justify-end w-1/2 px-4">
                                        <button 
                                            type="button"
                                            onClick={afficherformTask}
                                            className="px-4 flex items-center text-sm py-2 rounded-full bg-orange-400 text-white"
                                        >
                                            <GoPlus size={20} />
                                            New Task
                                        </button>
                                    </div>
                                </div>
                                < ListTask />
                                </section>
                            </section>
                        </>
                    )}

                    {/* VIEW 3 CALENDRIER */}

                    {activeview === VIEWS.VIEW3 && (
                        <>
                            <div className="flex items-center px-8 dark:bg-gray-900/25 dark:text-white">
                                <div className="w-1/2 flex items-center gap-2">
                                    {/* Menu de la Responsiviter */}

                                    < IconeMenuRespo />
                                    {/* <h1 className="text-2xl font-semibold">Hello <span>Use Name</span></h1> */}
                                    <h1 className="text-3xl">Calendrier</h1>
                                </div>

                                <div className="flex justify-end w-full">
                                    <ProfilUser />
                                </div>
                            </div>
                            {/* <hr /> */}

                            <section className="px-2">
                                <section className="bg-gray-50 px-4 h-[87vh] mt-4 rounded-2xl py-2 overflow-auto scrollbar-none dark:bg-gray-900/25">
                                   
                                    < MyFullCalendar />
                                    
                                </section>
                            </section>
                        </>
                    )}

                    {/* VIEW 4 STATISTIQUE  */}

                    {activeview === VIEWS.VIEW4 && (
                       <>
                            <div className="sticky top-0 dark:bg-gray-900/25 dark:text-white">
                                <div className="flex justify-center px-8 items-center py-1">
                                    <div className="w-1/2">
                                        {/* <h1 className="text-2xl font-semibold">Hello <span>Use Name</span></h1> */}
                                        <h1 className="text-4xl">Statistique</h1>
                                    </div>

                                    <div className="flex justify-end w-full">
                                        <ProfilUser />
                                    </div>
                                </div>
                                {/* <hr/> */}
                            </div>
                            
                            {/* la partie statistique et composent */}
                            <section className="px-3 py-2">
                                <section className="bg-gray-50 px-4 h-[87vh] rounded-2xl py-2 overflow-auto scrollbar-none dark:bg-gray-900/15" >
                                    < StatistiqueTask/>
                                </section>
                            </section>

                            
                       </>
                    )}


                    {/* VIEW HISTORIQUE */}

                    {activeview === VIEWS.VIEW6 && (
                        <>
                            <div className="sticky top-0 dark:bg-gray-900/25 dark:text-white">
                                <div className="flex justify-center px-8 py-1 items-center">
                                    <div className="w-1/2">
                                        <h1 className="text-4xl">Historique</h1>
                                    </div>

                                    <div className="flex justify-end w-full">
                                        <ProfilUser />
                                    </div>
                                </div>
                                {/* <hr /> */}
                            </div>

                            <section className="px-3 py-2">
                                <section className="bg-gray-50 px-4 h-[87vh] rounded-2xl py-2 overflow-auto scrollbar-none dark:bg-gray-900/15 dark:text-white" >
                                    < HistoriqueTask />
                                </section>
                            </section>
                        </>
                    )}

                    {/* VIEW 5 PARAMETRE */}

                    {activeview === VIEWS.VIEW5 && (
                        <>
                            <div className="sticky top-0 dark:bg-gray-900/25 dark:text-white">
                                <div className="flex justify-center items-center px-8 py-1">
                                    <div className="w-1/2">
                                        <h1 className="text-4xl"> Historique</h1>
                                    </div>

                                    <div className="flex justify-end w-full">
                                        <ProfilUser />
                                    </div>
                                </div>
                                {/* <hr /> */}
                            </div>

                            <section className="px-3 py-2">
                                <section className="bg-gray-50 px-4 h-[87vh] rounded-2xl py-2 overflow-auto scrollbar-none dark:bg-gray-900/15 dark:text-white" >
                                    <div className="flex items-center">
                                        <div className="w-1/2">
                                            <h1 className="text-3xl">Listes des Notes</h1>
                                        </div>

                                        <div className="flex justify-end w-1/2 px-4">
                                            <button 
                                                type="button"
                                                className="px-4 flex items-center text-sm py-2 rounded-full bg-orange-400 text-white"
                                            >
                                                <GoPlus size={20} />
                                                New Notes
                                            </button>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </>
                    )}

                    
                </section>
            </section>

            {/* le composent d'ajouter les taches  */}
            <section className="">
                {/* < AjouterTask /> */}
                {formTask && < AjouterTask onClose={Closeform} />}
            </section>
        </main>

        
    )
}

export default Acceuil;