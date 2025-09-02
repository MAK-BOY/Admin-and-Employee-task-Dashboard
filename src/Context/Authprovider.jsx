import React, { createContext, useState, useEffect } from 'react'
import { getlocalstorage } from '../Utils/LocalStorage' // Assuming getlocalstorage is defined here

export const Authcontext = createContext();

const Authprovider = ({ children }) => {
    const [userdata, setuserdata] = useState(null);

    useEffect(() => {
        // Provide a default empty object in case getlocalstorage returns undefined
        const { employees, admin } = getlocalstorage() || {};
        setuserdata({ employees, admin });
    }, []);

    return (
        <div>
            <Authcontext.Provider value={userdata}>
                {children}
            </Authcontext.Provider>
        </div>
    );
}

export default Authprovider;
