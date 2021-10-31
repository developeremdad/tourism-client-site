import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    // sign in with google button click 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    };


    // log out when button click 
    const handleLogOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then((result) => {
                setUser({});
            })
            .finally(() => setIsLoading(false));

    };

    // always keep user update profile
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return {
        handleGoogleLogin,
        user,
        setUser,
        isLoading,
        setIsLoading,
        error,
        setError,
        handleLogOut,
    }

};

export default useFirebase;