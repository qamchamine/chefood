import { LoginContext } from "./LoginContext";
import { useContext } from "react";
export var UserEmail = ()=>{
    const { userData, setUserData } = useContext(LoginContext);
    return userData.email
}