import { useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../components/Login/Firebase/Firebase.init';


initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const singInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);

                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => { //amra jodi unsubscribed function use na kori tahole eta error throw koreb
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }

            setIsLoading(false);

        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        }).catch((error) => {
            setUser(error);
        })
            .finally(() => setIsLoading(false));
    }


    return {
        singInUsingGoogle,
        user,
        isLoading,
        logout
    }
}

export default useFirebase;