import {createContext, useState} from 'react';

export const NavContext = createContext();

export const NavProvider = (props) => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    
    return(
        <NavContext.Provider value={{ isNavVisible, setIsNavVisible }}>
            {props.children}
        </NavContext.Provider>
    )
}