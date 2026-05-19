"use client";

import Chart from "@/_components/chart";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#101318] text-white">

            <main className="p-6 md:p-8 space-y-6 max-w-400 mx-auto">

                {/* HEADER */}
                <div
                    data-animate="fade-up"
                    className="flex flex-col gap-2"
                >
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Central de Controle
                    </h1>

                    <p className="text-zinc-400 max-w-2xl">
                        Visão geral do monitoramento agrícola em tempo real.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                    <div
                        data-animate="fade-up"
                        className="
                            bg-[#1a1d23]
                            border border-[#2b303b]
                            rounded-2xl
                            p-5
                            relative
                            overflow-hidden
                        "
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 blur-3xl rounded-full" />

                        <p className="text-zinc-400 text-sm relative z-10">
                            Plant Health Score
                        </p>

                        <h2 className="text-3xl font-bold mt-3 relative z-10">
                            67.3%
                        </h2>

                        <p className="text-sm text-red-400 mt-2 relative z-10">
                            -12.7% vs ideal
                        </p>
                    </div>

                    <div
                        data-animate="fade-up"
                        className="
                            bg-[#1a1d23]
                            border border-[#2b303b]
                            rounded-2xl
                            p-5
                            relative
                            overflow-hidden
                        "
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl rounded-full" />

                        <p className="text-zinc-400 text-sm relative z-10">
                            Avg Soil Moisture
                        </p>

                        <h2 className="text-3xl font-bold mt-3 relative z-10">
                            41.4%
                        </h2>

                        <p className="text-sm text-red-400 mt-2 relative z-10">
                            -18.6% vs ideal
                        </p>
                    </div>

                    <div
                        data-animate="fade-up"
                        className="
                            bg-[#1a1d23]
                            border border-[#2b303b]
                            rounded-2xl
                            p-5
                            relative
                            overflow-hidden
                        "
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 blur-3xl rounded-full" />

                        <p className="text-zinc-400 text-sm relative z-10">
                            Avg Temperature
                        </p>

                        <h2 className="text-3xl font-bold mt-3 relative z-10">
                            24.1°C
                        </h2>

                        <p className="text-sm text-orange-400 mt-2 relative z-10">
                            +2.1°C vs ideal
                        </p>
                    </div>

                    <div
                        data-animate="fade-up"
                        className="
                            bg-[#1a1d23]
                            border border-[#2b303b]
                            rounded-2xl
                            p-5
                            relative
                            overflow-hidden
                        "
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-3xl rounded-full" />

                        <p className="text-zinc-400 text-sm relative z-10">
                            Avg Humidity
                        </p>

                        <h2 className="text-3xl font-bold mt-3 relative z-10">
                            66.5%
                        </h2>

                        <p className="text-sm text-green-400 mt-2 relative z-10">
                            +1.5% vs ideal
                        </p>
                    </div>

                </div>

                {/* GRÁFICO + STATUS */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

                    {/* GRÁFICO */}
                    <div
                        data-animate="fade-up"
                        className="
                            xl:col-span-2
                            bg-[#1a1d23]
                            border border-[#2b303b]
                            rounded-2xl
                            p-6
                            relative
                            overflow-hidden
                        "
                    >

                        <div className="absolute top-0 right-0 w-52 h-52 bg-white/2 blur-3xl rounded-full" />

                        {/* HEADER */}
                        <div className="flex items-center justify-between mb-6 relative z-10">

                            <div>
                                <h2 className="text-lg font-semibold tracking-tight">
                                    24h Trends
                                </h2>

                                <p className="text-sm text-zinc-400 mt-1">
                                    Dados monitorados em tempo real
                                </p>
                            </div>

                            <div
                                className="
                                    px-3 py-1
                                    rounded-lg
                                    bg-[#232833]
                                    border border-[#343946]
                                    text-xs text-zinc-300
                                "
                            >
                                Live
                            </div>
                        </div>

                        <div className="h-80 relative z-10">
                            <Chart />
                        </div>
                    </div>

                    {/* STATUS */}
                    <div
                        data-animate="fade-up"
                        className="
                            bg-[#1a1d23]
                            border border-[#2b303b]
                            rounded-2xl
                            p-5
                            space-y-4
                        "
                    >

                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-lg">
                                System Status
                            </h2>

                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        </div>

                        <div className="space-y-3">

                            <div className="flex justify-between items-center bg-[#232833] border border-[#343946] p-4 rounded-xl">
                                <span className="text-zinc-300">
                                    Sensors Online
                                </span>

                                <span className="font-semibold">
                                    4 / 6
                                </span>
                            </div>

                            <div className="flex justify-between items-center bg-[#232833] border border-[#343946] p-4 rounded-xl">
                                <span className="text-zinc-300">
                                    Active Alerts
                                </span>

                                <span className="text-red-400 font-semibold">
                                    2
                                </span>
                            </div>

                            <div className="flex justify-between items-center bg-[#232833] border border-[#343946] p-4 rounded-xl">
                                <span className="text-zinc-300">
                                    Irrigation Needed
                                </span>

                                <span className="text-green-400 font-semibold">
                                    No
                                </span>
                            </div>

                        </div>

                        <div className="bg-green-500/10 border border-green-500/10 rounded-xl p-4 text-sm text-green-400 leading-relaxed">
                            Parcialmente nublado, sem previsão de chuva
                            nas próximas 48h.
                        </div>

                    </div>
                </div>

                {/* SENSORES */}
                <div className="space-y-5">

                    <div
                        data-animate="fade-up"
                        className="flex items-center justify-between"
                    >
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Sensor Health
                            </h2>

                            <p className="text-zinc-400 text-sm mt-1">
                                Monitoramento dos sensores ativos
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

                        {[
                            {
                                name: "Clima Central",
                                value: "95%",
                                danger: false,
                            },
                            {
                                name: "Clima Leste C1",
                                value: "12%",
                                danger: true,
                            },
                            {
                                name: "Planta Norte A1",
                                value: "91%",
                                danger: false,
                            },
                            {
                                name: "Planta Sul B1",
                                value: "34%",
                                danger: true,
                            },
                            {
                                name: "Solo Norte A1",
                                value: "87%",
                                danger: false,
                            },
                            {
                                name: "Solo Sul B2",
                                value: "72%",
                                danger: false,
                            },
                        ].map((sensor, index) => (
                            <div
                                key={index}
                                data-animate="fade-up"
                                className={`
                                    rounded-2xl
                                    p-5
                                    border
                                    transition-all
                                    duration-300
                                    hover:translate-y-0.5
                                    bg-[#1a1d23]
                                    ${sensor.danger
                                        ? "border-red-500/30"
                                        : "border-[#2b303b]"
                                    }
                                `}
                            >
                                <p className="text-sm text-zinc-400">
                                    {sensor.name}
                                </p>

                                <div className="flex items-end justify-between mt-4">

                                    <h3 className="text-3xl font-bold">
                                        {sensor.value}
                                    </h3>

                                    <div
                                        className={`
                                            text-xs px-2 py-1 rounded-lg
                                            ${sensor.danger
                                                ? "bg-red-500/10 text-red-400"
                                                : "bg-green-500/10 text-green-400"
                                            }
                                        `}
                                    >
                                        {sensor.danger ? "Critical" : "Stable"}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </main>
        </div>
    );
}