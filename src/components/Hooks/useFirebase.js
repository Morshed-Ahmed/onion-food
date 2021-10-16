import initializeFirebaseApp from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebaseApp();
const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [error, setError] = useState()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            }).catch(error => {
                setError(error.message)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            } else {
                setError('')
            }
        });


    }, [])

    const hendleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError("")
        });
    }

    return {
        signInWithGoogle, user, error, hendleLogout
    }
}

export default useFirebase;