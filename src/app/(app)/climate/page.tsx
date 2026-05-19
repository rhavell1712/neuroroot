"use client";

import {
    Sun,
    Droplets,
    Wind,
    Gauge,
    Eye,
    CloudRain,
    Thermometer,
} from "lucide-react";

export default function ClimatePage() {
    return (
        <main className="min-h-screen bg-[#101318] text-white p-6">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* HEADER */}
                <div>
                    <h1 className="text-3xl font-bold">Clima e tempo</h1>
                    <p className="text-gray-400">
                        Condições em tempo real e impactos previstos.
                    </p>
                </div>

                {/* CARD PRINCIPAL */}
                <div className="bg-[#161b22] border border-green-500/20 rounded-xl p-6">

                    <div className="w-full bg-[#161b22] border border-green-500/20 rounded-2xl mb-5 p-6">

                        <div className="grid md:grid-cols-[1fr_auto_2fr] gap-6 items-center">

                            {/* ESQUERDA */}
                            <div className="flex items-center gap-4">

                                <Sun size={36} className="text-orange-400" />

                                <div>
                                    <p className="text-xs text-gray-400 tracking-widest uppercase">
                                        Current Condition
                                    </p>

                                    <div className="flex items-center gap-2">
                                        <h2 className="text-5xl font-bold">14.3°</h2>
                                    </div>

                                    <p className="mt-1 text-lg">Noite Limpa</p>

                                    <p className="text-gray-400 text-sm">
                                        Feels like 12.3°
                                    </p>
                                </div>
                            </div>

                            {/* DIVISOR */}
                            <div className="hidden md:block w-px h-24 bg-white/10" />

                            {/* DIREITA */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                                {/* HUMIDITY */}
                                <div className="flex items-center gap-3 bg-[#101318] border border-white/5 rounded-xl p-4">
                                    <Droplets className="text-blue-400" size={18} />
                                    <div>
                                        <p className="text-xs text-gray-400">Humidity</p>
                                        <p className="font-semibold">68.9%</p>
                                    </div>
                                </div>

                                {/* WIND */}
                                <div className="flex items-center gap-3 bg-[#101318] border border-white/5 rounded-xl p-4">
                                    <Wind className="text-cyan-400" size={18} />
                                    <div>
                                        <p className="text-xs text-gray-400">Wind</p>
                                        <p className="font-semibold">17.6 km/h SE</p>
                                    </div>
                                </div>

                                {/* UV */}
                                <div className="flex items-center gap-3 bg-[#101318] border border-white/5 rounded-xl p-4">
                                    <Sun className="text-orange-400" size={18} />
                                    <div>
                                        <p className="text-xs text-gray-400">UV Index</p>
                                        <p className="font-semibold">2</p>
                                    </div>
                                </div>

                                {/* PRESSURE */}
                                <div className="flex items-center gap-3 bg-[#101318] border border-white/5 rounded-xl p-4">
                                    <Gauge className="text-gray-300" size={18} />
                                    <div>
                                        <p className="text-xs text-gray-400">Pressure</p>
                                        <p className="font-semibold">1016.4 hPa</p>
                                    </div>
                                </div>

                                {/* VISIBILITY */}
                                <div className="flex items-center gap-3 bg-[#101318] border border-white/5 rounded-xl p-4 col-span-2 md:col-span-1">
                                    <Eye className="text-gray-300" size={18} />
                                    <div>
                                        <p className="text-xs text-gray-400">Visibility</p>
                                        <p className="font-semibold">10 km</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RECOMENDAÇÃO */}
                    <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl">
                        <Droplets />
                        <div>
                            <p className="font-semibold">Recomendação de irrigação</p>
                            <p className="text-sm">
                                Suspender a segurança nas próximas 24h e reavaliar após a chuva.
                            </p>
                        </div>
                    </div>

                    {/* IMPACTO */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Impacto nas Decisões</h2>

                        <div className="space-y-3">

                            <div className="flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 text-orange-400 p-4 rounded-xl">
                                <CloudRain />
                                <span>
                                    Chuva prevista em 32h → Irrigação automática cancelada
                                </span>
                            </div>

                            <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl">
                                <Thermometer />
                                <span>
                                    Temperatura alta → Aumentar frequência de variação
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* GRÁFICO (placeholder fiel visualmente) */}
                    <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                        <h2 className="text-lg font-semibold mb-2">
                            Previsão para 48 horas
                        </h2>
                        <p className="text-gray-400 text-sm mb-4">
                            Temperatura e probabilidade de precipitação
                        </p>

                        <div className="h-64 w-full bg-linear-to-b from-transparent to-black/20 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                            gráfico aqui
                        </div>
                    </div>

                    {/* CARDS DE HORA */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">
                            Impacto por hora futuro
                        </h2>

                        <div className="grid md:grid-cols-4 gap-4">

                            {[1, 2, 3, 4].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-[#161b22] border border-white/10 rounded-xl p-4"
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-400 text-sm">23:36</span>
                                        <span className="font-semibold">15°</span>
                                    </div>

                                    <p className="text-xs text-gray-400 mb-3">
                                        1% de chance (0 mm)
                                    </p>

                                    <div className="bg-[#101318] border border-white/5 rounded-lg p-2 text-xs">
                                        Impacto no solo:
                                        <br />
                                        Neutro
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}