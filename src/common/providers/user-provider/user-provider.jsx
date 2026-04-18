import { createContext, useContext, useState } from "react";

const userObj = { 
    id: 1, 
    name: "Leandro", 
    avatar: "https://avatars.githubusercontent.com/u/233307803?v=4", 
    role: "admin"
}

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(userObj)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context){
        throw new Error("useUser has to be used inside to UserProvider")
    }

    return context
}