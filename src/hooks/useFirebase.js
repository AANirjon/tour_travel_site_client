import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

// firebase initialize
initializeAuthentication();

// google provider
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // firebase Auth
    const auth = getAuth();

    // hangle google signin
    const signInGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    // Manage user in state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth]);

    // Auth logOut handler
    const logOut = () => {
        signOut(auth).then(() => setUser({}));
    };

    return {
        user,
        signInGoogle,
        logOut,
        setUser,
        isLoading,
        setIsLoading,
    };
};

export default useFirebase;
