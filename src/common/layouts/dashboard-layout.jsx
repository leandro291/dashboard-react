import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/sidebar";
import { TodoProvider } from "../../features/pages/todo/context/todo-context";
import { UserProvider } from "../providers/user-provider/user-provider";

export function DashboardLayout() {
  return (
    <TodoProvider>
      <UserProvider>
        <div className="min-h-screen bg-slate-950 text-slate-100">
          <div className="flex min-h-screen flex-col lg:flex-row">
            <Sidebar />

            <main className="flex-1">
              <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col p-4 lg:p-8">
                <section className="mt-6 flex-1 rounded-2xl border border-white/10 bg-blue-900/20 p-4 shadow-2xl shadow-slate-950/30 sm:p-6 lg:p-8">
                  <Outlet />
                </section>
              </div>
            </main>
          </div>
        </div>
      </UserProvider>
    </TodoProvider>
  );
}