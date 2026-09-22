import { connect } from "react-redux"
import Auth from "./Auth"
import { loginThunkCreator} from "../../store/userReducer"
import { Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setBasketIdAC } from "../../store/basketReducer"

const AuthContainer = (props) =>{
    let dispatch = useDispatch()
    dispatch(setBasketIdAC(props.userId))

    if(props.user){
        return <Navigate to={'/'}/>
    }
    return(
        <Auth login = {props.loginThunkCreator} user={props.user} error={props.error}/>
    )
}

const mapStateToProps = (state) =>{
    return{
        user: state.user.isLogin,
        error: state.user.errMessage,
        userId : state.user.userID,
       
    }
}



export default connect(mapStateToProps,{loginThunkCreator})(AuthContainer)