import axios from "axios";

const LOGIN = "user/LOGIN"
const LOGOUT = "user/LOGOUT"

export function UserLogIn (user){
    console.log("UserLogIn");
    return {type: LOGIN, user}
}

export function UserLogOut (user){
    console.log("LOGOUT");
    return {type: LOGOUT, user}
}

const initialState = {
    user : {nickname: null},
    isLogin : false,
    token:""
}

const loginDB = (email, password) => {
    axios
        .post("http://warmwinter.co.kr/api/member/login",{
            email,
            password
        })
        .then((response) => {
            console.log(response)
            dispatch(LOGIN({
                isLogin: true,
                token: response.data.token,
            }));
            setCookie("Authorization", response.data.token);
            setCookie("nickname", response.data.nickname);
        })
        .catch (function(error){
            console.log(error)
        })
}