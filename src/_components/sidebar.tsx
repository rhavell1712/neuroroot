"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Leaf,
    Cloud,
    Cpu,
    Bell,
    User,
    Plus,
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pathname = usePathname();

    const mainItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: Leaf, label: "Ecosystem", href: "/ecosistema" },
        { icon: Cloud, label: "Climate", href: "/climate" },
        { icon: Cpu, label: "Sensors", href: "/sensors" },
        { icon: Bell, label: "Alerts", href: "/alerts" },
    ];

    const extraItems = [
        { icon: User, label: "Profile", href: "/profile" },
    ];

    const linkClass = (href: string) =>
        `flex items-center gap-3 p-3 rounded-lg transition-all duration-200
     ${pathname === href
            ? "bg-[#1a2e28] text-green-400"
            : "text-gray-400 hover:bg-white/5 hover:text-white"
        }`;

    return (
        <>
            {/* 🖥️ SIDEBAR */}
            <aside
                className={`sticky top-0 hidden md:flex flex-col justify-between h-screen bg-[#1a1d23] border-r border-white/10
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}`}
            >
                {/* TOPO */}
                <div className="p-4">
                    <div className="flex items-center justify-between mb-6">
                        {!collapsed && (
                            <h1 className="text-lg font-semibold text-green-400">
                                EcoWatch
                            </h1>
                        )}

                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="p-2 rounded-md hover:bg-white/10"
                        >
                            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                        </button>
                    </div>

                    <div className="border-t border-white/10 mb-4" />

                    {/* MENU */}
                    <nav className="space-y-1">
                        {mainItems.map((item, i) => (
                            <Link key={i} href={item.href} className={linkClass(item.href)}>
                                <item.icon size={20} />
                                {!collapsed && <span className="text-sm">{item.label}</span>}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* FOOTER */}
                <div className="p-4">
                    <div className="border-t border-white/10 mb-4" />

                    <div className="flex items-center gap-2 text-sm text-green-400">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        {!collapsed && "System Online"}
                    </div>
                </div>
            </aside>

            {/* 📱 MOBILE NAV */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#101318] border-t border-white/10 p-2 flex justify-around items-center z-50">

                {mainItems.slice(0, 4).map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex flex-col items-center text-xs transition
              ${pathname === item.href ? "text-green-400" : "text-gray-400"}
            `}
                    >
                        <item.icon size={20} />
                    </Link>
                ))}

                {/* BOTÃO MAIS */}
                <button
                    onClick={() => setMobileMenuOpen(true)}
                    className="bg-green-500 text-white p-3 rounded-full"
                >
                    <Plus size={20} />
                </button>
            </div>

            {/* 🔥 MENU MOBILE */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end">
                    <div className="bg-[#101318] w-full p-6 rounded-t-2xl space-y-4">

                        <div className="flex justify-between items-center">
                            <h2 className="text-white font-semibold">More</h2>
                            <button onClick={() => setMobileMenuOpen(false)}>
                                <X className="text-white" />
                            </button>
                        </div>

                        {[...mainItems.slice(4), ...extraItems].map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center gap-3 p-3 rounded-lg transition
                  ${pathname === item.href
                                        ? "bg-[#1a2e28] text-green-400"
                                        : "text-gray-300 hover:bg-white/5"
                                    }`}
                            >
                                <item.icon size={20} />
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}