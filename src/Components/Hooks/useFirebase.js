import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // sign in with google button click 
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

    // sign in using email and password 
    const handleSubmitForm = e => {
        // e.preventDefault();
        const { email, password } = e;
        return createUserWithEmailAndPassword(auth, email, password);

    }

    // update user profile name 
    const handleUpdateProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {
            setUser(result.user);
        })
            .catch(error => {
                setError(error.message);
            })
    }

    // log in using email and password
    const handleLoginForm = e => {
        const { email, password } = e;
        return signInWithEmailAndPassword(auth, email, password);
    }

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
        handleSubmitForm,
        handleLoginForm,
        handleUpdateProfile
    }

};

export default useFirebase;