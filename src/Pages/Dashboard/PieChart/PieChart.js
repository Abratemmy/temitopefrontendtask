import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import "./pieChart.scss";
import uparr from "../../../Assets/gift.svg";
import downarr from "../../../Assets/Bag.svg"

const data02 = [
    { name: '50%', value: 150 },
    { name: '30%', value: 100 },
    { name: '15%', value: 40 }
];

const COLORS = ['var(--primaryColor)', '#FFCC91', '#97A5EB'];

const Piechart = () => {
    return (
        <div className='pieWrapper' >
            <div className='pieLabel'>
                <div className='content'>
                    <div className='dot dot1'></div>
                    <div className='name'>Acquisition</div>
                </div>
                <div className='content'>
                    <div className='dot dot2'></div>
                    <div className='name'>Purchase</div>
                </div>
                <div className='content'>
                    <div className='dot dot3'></div>
                    <div className='name'>Retention</div>
                </div>
            </div>
            <div className='pieContainer'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart fill="red">

                        <Pie
                            data={data02}
                            startAngle={86}
                            endAngle={-274}
                            cx="50%"
                            cy="50%"
                            outerRadius={72}
                            innerRadius={53}
                            dataKey="value"
                            paddingAngle={0}
                            fill="red"
                            tickLine={false}
                            // cornerRadius={40}
                            // label={<CustomPieChartLabel centerText={centerText} showSecondLabel={showSecondLabel} />}
                            stroke="none"
                        >
                            {data02.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}

                        </Pie>

                        <Pie
                            data={data02}
                            dataKey="value"
                            innerRadius={0}
                            outerRadius={30}
                            isAnimationActive={false}
                        >
                            {data02.map((entry, index) => {
                                return <Cell key={`cell-${index}`} fill="#fff" stroke="#fff" />
                            })}
                            {/* <Label
                                value={`${data02[0].value}%`}
                                position="center"
                                fill='black'
                                style={{
                                    fontSize: "32px",
                                    fontWeight: "normal",
                                    fontFamily: "Roboto",
                                }}
                            /> */}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>


        </div>
    )
}


export default Piechart