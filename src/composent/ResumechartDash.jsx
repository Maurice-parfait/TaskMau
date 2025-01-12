import React from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function ResumeChart() {
    const data = [
        {name: 'Page A',uv: 4000,pv: 2400,amt: 2400},
        {name: 'Page B',uv: 3000,pv: 1398,amt: 2210},
        {name: 'Page C',uv: 2000,pv: 9800,amt: 2290},
        {name: 'Page D',uv: 2780,pv: 3908,amt: 2000},
        {name: 'Page E',uv: 1890,pv: 4800,amt: 2181},
        {name: 'Page F',uv: 2390,pv: 3800,amt: 2500},
        {name: 'Page G',uv: 3490,pv: 4300,amt: 2100},
    ];
    
    return(
       <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    < Tooltip />
                    <Area 
                        dataKey="uv" 
                        type="monotone" 
                        stroke="#fde047" 
                        fill={`url(#can-gradient)`}
                    />

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

                    <defs>
                        <linearGradient id="can-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fef08a" stopOpacity={0.8}/>
                            <stop offset="75%" stopColor="#fcd34d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>     
                </AreaChart>
            </ResponsiveContainer>
       </div>
    )
}

export default ResumeChart;
