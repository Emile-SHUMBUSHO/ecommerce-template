import { createContext, useState, useEffect } from "react";
import { onUserAuthStateChanged, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        onUserAuthStateChanged(async(user) => {
            setCurrentUser(user);
            await createUserDocumentFromAuth(user);
        })
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}