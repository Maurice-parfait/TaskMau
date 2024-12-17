import React from "react";
import { ResponsiveContainer, 
    BarChart, 
    Bar, XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    PieChart, 
    Pie, 
    Cell } 
from "recharts";

import { IoStatsChartOutline } from "react-icons/io5"; // icone de statistique
import { GiProgression } from "react-icons/gi"; // icone de progresse
import TotalsTask from "./TotalsTask";


function StatistiqueTask () {
    const dataResumeTask = [
        {name: 'Page A', uv: 4000, pv: 2400,amt: 2400,},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210,},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000,},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181,},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500,},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100,},
    ];

    const dataProgresse = [
        { name: 'A', A: "100", value: 80, color: '#ff0000' },
        { name: 'B', B: "400", value: 45, color: '#00ff00' },
        { name: 'C', C: "200", value: 25, color: '#0000ff' },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
       <section>
            <section className="grid grid-cols-GridStat gap-3 max-md:grid-cols-none">
                {/* les statistique de task en general  */}
                <div className="bg-white h-96 py-2 px-4 rounded-xl dark:bg-gray-900/15">
                    <div className="flex items-center pb-3">
                        <div className="bg-gray-100 mx-2 p-2 rounded-full">
                            <IoStatsChartOutline size={25} />
                        </div>
                        <h1 className="text-lg font-medium dark:text-white">Resume de taches</h1>
                    </div>

                    <div className="w-full h-80">
                        < ResponsiveContainer width="100%" height="100%">
                            < BarChart data={dataResumeTask}>
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                <XAxis 
                                    dataKey="name" 
                                    stroke="#fb923c"
                                    fontSize={14}
                                    tickLine={false} 
                                    axisLine={false} 
                                />
                                <YAxis 
                                    dataKey="pv"
                                    stroke="#fb923c"
                                    fontSize={14}
                                    tickLine={false}
                                    axisLine={false}
                                    
                                />
                                < Tooltip 
                                    stroke="#8884d8"
                                />
                                < Bar dataKey="pv" fill="#fdba74" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white h-96 py-3 px-4 rounded-xl dark:bg-gray-900/15">
                    
                    <div className="flex items-center pb-3">
                        <div className="bg-gray-100 mx-2 p-1 rounded-full">
                            <GiProgression size={25} />
                        </div>
                        <h1 className="text-lg font-medium dark:text-white">Resume de taches</h1>
                    </div>

                    <div className="w-full h-96">
                        < ResponsiveContainer width="100%" height="100%">
                            < PieChart width={400} height={500}>
                                < Pie 
                                    dataKey="value"
                                    startAngle={180}
                                    endAngle={0}
                                    innerRadius={50}
                                    outerRadius={100}
                                    data={dataProgresse}
                                    fill="#fb923c"
                                    stroke="none"
                                >
                                    {dataProgresse.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>

           <section>
             < TotalsTask />
           </section>
       </section>

       
       
    )
}

export default StatistiqueTask;