"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
} from "recharts";

const data = [
    { time: "00:00", moisture: 58, temp: 18, humidity: 82, wind: 6 },
    { time: "02:00", moisture: 49, temp: 21, humidity: 76, wind: 9 },
    { time: "04:00", moisture: 63, temp: 16, humidity: 88, wind: 4 },
    { time: "06:00", moisture: 45, temp: 23, humidity: 69, wind: 11 },
    { time: "08:00", moisture: 52, temp: 28, humidity: 61, wind: 14 },
    { time: "10:00", moisture: 38, temp: 31, humidity: 54, wind: 17 },
    { time: "12:00", moisture: 34, temp: 35, humidity: 48, wind: 19 },
    { time: "14:00", moisture: 41, temp: 33, humidity: 52, wind: 15 },
    { time: "16:00", moisture: 29, temp: 37, humidity: 43, wind: 21 },
    { time: "18:00", moisture: 47, temp: 29, humidity: 66, wind: 12 },
    { time: "20:00", moisture: 55, temp: 24, humidity: 74, wind: 9 },
    { time: "22:00", moisture: 61, temp: 20, humidity: 81, wind: 7 },
];

export default function Chart() {
    return (
        <div className="w-full h-full">

            <div className="w-full h-75">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -20,
                            bottom: 0,
                        }}
                    >
                        {/* GRADIENTS */}
                        <defs>
                            <linearGradient
                                id="greenGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#22c55e"
                                    stopOpacity={0.05}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#22c55e"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                            <linearGradient
                                id="orangeGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#f97316"
                                    stopOpacity={0.05}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#f97316"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                            <linearGradient
                                id="blueGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#3b82f6"
                                    stopOpacity={0.05}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#3b82f6"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                            <linearGradient
                                id="purpleGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#a855f7"
                                    stopOpacity={0.05}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#a855f7"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        {/* GRID */}
                        <CartesianGrid
                            stroke="rgba(255,255,255,0.06)"
                            strokeDasharray="3 3"
                            vertical={false}
                        />
                        {/* X AXIS */}
                        <XAxis
                            dataKey="time"
                            tickLine={false}
                            axisLine={false}
                            tick={{
                                fill: "#71717a",
                                fontSize: 12,
                            }}
                        />
                        {/* Y AXIS */}
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tick={{
                                fill: "#71717a",
                                fontSize: 12,
                            }}
                        />
                        {/* TOOLTIP */}
                        <Tooltip
                            cursor={{
                                stroke: "#52525b",
                                strokeWidth: 1.5,
                                strokeDasharray: "4 4",
                            }}
                            contentStyle={{
                                backgroundColor: "#181c23",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "16px",
                                padding: "12px",
                                color: "#fff",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                            }}
                            labelStyle={{
                                color: "#a1a1aa",
                                marginBottom: "8px",
                            }}
                        />
                        {/* LEGEND */}
                        <Legend
                            verticalAlign="top"
                            align="right"
                            iconType="circle"
                            wrapperStyle={{
                                paddingBottom: "20px",
                                fontSize: "12px",
                                color: "#a1a1aa",
                            }}
                        />
                        {/* MOISTURE */}
                        <Area
                            type="linear"
                            dataKey="moisture"
                            name="Soil Moisture"
                            stroke="#22c55e"
                            fill="url(#greenGradient)"
                            strokeWidth={3}
                            dot={false}
                            isAnimationActive={false}
                            activeDot={{
                                r: 5,
                                strokeWidth: 0,
                            }}
                        />
                        {/* TEMPERATURE */}
                        <Area
                            type="linear"
                            dataKey="temp"
                            name="Temperature"
                            stroke="#f97316"
                            fill="url(#orangeGradient)"
                            strokeWidth={3}
                            dot={false}
                            isAnimationActive={false}
                            activeDot={{
                                r: 5,
                                strokeWidth: 0,
                            }}
                        />
                        {/* HUMIDITY */}
                        <Area
                            type="linear"
                            dataKey="humidity"
                            name="Humidity"
                            stroke="#3b82f6"
                            fill="url(#blueGradient)"
                            strokeWidth={3}
                            dot={false}
                            isAnimationActive={false}
                            activeDot={{
                                r: 5,
                                strokeWidth: 0,
                            }}
                        />
                        {/* WIND */}
                        <Area
                            type="linear"
                            dataKey="wind"
                            name="Wind"
                            stroke="#a855f7"
                            fill="url(#purpleGradient)"
                            strokeWidth={3}
                            dot={false}
                            isAnimationActive={false}
                            activeDot={{
                                r: 5,
                                strokeWidth: 0,
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}