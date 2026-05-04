import { Atom, Globe, Palette, Database, Zap, Layout } from "lucide-react";

export const TECHNOLOGIES = [ 
    {
        id: 1,
        Icon: Atom,
        title: "Frontend Core",
        description: "Desarrollo de interfaces reactivas y modulares con React, aplicando hooks personalizados para la lógica de negocio.",
    },
    {
        id: 2,
        Icon: Database,
        title: "State Management",
        description: "Gestión de estado global con Zustand, permitiendo un flujo de datos centralizado, ligero y sin 'prop drilling'.",
    },
    {
        id: 3,
        Icon: Globe,
        title: "Data Fetching",
        description: "Consumo de APIs REST (PokéAPI, Rick & Morty) mediante Axios, con normalización de respuestas y manejo de errores.",
    },
    {
        id: 4,
        Icon: Palette,
        title: "Modern Styling",
        description: "Estilizado con Tailwind CSS y animaciones interactivas",
    },
    {
        id: 5,
        Icon: Layout,
        title: "Routing & Navigation",
        description: "Navegación fluida entre secciones (Home, Pokémon, Personajes) implementada con React Router DOM.",
    },
    {
        id: 6,
        Icon: Zap,
        title: "Clean Architecture",
        description: "Estructura de proyecto basada en una arquitectura feature / app, separando servicios, hooks, componentes y utilitarios.",
    },
]