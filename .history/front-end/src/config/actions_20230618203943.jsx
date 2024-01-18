import { LoginContext } from "./LoginContext";

const { userData, setUserData } = useContext(LoginContext);
export var UserEmail = ()=>{
    return userData.email
}