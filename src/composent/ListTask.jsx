import React from "react";
// les iconnes 
import { GoPlus } from "react-icons/go"; // icone plus
import { HiOutlineDotsVertical } from "react-icons/hi";

function ListTask() {
    return(
        <section>
            
            

            <div className="mt-6 flex flex-wrap gap-8 max-md:gap-2 max-md:grid max-md:grid-cols-2">
                <div className="border py-2 rounded-2xl w-80 bg-white max-md:w-auto dark:bg-gray-900/50 dark:text-slate-50 dark:border-transparent">
                    
                    <div className="px-3 flex">   
                        <div className="w-1/2">
                            {/* <MdOutlineTaskAlt size={25} className="" /> */}
                            <h1 className="bg-orange-200/35 w-20 px-1.5 py-1 rounded-xl text-sm">Terminer</h1>
                        </div>
                        
                        <div className="w-1/2 flex justify-end items-center">
                            <button 
                                type="button"
                                className="py-1 hover:bg-red-300 hover:rounded-xl"
                            >
                                <HiOutlineDotsVertical size={20} />
                            </button>
                        </div>

                        {/*  */}

                        {/* <div className="top-4 relative border py-2">
                            <button type="button">
                                Supprimer
                            </button>
                        </div> */}
                    </div>

                    <div className="py-4 px-3">
                        <h1 className="text-2xl">Titre de Task</h1>
                    </div>
                    
                    <div className="pb-2 px-3 text-slate-400">
                        <h1 className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad, 
                            ab debitis asperiores fuga minus quae distinctio  
                        </h1>
                    </div>

                    <hr />

                    <div className="px-3 py-3">
                        <h1 className="text-lg">12:00 AM - 14:00AM</h1>
                    </div>
                </div>

                <div className="border py-2 rounded-2xl w-80 bg-white max-md:w-auto dark:bg-gray-900/50 dark:text-slate-50 dark:border-none">
                    <div className="px-3 flex">   
                        <div className="w-1/2">
                            {/* <MdOutlineTaskAlt size={25} className="" /> */}
                            <h1 className="bg-orange-200/35 w-20 px-1.5 py-1 rounded-xl text-sm">Terminer</h1>
                        </div>
                        
                        <div className="w-1/2 flex justify-end items-center">
                            <button 
                                type="button"
                                className="py-1 hover:bg-red-300 hover:rounded-xl"
                            >
                                <HiOutlineDotsVertical size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="py-4 px-3">
                        <h1 className="text-2xl">Titre de Task</h1>
                    </div>
                    
                    <div className="pb-2 px-3 text-slate-400">
                        <h1 className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad, 
                            ab debitis asperiores fuga minus quae distinctio  
                        </h1>
                    </div>

                    <hr />

                    <div className="px-3 py-3">
                        <h1 className="text-lg">12:00 AM - 14:00AM</h1>
                    </div>
                </div>

                <div className="border py-2 rounded-2xl w-80 bg-white max-md:w-auto dark:bg-gray-900/50 dark:text-slate-50 dark:border-none">
                    <div className="px-3 flex">   
                        <div className="w-1/2">
                            {/* <MdOutlineTaskAlt size={25} className="" /> */}
                            <h1 className="bg-orange-200/35 w-20 px-1.5 py-1 rounded-xl text-sm">Terminer</h1>
                        </div>
                        
                        <div className="w-1/2 flex justify-end items-center">
                            <button 
                                type="button"
                                className="py-1 hover:bg-red-300 hover:rounded-xl"
                            >
                                <HiOutlineDotsVertical size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="py-4 px-3">
                        <h1 className="text-2xl">Titre de Task</h1>
                    </div>
                    
                    <div className="pb-2 px-3 text-slate-400">
                        <h1 className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad, 
                            ab debitis asperiores fuga minus quae distinctio  
                        </h1>
                    </div>

                    <hr />

                    <div className="px-3 py-3">
                        <h1 className="text-lg">12:00 AM - 14:00AM</h1>
                    </div>
                </div>

                <div className="border py-2 rounded-2xl w-80 bg-white max-md:w-auto dark:bg-gray-900/50 dark:text-slate-50 dark:border-none">
                    <div className="px-3 flex">   
                        <div className="w-1/2">
                            {/* <MdOutlineTaskAlt size={25} className="" /> */}
                            <h1 className="bg-orange-200/35 w-20 px-1.5 py-1 rounded-xl text-sm">Terminer</h1>
                        </div>
                        
                        <div className="w-1/2 flex justify-end items-center">
                            <button 
                                type="button"
                                className="py-1 hover:bg-red-300 hover:rounded-xl"
                            >
                                <HiOutlineDotsVertical size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="py-4 px-3">
                        <h1 className="text-2xl">Titre de Task</h1>
                    </div>
                    
                    <div className="pb-2 px-3 text-slate-400">
                        <h1 className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad, 
                            ab debitis asperiores fuga minus quae distinctio  
                        </h1>
                    </div>

                    <hr />

                    <div className="px-3 py-3">
                        <h1 className="text-lg">12:00 AM - 14:00AM</h1>
                    </div>
                </div>

                <div className="border py-2 rounded-2xl w-80 bg-white max-md:w-auto dark:bg-gray-900/50 dark:text-slate-50 dark:border-none">
                    <div className="px-3 flex">   
                        <div className="w-1/2">
                            {/* <MdOutlineTaskAlt size={25} className="" /> */}
                            <h1 className="bg-orange-200/35 w-20 px-1.5 py-1 rounded-xl text-sm">Terminer</h1>
                        </div>
                        
                        <div className="w-1/2 flex justify-end items-center">
                            <button 
                                type="button"
                                className="py-1 hover:bg-red-300 hover:rounded-xl"
                            >
                                <HiOutlineDotsVertical size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="py-4 px-3">
                        <h1 className="text-2xl">Titre de Task</h1>
                    </div>
                    
                    <div className="pb-2 px-3 text-slate-400">
                        <h1 className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad, 
                            ab debitis asperiores fuga minus quae distinctio  
                        </h1>
                    </div>

                    <hr />

                    <div className="px-3 py-3">
                        <h1 className="text-lg">12:00 AM - 14:00AM</h1>
                    </div>
                </div>

                <div className="border py-2 rounded-2xl w-80 bg-white max-md:w-auto dark:bg-gray-900/50 dark:text-slate-50 dark:border-none">
                    <div className="px-3 flex">   
                        <div className="w-1/2">
                            {/* <MdOutlineTaskAlt size={25} className="" /> */}
                            <h1 className="bg-orange-200/35 w-20 px-1.5 py-1 rounded-xl text-sm">Terminer</h1>
                        </div>
                        
                        <div className="w-1/2 flex justify-end items-center">
                            <button 
                                type="button"
                                className="py-1 hover:bg-red-300 hover:rounded-xl"
                            >
                                <HiOutlineDotsVertical size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="py-4 px-3">
                        <h1 className="text-2xl">Titre de Task</h1>
                    </div>
                    
                    <div className="pb-2 px-3 text-slate-400">
                        <h1 className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad, 
                            ab debitis asperiores fuga minus quae distinctio  
                        </h1>
                    </div>

                    <hr />

                    <div className="px-3 py-3">
                        <h1 className="text-lg">12:00 AM - 14:00AM</h1>
                    </div>
                </div>

                <div className="border py-2 rounded-2xl w-80 bg-white max-md:w-auto dark:bg-gray-900/50 dark:text-slate-50 dark:border-none">
                    <div className="px-3 flex">   
                        <div className="w-1/2">
                            {/* <MdOutlineTaskAlt size={25} className="" /> */}
                            <h1 className="bg-orange-200/35 w-20 px-1.5 py-1 rounded-xl text-sm">Terminer</h1>
                        </div>
                        
                        <div className="w-1/2 flex justify-end items-center">
                            <button 
                                type="button"
                                className="py-1 hover:bg-red-300 hover:rounded-xl"
                            >
                                <HiOutlineDotsVertical size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="py-4 px-3">
                        <h1 className="text-2xl">Titre de Task</h1>
                    </div>
                    
                    <div className="pb-2 px-3 text-slate-400">
                        <h1 className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad, 
                            ab debitis asperiores fuga minus quae distinctio  
                        </h1>
                    </div>

                    <hr />

                    <div className="px-3 py-3">
                        <h1 className="text-lg">12:00 AM - 14:00AM</h1>
                    </div>
                </div>

                <div className="border py-2 rounded-2xl w-80 bg-white max-md:w-auto dark:bg-gray-900/50 dark:text-slate-50 dark:border-none">
                    <div className="px-3 flex">   
                        <div className="w-1/2">
                            {/* <MdOutlineTaskAlt size={25} className="" /> */}
                            <h1 className="bg-orange-200/35 w-20 px-1.5 py-1 rounded-xl text-sm">Terminer</h1>
                        </div>
                        
                        <div className="w-1/2 flex justify-end items-center">
                            <button 
                                type="button"
                                className="py-1 hover:bg-red-300 hover:rounded-xl"
                            >
                                <HiOutlineDotsVertical size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="py-4 px-3">
                        <h1 className="text-2xl">Titre de Task</h1>
                    </div>
                    
                    <div className="pb-2 px-3 text-slate-400">
                        <h1 className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad, 
                            ab debitis asperiores fuga minus quae distinctio  
                        </h1>
                    </div>

                    <hr />

                    <div className="px-3 py-3">
                        <h1 className="text-lg">12:00 AM - 14:00AM</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ListTask;