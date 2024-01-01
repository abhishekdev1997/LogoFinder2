import React, { ReactNode, createContext } from "react";
import { useValueReducer } from "../hooks";

export const MyContext = createContext<any>({ value: "" });

type ProviderProps = {
    children: ReactNode
}



const Provider = ({ children }: ProviderProps) => {
    const initialState = {
        value: "",
        currentIndex: 0,
        isOver: false,
        score: 0
    }

    const [value, dispatch] = useValueReducer(initialState);



    return (
        <MyContext.Provider value={{ value: value, dispatch }}>
            {children}
        </MyContext.Provider>
    )
}

export default Provider;