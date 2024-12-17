import React, { useState } from "react";

// Les icones 
import { FiEdit } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";


function AjouterTask({onClose}) {
    const [formValuesTask, setFormValuesTask] = useState({
        titre: '',
        date: '',
        timeDebut: '',
        timeFin: '',
        description: ''
    });

    const handleChange = (e) =>{
        setFormValuesTask({...formValuesTask, [e.target.name]:[e.target.value]});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValuesTask);
    }
    
    return(
        <section className="absolute inset-0 h-screen z-10">
            <div className="flex justify-center items-center h-screen bg-black/40">
                <div className="bg-white py-2 rounded-lg w-[30%] ">
                    <div className="flex items-center">
                        <div className="px-4 py-2 w-1/2">
                            <h1 className="text-xl">Ajouter une Taches </h1>
                        </div>

                        <div className="flex justify-end w-1/2">
                            <button 
                                type="button"
                                onClick={onClose}
                            >
                                <FiEdit size={20} className="mr-4"/> 
                            </button>
                        </div>
                    </div>
                    <hr />

                    <form 
                        onSubmit={handleSubmit}
                        className="px-4 py-3 mt-3" 
                    >
                        <div className="flex items-center mb-4">
                            <div className="flex items-center text-gray-600">
                                <FiEdit size={20} className="mr-4"/>
                                <label htmlFor="text">Titre</label>
                            </div>

                            <div className="ml-4 w-full">
                                <input 
                                    type="text"
                                    name="titre"
                                    placeholder="Titre du task"
                                    required
                                    onChange={(e)=> handleChange(e)}
                                    className="border rounded-md px-2 py-2 w-full focus:outline-orange-300" 
                                />
                            </div>
                        </div>

                        <div className="flex items-center mb-4">
                            <div className="flex items-center text-gray-600">
                                <CiCalendarDate size={25} className="mr-4" />
                                <label htmlFor="date">Date</label>
                            </div>

                            <div className="ml-4 w-full">
                                <input 
                                    type="date"
                                    name="date"
                                    placeholder="la date"
                                    required
                                    onChange={(e)=> handleChange(e)}
                                    className="border rounded-md px-2 py-2 w-full focus:outline-orange-300" 
                                />
                                
                            </div>
                        </div>

                        <div className="flex items-center mb-4">
                            <div className="flex items-center text-gray-600">
                                <MdOutlineAccessTime size={25} className="mr-4" />
                                <label htmlFor="time">Time</label>
                            </div>

                            <div className="ml-4 w-full flex items-center">
                                <input 
                                    type="time"
                                    placeholder="Titre du task"
                                    name="timeDebut"
                                    required
                                    onChange={(e)=> handleChange(e)}
                                    className="border rounded-md px-2 py-2 w-full" 
                                />
                                <div className="mx-4">
                                    -
                                </div>
                                <input 
                                    type="time"
                                    name="timeFin"
                                    placeholder="Titre du task"
                                    required 
                                    onChange={(e)=> handleChange(e)}
                                    className="border rounded-md px-2 py-2 w-full"
                                />  
                            </div>
                        </div>


                        <div className="flex mb-4">
                            <div className="flex items-center text-gray-600">
                                <MdOutlineDescription size={25} className="mr-4" />
                                <label htmlFor="desciption">Description</label>
                            </div>

                            <div className="ml-4 w-full">
                                <textarea 
                                    name="description" 
                                    id=""
                                    rows={4}
                                    required
                                    onChange={(e)=> handleChange(e)}
                                    className="border rounded-md px-2 py-1 w-full scrollbar-none focus:outline-orange-300" 
                                >
                                   
                                </textarea> 
                            </div>
                        </div>
                        
                        {/* <hr /> */}
                        <div className="flex justify-end items-center w-full">
                            <button 
                                type="button"
                                className="border px-3 py-2 rounded-lg"
                            >
                                Annuler
                            </button>

                            <button 
                                type="submit"
                                className="border px-3 py-2 rounded-lg ml-4 bg-orange-400 text-white"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AjouterTask;