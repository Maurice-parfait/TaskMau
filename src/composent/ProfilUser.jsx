import React from "react";

function ProfilUser() {
    return(
        <div className="flex items-center cursor-pointer">
            <div className="">
                <img className="max-h-14 max-w-14 rounded-full" src="./src/assets/images/avatar.png" alt="" />
            </div>

            <div className="ml-2">
                <h1 className="font-semibold text-sm">Miema Maurice</h1>
                <h2 className="text-gray-500 text-sm">mauricemiema90@gmail.com</h2>
            </div>
        </div>

        
    )
}

export default ProfilUser;