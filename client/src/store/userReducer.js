import { userAPI } from "../api/api"

const LOGIN_DATA = "LOGIN_DATA"
const ERROR_MESSAGE = "ERROR_MESSAGE"
const LOGAUT = "LOGAUT"
const REGISTRATION = "REGISTRATION"

const initialStaet = {
    email:null,
    isLogin:false,
    role:null,
    userID:null,
    errMessage:'',
    reg:false
}



const userReducer = (state=initialStaet,action) =>{
    switch(action.type){
        case LOGIN_DATA:{
            return {
                email:action.data.email,
                isLogin:true,
                role:action.data.role,
                userID: action.data.id,
                reg:false
            }
        }
        case ERROR_MESSAGE:{
            return{
                errMessage: action.message
            }
        }
        case LOGAUT:{
            return{
                isLogin:false,
                email:null,
                userID:null,
                role:null,
                reg:false
            }
        }
        case REGISTRATION:{
            return{...state,
                reg:true
            }
        }
        default:
            return state
    }
}

const loginAC = (data) =>{
    return{type:LOGIN_DATA,data}
}

const errorAC = (message) =>{
    return{type:ERROR_MESSAGE,message}
}

const regAC = () =>{
    return {type:REGISTRATION}
}

export const logautAC = () =>{
    return {type:LOGAUT}
}


export const loginThunkCreator = (email,pass) => async dispatch =>{
    let resp = await userAPI.login(email,pass)
    if (resp.data.id){
        dispatch(loginAC(resp.data))
    }else{
        dispatch(errorAC(resp.data))
    }
    
} 

export const registrationThunkCreator = (email,pass) => async dispatch =>{
    let resp = await userAPI.registration(email,pass)
    if (resp.data.id){
        dispatch(regAC())
    }else{
        dispatch(errorAC(resp.data))
    }

}


export default userReducer