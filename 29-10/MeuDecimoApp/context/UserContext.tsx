import React, { createContext, ReactNode, useContext, useState } from "react";

interface IUser {
    nome: string;
}

interface IUserContext {
    user: IUser | null,
    setUsuario: React.Dispatch<React.SetStateAction<IUser | null>>
}

// Criar o contexto
const userContext = createContext<IUserContext | undefined>(undefined)

// Hook personalizado
export const useUser = (): IUserContext => {
    const user = useContext(userContext);
    
    if (!user) {
        throw new Error("Deu erro mané")
    }

    return user;
}

export const UserProvider = (props: {children: ReactNode}) => {
    const [user, setUsuario] = useState<IUser | null>(null)

    return (
        <userContext.Provider value={{user, setUsuario}}>
            {props.children}
        </userContext.Provider>
    )
} 