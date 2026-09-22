import { connect } from "react-redux"
import HomePage from "./HomePage"
import { getDevicesThunkCreator } from "../../store/deviceReducer"
import { useEffect } from "react"
import { setNewBasketDeviceThunkCreator } from "../../store/basketReducer"





const HomePageContainer = (props) =>{
    useEffect(()=>{
        props.getDevicesThunkCreator()
    },[])
    
    return (
        <HomePage devices={props.devices} addDevice = {props.setNewBasketDeviceThunkCreator}
            allTypes = {props.allTypes} isLogin = {props.isLogin} basketId={props.basketId} search={props.search}/>
    )
}

const mapStateToProps=(state) =>{
    return {
        devices: state.devices.devices,
        allTypes: state.types.allTypes,
        isLogin: state.user.isLogin,
        basketId: state.basket.basketId,
        search : state.devices.search
    }
}

export default connect(mapStateToProps,{getDevicesThunkCreator,setNewBasketDeviceThunkCreator})(HomePageContainer)