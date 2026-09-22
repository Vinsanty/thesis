import { connect } from "react-redux"
import Header from "./Header"
import { getTypesThunkCreator } from "../../store/typeReducer"
import { useEffect } from "react"
import { setSearchAC } from "../../store/deviceReducer"



const HeaderContainer = (props) =>{

    useEffect(()=>{
        props.getTypesThunkCreator()
    },[])

    if(props.allTypes){
        return(
            <Header allTypes = {props.allTypes.allTypes} role={props.role} isLogin={props.isLogin} search={props.search} setSearch={props.setSearchAC}/>
        )
    }
    
}

const mapStateToProps=(state) =>{
    return {
        allTypes:state.types,
        role: state.user.role,
        isLogin: state.user.isLogin,
        search: state.devices.search
    }
}




export default connect(mapStateToProps,{getTypesThunkCreator,setSearchAC})(HeaderContainer)