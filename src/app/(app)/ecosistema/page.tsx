import { CircleCheckBig } from "lucide-react";


export default function Ecosistema() {
    return (
        <main className="min-h-screen bg-[#101318] text-white p-6">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* HEADER */}
                <div>
                    <h1 className="text-3xl font-bold">Visão geral do ecossistema</h1>
                    <p className="text-gray-400">
                        Análise holística do ambiente da sua terra.
                    </p>
                </div>

                {/* SCORE CARD */}
                <div className="bg-[#121e30] border-2 border-[#173151] rounded-xl p-6 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center h-15 w-15 bg-[#152845] rounded-full ">
                            <CircleCheckBig color="#2b7fff" size={30} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">
                                PONTUAÇÃO GERAL DO TERRENO
                            </p>
                            <h2 className="text-5xl font-bold">
                                77 <span className="text-lg text-gray-400">/100</span>
                            </h2>
                        </div>
                    </div>

                    <div className="text-right">
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                            BomStatus
                        </span>
                        <p className="text-green-400 mt-2 text-sm">
                            Se continuar assim → saúde estável nas próximas 24h
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            Última atualização: 05/05/2026
                        </p>
                    </div>
                </div>

                {/* CARDS */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* SOLO */}
                    <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5">
                        <div className="flex justify-between">
                            <h3 className="font-semibold">Camada de Solo</h3>
                            <span className="text-green-400 font-bold">84</span>
                        </div>

                        <p className="text-gray-400 text-sm mt-2">
                            Umidade abaixo do ideal — monitorar
                        </p>

                        <div className="mt-4 text-sm space-y-1">
                            <p>Umidade: 40.3%</p>
                            <p>pH: 6.5</p>
                        </div>
                    </div>

                    {/* PLANTA */}
                    <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5">
                        <div className="flex justify-between">
                            <h3 className="font-semibold">Camada de Planta</h3>
                            <span className="text-orange-400 font-bold">58</span>
                        </div>

                        <p className="text-gray-400 text-sm mt-2">
                            Desenvolvimento moderado — atenção ao estresse
                        </p>

                        <div className="mt-4 text-sm space-y-1">
                            <p>Saúde: 67.5</p>
                            <p>Estresse hídrico: 31.8%</p>
                        </div>
                    </div>

                    {/* CLIMA */}
                    <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5">
                        <div className="flex justify-between">
                            <h3 className="font-semibold">Camada Climática</h3>
                            <span className="text-green-400 font-bold">89</span>
                        </div>

                        <p className="text-gray-400 text-sm mt-2">
                            Condições climáticas ideais
                        </p>

                        <div className="mt-4 text-sm space-y-1">
                            <p>Temperatura: 27.9°C</p>
                            <p>Umidade: 69.9%</p>
                        </div>
                    </div>
                </div>

                {/* INTERAÇÕES */}
                <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5">
                    <h3 className="font-semibold">Interações detectadas</h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Como as camadas se afetam
                    </p>

                    <div className="bg-green-500/10 text-green-400 p-3 rounded-lg text-sm">
                        Condições gerais dentro do esperado. Sistema em equilíbrio.
                    </div>
                </div>

                {/* PREVISÃO */}
                <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5 space-y-3">
                    <h3 className="font-semibold">Previsão 24h</h3>

                    <div className="bg-blue-500/10 text-blue-400 p-3 rounded-lg text-sm">
                        Solo: Umidade estável
                    </div>

                    <div className="bg-orange-500/10 text-orange-400 p-3 rounded-lg text-sm">
                        Planta: Desenvolvimento saudável previsto
                    </div>

                    <div className="bg-green-500/10 text-green-400 p-3 rounded-lg text-sm">
                        Clima: Condições ideais
                    </div>
                </div>

            </div>
        </main>
    );
}