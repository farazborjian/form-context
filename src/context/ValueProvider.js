import React, { createContext, useContext, useState, useMemo } from 'react'

const ValueContext = createContext();

export const useValue = () => {
    const context = useContext(ValueContext)
    return context
}



const ValueProvider = ({children}) => {
    const [val, setVal] = useState('');
    
    const valueObject = useMemo(() => {
        return { val, setVal }
    }, [val, setVal])
    return <ValueContext.Provider value={valueObject}>{children}
    </ValueContext.Provider>
}

export default ValueProvider