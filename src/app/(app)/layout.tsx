import Sidebar from "@/_components/sidebar";
import Animation from "@/_components/animation";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <Animation />
            <Sidebar />

            {/* CONTEÚDO */}
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}