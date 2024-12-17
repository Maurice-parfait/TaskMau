import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom"; 
import { useGoogleLogin } from "@react-oauth/google"; // pour l'authentification avec Google
import MycarouselLogin from "../composent/CarouselLogin"; // le slide 
import { FcGoogle } from "react-icons/fc"; // icone google
import { SlEnergy } from "react-icons/sl"; // icone de logo app 

function Login() {
    // Gestion du formulaire connexion
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) =>{
        setValues({...values, [e.target.name]:[e.target.value]});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        try {
            const reponse = await fetch("https:/api/v1/utilisateur", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                bady: JSON.stringify(values),
            });
            if(!reponse.ok){
                Navigate("/Acceuil");
            }
        } catch (error) {
          console.error("erreur", error);  
        }
    }

    // l'authentification avc Google
    const login = useGoogleLogin({
        onSuccess: (response) => console.log(response),
        onError: () => console.log('Login Failed'),
    });
    return(
        <section className="h-auto sm:h-screen flex justify-center items-center font-Poppins">
            <div className="flex justify-center sm:gap-6 pt-10 md:p-8 lg:p-0 xl:w-[70%] ">
                <div className="px-8 sm:px-0 w-auto sm:w-96 sm:p-0 md:w-auto lg:w-96 xl:w-1/2 2xl:w-1/2">
                    <div className="mb-3">
                        <SlEnergy size={35} className="text-orange-400" />
                        <h1 className="text-2xl font-semibold mb-2 pt-4">Bienvenue sur <span className="text-orange-400">TaskMau</span></h1>
                        <p className="text-md"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus tempora 
                            recusandae ipsum dolorum quasi in, 
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label> <br />
                            <input
                                type="email" 
                                name="email" 
                                placeholder="Entrez votre email" 
                                required 
                                onChange={(e) => handleChange(e)}
                                className="w-full bg-orange-300/35 p-2 rounded-lg focus:outline-none focus:bg-orange-300/35" 
                                />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password">Password</label> <br />
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Entrez votre email" 
                                required 
                                onChange={(e) => handleChange(e)}
                                className="w-full bg-orange-300/40 p-2 border rounded-lg focus:outline-none focus:bg-orange-300/35" 
                            />

                            <div className="flex justify-end w-full">
                                <button className="text-orange-400 pt-2" type="button">
                                    Mot de passe oublie ?
                                </button>
                            </div>
                        </div>

                        <div className="mb-6">
                            <button className="py-2 bg-orange-500 text-slate-50 text-xl w-full rounded-md" type="submit">
                                <Link to="/Acceuil">
                                    Envoyer
                                </Link>
                            </button>
                        
                        </div>                  
                    </form>

                    <div className="flex items-center">
                        <div className="flex-grow border-t border-orange-300/35"></div>
                            <span className="px-1 text-md text-orange-400">Se connecter avec</span>
                        <div className="flex-grow border-t border-orange-300/35"></div>
                    </div>

                    <div className="mt-4">
                        <button
                            onClick={() => login()}
                            className="bg-black text-white font-semibold flex items-center w-full justify-center gap-3 py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                            <FcGoogle size={25} />
                            Continue avec Google
                        </button>

                    </div>

                    <div className="flex mt-4 justify-center">
                        <div>
                            <h1>Vous n'avez pas un compte ?</h1>
                        </div>

                        <Link className="text-orange-400 mx-4" to="/sinscrire">
                            S'inscrire
                        </Link>
                    </div>      
                </div>

                <div className="relative h-auto hidden md:block xl:w-1/2 2xl:w-1/2">
                    <div className="h-auto hidden absolute inset-0 backdrop-filter blur-[2.5px] rounded-lg bg-cover border bg-center bg-[url('./assets/images/bg-login.jpeg')]
                    w-96 sm:block md:w-auto xl:w-auto"> </div>

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

export default Login;