import React from "react";

function TotalsTask() {

    return(
        <section className="mt-4 flex justify-between gap-2 max-md:grid max-md:grid-cols-3 max-md:gap-4">

            <div className="px-4 w-64 py-2 rounded-2xl max-md:w-auto bg-orange-200/30 text-orange-400 dark:bg-orange-300/25">
                <div>
                    <h1 className="text-lg">Total Taches</h1>
                </div>

                <div className="">
                    <h1 className="text-3xl py-2">24</h1>
                    <p className="">Lorem ipsum dolor  </p>
                </div>
            </div>

            <div className="px-4 w-64 py-2 rounded-2xl max-md:w-auto bg-white dark:bg-gray-900 dark:text-white">
                <div>
                    <h1 className="text-lg">Taches En Cours</h1>
                </div>

                <div className="">
                    <h1 className="text-4xl py-2">10</h1>
                    <p>Lorem ipsum dolor  </p>
                </div>
            </div>

            <div className="px-4 w-64 py-2 rounded-2xl max-md:w-auto bg-white dark:bg-gray-900 dark:text-white">
                <div>
                    <h1 className="text-lg">Taches Terminer</h1>
                </div>

                <div className="">
                    <h1 className="text-4xl py-2">12</h1>
                    <p>Lorem ipsum dolor  </p>
                </div>                                             
            </div>

            <div className="px-4 w-64 py-2 rounded-2xl max-md:w-auto bg-white dark:bg-gray-900 dark:text-white">
                <div>
                    <h1 className="text-lg">Taches Annuler</h1>
                </div>

                <div className="">
                    <h1 className="text-4xl py-2">2</h1>
                    <p>Lorem ipsum dolor  </p>
                </div>
            </div>
        </section>
    )
}


export default TotalsTask;