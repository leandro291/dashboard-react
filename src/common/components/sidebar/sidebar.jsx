import { Link } from "react-router";
import { UserSection } from "./user-section";

export default function Sidebar() {
  return (
    <aside className="lg:w-80 lg:min-h-screen bg-blue-400/10 backdrop-blur-xl border-white/10 border-b lg:border-r lg:border-b-0">
      <div className="flex h-full flex-col px-5 py-6 lg:px-6">

        <div className="mt-8">
          <UserSection />
        </div>

        <div className="mt-8">
          <h2 className="px-3 text-xs font-medium uppercase text-slate-500">
            Navigation
          </h2>

          <nav className="mt-4 space-y-2 gap-4 flex lg:flex-col">
            <Link to="/">Home</Link>

            <Link to="about-me">About Me</Link>

          </nav>

          <h2 className="mt-4 mb-2 px-3 text-xs font-medium uppercase text-slate-500">
            Todo App
          </h2>

          <nav className="space-y-2 gap-4 flex lg:flex-col">
            <Link to="todo">Todo App</Link>
            <Link to="description">- Todo List</Link>
          </nav>

        </div>
      </div>
    </aside>
  );
}