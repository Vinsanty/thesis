import Auth from "./Auth"
import { registrationThunkCreator } from "../../store/userReducer"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"




const RegContainer = (props) =>{


    if(props.isReg){
        return <Navigate to={'/'}/>
    }
    return(
        <Auth reg={props.reg} registration={props.registrationThunkCreator} error={props.error}/>
    )
}

const mapStateToProps = (state) =>{
    return{
        isReg: state.user.reg,
        error: state.user.errMessage
    }
}



export default connect (mapStateToProps,{registrationThunkCreator})(RegContainer)