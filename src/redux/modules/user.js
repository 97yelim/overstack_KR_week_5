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
    const userDB = {email,password}
    return ()=>{
        axios.post('http://warmwinter.co.kr/api/member/login',userDB)
        console.log(userDB)
        .then((response)=>{
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('email', response.data.email)
            localStorage.setItem('password', response.data.password)
            UserLogIn({
                email, password
            })
            window.alert('로그인 완료')
            /* window.location.replace("/") */
        })
        .catch((error)=>{
            alert(error.response.data.alert)
        })
    }
}




export default loginDB;