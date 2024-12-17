import React, { useEffect, useState } from "react";

function DarkMode(){
    const [DarkMode, setDarkMode] = useState(localStorage.getItem('darkmode' === 'true'));

    // fonction pour activer le mode dark
    const AfficherDarkMode = () => {
        setDarkMode(true);
    }
    // fonction pour desactiver le mode dark
    const DesactiverDarkMode = () => {
        setDarkMode(false);
    }

    useEffect(()=> {
        if (DarkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [DarkMode]);
    
    return (
        <div className="flex items-center gap-1 border py-1 px-1 rounded-md">
            <button 
                type="button"
                onClick={DesactiverDarkMode}
                className="border px-2 py-2 rounded-xl w-full bg-orange-200 "
            >
                Ligth
            </button>

            <button 
                type="button"
                onClick={AfficherDarkMode}
                className="border px-2 py-2 rounded-xl w-full bg-black text-slate-50"
            >
                Dark
            </button>
        </div>
    )
}

export default DarkMode;