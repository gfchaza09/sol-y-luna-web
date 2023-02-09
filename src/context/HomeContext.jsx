import { createContext, useState } from 'react';

export const HomeContext = createContext();

const HomeContextProvider = ({children}) => {
    
    const [localList, setLocalList] = useState(["centro", "boulevard", "alcanfores"]);

    const setInfo = (local) => {
        if(localList[local]) {
            console.log("Seleccionaste el local ubicado en: "+ localList[local])
        }
    }

    return (
        <HomeContext.Provider value={{localList}}>
            {children}
        </HomeContext.Provider>
    );
};

export default HomeContextProvider;