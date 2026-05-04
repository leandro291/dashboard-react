import { Link } from "react-router";
import { UserSection } from "./user-section";
import { SidebarCard } from "./sidebar-card";
import { LogOut } from "lucide-react";
import { useUser } from "../../providers/user-provider/user-provider";
import { useAuthStore } from "../../../features/pages/auth/store/auth-store";

export function Sidebar({ navigation }) {
    
    const { logout } = useAuthStore()

    return (
        <aside className="min-h-90 xl:w-80 xl:min-h-screen bg-emerald-800/40 backdrop-blur-xl border-white/20 border-b lg:border-r lg:border-b-0">

            <div className="flex h-full flex-col justify-between items-center py-12 px-15 ">

                <div className="mt-8">
                    <UserSection />
                </div>

                <ul className="flex gap-2 xl:flex-col md:gap-4 lg:gap-6 xl:gap-8 flex-wrap items-center justify-center">
                    {
                        navigation.map(({ id, title, path, Icon }) => (
                            <SidebarCard key={id} title={title} path={path} Icon={Icon} />
                        ))
                    }
                </ul>

                <button className="flex gap-3 py-4 px-2 items-center cursor-pointer" onClick={logout}>
                    <LogOut className="text-red-700" size={25}/>
                    <span className="text-red-700 text-xl font-extrabold">Logout</span>
                </button>

            </div>
        </aside>
    );
}