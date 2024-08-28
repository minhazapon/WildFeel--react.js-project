import { useContext } from "react";
import { fireContext } from "./AuthContext";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user} = useContext(fireContext)

    if(user){

        return children
    
       }
   
       return <Navigate to="/in" ></Navigate>
            
};

export default PrivateRoute;