import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

// Firebase Initialize
initializeAuthentication();

// Google Provider
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // Firebase Auth
    const auth = getAuth();

    // Hangle Google Signin
    const signInGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    // Manage User In State Change
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

    // Auth LogOut Handler
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
