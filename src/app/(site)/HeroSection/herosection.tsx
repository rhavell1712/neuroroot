"use client";

import Link from "next/link";
import {
    Radar,
    Leaf,
    BarChart3,
    Bell,
    ArrowRight,
    Play
} from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden">

            {/* 🔥 BACKGROUND IMAGE */}
            <div className="absolute inset-0">
                <img
                    src="/img/fundo.jpeg" // coloca sua imagem aqui
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* CONTEÚDO */}
            <div className="relative max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center z-10">

                {/* LEFT */}
                <div className="space-y-6">

                    {/* TÍTULO */}
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        <span className="text-white">BIO</span>{" "}
                        <span className="text-green-500">SENSE</span>
                    </h1>

                    {/* SUBTÍTULO */}
                    <div>
                        <p className="text-2xl md:text-3xl font-semibold">
                            Natureza que sente.
                        </p>
                        <p className="text-2xl md:text-3xl font-semibold text-green-500">
                            Tecnologia que responde.
                        </p>
                    </div>

                    {/* LINHA */}
                    <div className="w-12 h-0.5 bg-green-500 rounded" />

                    {/* DESCRIÇÃO */}
                    <p className="text-gray-300 max-w-lg leading-relaxed">
                        Soluções inteligentes que monitoram, analisam e transformam dados
                        ambientais em decisões reais.
                    </p>

                    {/* ICONS MELHORADOS */}
                    <div className="flex items-center gap-8 text-orange-400 pt-2">
                        {[Radar, Leaf, BarChart3, Bell].map((Icon, i) => (
                            <Icon
                                key={i}
                                className="w-5 h-5 hover:scale-110 hover:text-white transition-all duration-200 cursor-pointer"
                            />
                        ))}
                    </div>

                    {/* BOTÕES */}
                    <div className="flex flex-wrap gap-4 pt-6">

                        <Link
                            href="/dashboard"
                            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:scale-105 hover:bg-yellow-300 transition-all duration-200"
                        >
                            <Leaf size={18} />
                            Acessar Plataforma
                            <ArrowRight size={18} />
                        </Link>

                        <button className="border border-orange-500 text-orange-400 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-orange-500 hover:text-black transition-all duration-200">
                            <Play size={18} />
                            Ver como funciona
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex justify-center">
                    <img
                        src="/img/ChatGPT Image 1 de mai. de 2026, 22_10_01.png"
                        alt="Planta"
                        className="w-70 md:w-95 object-contain drop-shadow-[0_0_25px_rgba(34,197,94,0.4)]"
                    />
                </div>

            </div>
        </section>
    );
}