import { useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import initializeAuthentication from '../components/Login/Firebase/Firebase.init';


initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState({});
    const [isLogin, setisLogin] = useState(true);
    const [mail, setMail] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    const singInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const loggedInUser = result.user;
                setUser(loggedInUser);

                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const singInUsingFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                console.log(result.user);
                const loggedInUser = result.user;
                setUser(loggedInUser);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const singInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
            })

            .catch(error => {
                setError(error.message)
            })

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => { //amra jodi unsubscribed function use na kori tahole eta error throw koreb
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }

            setisLogin(false);

        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        setisLogin(true);
        signOut(auth).then(() => {

        }).catch((error) => {
            setUser(error);
        })
            .finally(() => setisLogin(false));
    }

    const handleRegister = e => {
        e.preventDefault();//prevent default ke upore na dile error er dile seta dhorar age reload hoye jabe
        //password length validation
        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }
        //password regex test
        if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            setError('Password should be minimum 6 characters, at least one letter and one number');
            return;
        }
        isLogin ? loginRegisterUser(mail, password) : registeruser(mail, password);

    }
    // register new user
    const registeruser = (mail, password) => {
        createUserWithEmailAndPassword(auth, mail, password)
            .then((result) => {
                const user = result.user;
                verifyUserMail();
                updateUserName();
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    //set user name
    const updateUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: userName
        }).then(() => { })
            .catch((error) => {
                setError(error.message);
            })
    }

    //login register user
    const loginRegisterUser = (mail, password) => {
        signInWithEmailAndPassword(auth, mail, password)
            .then((result) => {
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })

    }
    //mail address verfication email
    const verifyUserMail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setError('verificaition mail has been sent to your mail');
            })
    }
    const handleUserName = e => {
        setUserName(e.target.value);
    }


    const handleEmail = e => {
        setMail(e.target.value);
    }
    const handlePass = e => {
        setPass(e.target.value);
    }
    const handleConfirmPass = e => {
        const confirmPass = e.target.value;
        if (password === confirmPass) {
            setError('');
        }
        else {
            setPass('');
            setError('Password is not matched');
        }
    }

    const toggleLogin = e => {
        setisLogin(e);
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, mail)
            .then(() => {
            })
        setError('pass reset mail is sent');
    }



    return {
        singInUsingGoogle,
        singInUsingFacebook,
        singInUsingGithub,
        user,
        isLogin,
        logout,
        handleRegister,
        handlePasswordReset,
        handleUserName,
        handleEmail,
        handlePass,
        error,
        loginRegisterUser,
        handleConfirmPass,
        toggleLogin
    }
}

export default useFirebase;