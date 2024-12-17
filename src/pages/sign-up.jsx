import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import MycarouselLogin from "../composent/CarouselLogin";
import { FcGoogle } from "react-icons/fc"; // icone google
import { SlEnergy } from "react-icons/sl"; // icone de logo app 

function Sinscrire() {
    // Gestion du formulaire d'inscription
    const [valuesform, setValuesForm] = useState({
        nom: "",
        prenom: "",
        email: "",
        Motdepasse: ""
    });
    
    const handleChange = (e)=>{
        setValuesForm({...valuesform, [e.target.name]:[e.target.value]});
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(valuesform);
        try {
            const reponse = await fetch("https:300/api/v1/utilisateur", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(valuesform),
            });
            if(!reponse.ok){
                Navigate("/Acceuil");
            }
        } catch (error) {
            console.error("Erreur de l'envois ", error);
        }
    }

    // L'authentification avec Google
    const signup = useGoogleLogin({
        onSuccess: (response) => console.log(response),
        onError: () => console.log('Login Failed'),
    })
    return(
        <section className="h-screen flex justify-center items-center font-Poppins">
        <div className="flex justify-center sm:gap-6 pt-10 md:pt-16 md:px-8 lg:p-0 xl:w-[70%]">
            <div className="px-8 sm:px-0 w-auto sm:w-96 sm:p-0 md:w-auto lg:w-96 xl:w-1/2 2xl:w-1/2">
                <div className="mb-3">
                    <SlEnergy size={35} className="text-orange-400" />
                    <h1 className="text-2xl font-semibold mb-2 pt-2">S'inscrire sur <span className="text-orange-400">TaskMau</span></h1>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        
                    </p>
                    
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="text">Nom</label> <br />
                        <input 
                            type="text" 
                            name="nom" 
                            placeholder="Entrez votre email" 
                            required 
                            value={valuesform.nom}
                            onChange={handleChange}
                            className="w-full bg-orange-300/35 p-2 rounded-lg focus:outline-none focus:bg-none" 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="text">Prenom</label> <br />
                        <input 
                            type="text" 
                            name="prenom" 
                            placeholder="Entrez votre email" 
                            required 
                            value={valuesform.prenom}
                            onChange={handleChange}
                            className="w-full bg-orange-300/35 p-2 rounded-lg focus:outline-none focus:bg-none" 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email</label> <br />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Entrez votre email" 
                            required
                            value={valuesform.email}
                            onChange={handleChange}
                            className="w-full bg-orange-300/35 p-2 rounded-lg focus:outline-none focus:bg-none" 
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password">Password</label> <br />
                        <input 
                            type="password" 
                            name="Motdepasse" 
                            placeholder="Entrez votre email" 
                            required 
                            value={valuesform.Motdepasse}
                            onChange={handleChange}
                            className="w-full bg-orange-300/40 p-2 border rounded-lg focus:outline-none focus:bg-none" 
                        />
                    </div>

                    <div className="mb-6">
                        <button className="py-2 bg-orange-500 text-slate-50 text-xl w-full rounded-md" type="submit"> Envoyer</button>
                    </div>   
                </form>

                {/*  */}

                <div className="flex items-center">
                    <div className="flex-grow border-t border-orange-300/35"></div>
                    <span className="px-1 text-md text-orange-400">S'inscrire</span>
                    <div className="flex-grow border-t border-orange-300/35"></div>
                </div>

                <div className="mt-4">
                    <button 
                        onClick={() => signup()}
                        type="button"
                        className="bg-black text-white font-semibold flex items-center w-full justify-center gap-3 py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                        <FcGoogle size={25} />
                        Se connecter avec google
                    </button>
                </div>

                <div className="flex mt-4 justify-center">
                    <div>
                        <h1>Vous avez déjà un compte ?</h1>
                    </div>

                    <Link className="text-orange-400 mx-4" to="/">
                        Se connecté
                    </Link>
                </div>
            </div>

            <div className="relative h-auto hidden md:block xl:w-1/2 2xl:w-1/2">
                <div className="h-auto hidden w-auto absolute inset-0 backdrop-filter blur-[3px] rounded-lg bg-cover border bg-center bg-[url('./assets/images/bg-login.jpeg')] 
                sm:block md:w-auto xl:w-auto"> </div>

                <div className="relative flex text-slate-50 h-full w-96">
                   <div className="self-end py-10 px-4">
                        < MycarouselLogin />
                   </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Sinscrire;