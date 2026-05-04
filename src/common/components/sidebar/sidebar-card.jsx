import React from 'react'
import { Link, NavLink } from 'react-router'

export function SidebarCard({ title, path, Icon }) {
    return (
        <li>
            <NavLink 
                to={path}
                className={({ isActive }) => 
                    `flex items-center gap-3 rounded-lg transition-colors py-4 px-2 ${
                        isActive 
                        ? "bg-primary text-white font-bold"
                        : "text-black hover:bg-gray-100"
                    }`
                }
            >
                <Icon size={25} /> 
                <span>{title}</span>
            </NavLink>
        </li>
    )
}
