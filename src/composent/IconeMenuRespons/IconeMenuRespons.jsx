import React from "react";
import { IoMdMenu } from "react-icons/io";


function IconeMenuRespo ({AfficherMenuMd}) {
    

    return(
        
        <div>
            <button 
                type="button"
                onClick={AfficherMenuMd}
                className="hidden max-md:block max-md:text-4xl"
            >

            <IoMdMenu />
            </button>
        </div>
    )
    
};

export default IconeMenuRespo;