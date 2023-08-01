import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import CustomTooltip from '../../../components/CustomTooltip/CustomTooltip';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './Barchat.scss'


function BarChartRechart({ selected }) {
    const salesdata = [
        {
            name: "Sept 10",
            uv: 60,
            pv: 30,
            amt: 700
        },
        {
            name: "Sept 11",
            uv: 65,
            pv: 35,
            amt: 50
        },
        {
            name: "Sept 12",
            uv: 40,
            pv: 25,
            amt: 2290
        },
        {
            name: "Sept 13",
            uv: 50,
            pv: 30,
            amt: 20
        },
        {
            name: "Sept 14",
            uv: 45,
            pv: 20,
            amt: 2181
        },
        {
            name: "Sept 15",
            uv: 40,
            pv: 20,
            amt: 2500
        },
        {
            name: "Sept 16",
            uv: 40,
            pv: 25,
            amt: 2100
        }


    ];
    const profitdata = [
        {
            name: "Sept 10",
            uv: 60,
            pv: 30,
            amt: 700
        },
        {
            name: "Sept 11",
            uv: 65,
            pv: 45,
            amt: 50
        },
        {
            name: "Sept 12",
            uv: 40,
            pv: 15,
            amt: 2290
        },
        {
            name: "Sept 13",
            uv: 50,
            pv: 20,
            amt: 20
        },
        {
            name: "Sept 14",
            uv: 45,
            pv: 30,
            amt: 2181
        },
        {
            name: "Sept 15",
            uv: 40,
            pv: 10,
            amt: 2500
        },
        {
            name: "Sept 16",
            uv: 40,
            pv: 35,
            amt: 2100
        }


    ];


    return (
        <div className=''>
            {/* <div className='heading headingDropdown' onClick={openDropdown}>{selected} Comparison
                <span><MdKeyboardArrowDown className="dropdown" /></span>
                {dropdown && (
                    <div className='dropdowntoggle'>
                        <div className={selected === "Weekly" ? "active list" : "list"} onClick={handleClick}
                            id={"Weekly"}>
                            Weekly
                        </div>
                        <div className={selected === "Monthly" ? "active list" : "list"} onClick={handleClick}
                            id={"Monthly"}>
                            Monthly
                        </div>
                    </div>
                )}
            </div> */}

            <div className='rechartContainer'>
                <ResponsiveContainer width="100%" height="100%">
                    {selected === "sales" ? (
                        <BarChart
                            data={salesdata}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                            barSize={12}
                        >
                            <CartesianGrid strokeWidth={0.2} horizontal={false} vertical={false} verticalFill={['blue', '#444444']} />
                            <XAxis dataKey="name" axisLine={false} interval={0} tickCount={5} gridLines={false}
                                stroke="#9F9F9F" tickLine={{ stroke: "#ffffff" }} tick={{ dy: 8, fontSize: '12', fontFamily: "var(textFamily)" }}
                                padding={{ left: 7, right: 1 }}
                            />
                            <YAxis axisLine={false} width={30} tickCount={5}
                                stroke="#9F9F9F" tickLine={{ stroke: "#ffffff" }} tick={{ dx: 5, fontSize: '12', fontFamily: "var(textFamily)" }}
                                tickFormatter={(label) => `${label}k`}
                            />
                            <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip payload={salesdata} />} />

                            <Bar dataKey="pv" fill="var(--primaryColor)" radius={[10, 10, 10, 10]} background={{ fill: '#eee', radius: 20 }} />

                        </BarChart>
                    ) :
                        (
                            <BarChart
                                data={profitdata}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}
                                barSize={12}
                            >
                                <CartesianGrid strokeWidth={0.2} horizontal={false} vertical={false} verticalFill={['blue', '#444444']} />
                                <XAxis dataKey="name" axisLine={false} interval={0} tickCount={5} gridLines={false}
                                    stroke="#9F9F9F" tickLine={{ stroke: "#ffffff" }} tick={{ dy: 8, fontSize: '12', fontFamily: "var(textFamily)" }}
                                    padding={{ left: 7, right: 1 }}
                                />
                                <YAxis axisLine={false} width={30} tickCount={5}
                                    stroke="#9F9F9F" tickLine={{ stroke: "#ffffff" }} tick={{ dx: 5, fontSize: '12', fontFamily: "var(textFamily)" }}
                                    tickFormatter={(label) => `${label}k`}
                                />
                                <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip payload={profitdata} />} />

                                <Bar dataKey="pv" fill="var(--primaryColor)" radius={[10, 10, 10, 10]} background={{ fill: '#eee', radius: 20 }} />

                            </BarChart>

                        )}
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarChartRechart