import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, ReactNode, useContext, useState } from 'react'

interface ITema {
    temaEscuro: boolean,
    setTemaEscuro: React.Dispatch<React.SetStateAction<boolean>>
}

const TemaContext = createContext<ITema | undefined>(undefined);


export const TemaProvider = (props: { children: ReactNode}) => {
    const [temaEscuro, setTemaEscuro] = useState(false);
    
    return (
        <TemaContext.Provider value={{ temaEscuro, setTemaEscuro}}>
            {props.children}
        </TemaContext.Provider>
    )
}

export const useTema = () => {
    const contexto = useContext(TemaContext);
    if(!contexto) {
        throw new Error("useTema deve ser usado dentro de um Tema Provider")
    }
    return contexto;
}