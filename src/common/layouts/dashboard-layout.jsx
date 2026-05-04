import { Outlet } from "react-router";
import {Sidebar} from "../components/sidebar/sidebar";
import { TodoProvider } from "../../features/pages/todo/context/todo-context";
import { UserProvider } from "../providers/user-provider/user-provider";
import { NAVIGATION } from "../constants/navigation/navigation";

export function DashboardLayout() {
    return (
        <TodoProvider>

            
            <div className="h-screen w-full overflow-hidden bg-sky-950">
                <div className="flex h-full flex-col xl:flex-row ">

                    <Sidebar navigation={NAVIGATION} />

                    <main className="flex-1 h-full overflow-hidden">
                        <div className="mx-auto flex h-full w-full max-w-7xl flex-col p-4 lg:p-8">
                            <section className="flex-1 overflow-y-auto rounded-2xl border border-white/10 bg-purple-400/20 p-4 shadow-2xl shadow-slate-950/30 sm:p-6 lg:p-8 ">
                                <Outlet />
                            </section>
                        </div>
                    </main>

                </div>
            </div>

        </TodoProvider>
    )
}