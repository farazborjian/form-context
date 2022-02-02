import React, { createContext, useContext, useState } from 'react'

const ValueContext = createContext();

export const useValue = () => useContext(ValueContext)
    
const ValueProvider = ({children}) => {
    const [val, setVal] = useState(null);
    return <ValueContext.Provider value={{val, setVal}}>{children}
    </ValueContext.Provider>
}

export default ValueProvider