import { createBrowserRouter } from "react-router";

import { Home } from "../app/home/home";
import { DashboardLayout } from "../common/layouts/dashboard-layout";
import todo from "../app/todo/todo";
import { Component } from "react";
import { RickAndMorty } from "../app/rick-and-morty/rick-and-morty";
import { Character } from "../app/rick-and-morty/character";
import { Pokemon } from "../app/pokemon/pokemon";
import ZustandExample from "../app/zustand-example/zustand-example";
import { Login } from "../app/login/login";
import { ProtectedRoute } from "../features/pages/auth/components/protected-route";



export const router = createBrowserRouter([

  {
    path: "/login",
    Component: Login
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "todo",
            Component: todo,
          },
          {
            path: "zustand",
            Component: ZustandExample,
          },
          {
            path: "rick-and-morty",
            Component: RickAndMorty 
          },
          {
            path: "/character/:characterId",
            Component: Character 
          },
          {
            path: "pokemon",
            Component: Pokemon
          }
        ],
      },
    ]
  },
]);