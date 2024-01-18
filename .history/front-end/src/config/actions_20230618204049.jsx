import { LoginContext } from "./LoginContext";
import { useContext } from "react";
const { userData, setUserData } = useContext(LoginContext);
export var UserEmail = ()=>{
    return userData.email
}