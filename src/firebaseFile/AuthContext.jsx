import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { signInWithEmailAndPassword , createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider} from "firebase/auth";


export const fireContext = createContext(null)

       const Gprovider = new GoogleAuthProvider()

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{

      return createUserWithEmailAndPassword(auth, email, password)

    }


    const signIn = (email, password) => {
      
        
        return signInWithEmailAndPassword(auth, email, password)
  
      } 
    
      const signGoogle = () => {
       
        return signInWithPopup(auth, Gprovider)
    }

    const logOut = () => {
    
        signOut(auth)
    }  




     /////////////
    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
         })
         return() => {
            unSubscribe();
         }
         } , [])
    
        ///////////////  

   
    const authInfo = {user, createUser, signIn, signGoogle, logOut  }

 

    return (
        <div>

            <fireContext.Provider value={authInfo} >

            {children}

            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;