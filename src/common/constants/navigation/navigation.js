import { Brain, FlaskConical, House, ListTodo, User, Zap } from "lucide-react";

export const NAVIGATION = [
    {
        id: 1,
        title: "Home",
        path: "/",
        Icon: House
    },
    {
        id: 2,
        title: "Zustand",
        path: "zustand",
        Icon: Brain
    },
    {
        id: 3,
        title: "Todo app",
        path: "todo",
        Icon: ListTodo
    },
    {
        id: 4,
        title: "Rick and Morty",
        path: "rick-and-morty",
        Icon: FlaskConical
    },
    {
        id: 5,
        title: "Pokemon",
        path: "pokemon",
        Icon: Zap
    },
]