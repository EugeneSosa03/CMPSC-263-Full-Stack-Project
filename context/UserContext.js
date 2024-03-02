import React, {useState, useContext, createContext} from 'react';

const UserContext = createContext();


export function StateContext({children}){
    const [user, setUser] = useState(null);



return (
    <UserContext.Provider value = {{user, setUser}}>
        {children}
    </UserContext.Provider>
)

}

export const useStateContext = () => useContext(UserContext);
