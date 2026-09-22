import { connect } from "react-redux"
import DevicePage from "./DevicePage"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { deleteDeviceThunkCreator, getSelectedDeviceThunkCreator } from "../../store/deviceReducer"
import { setNewBasketDeviceThunkCreator } from "../../store/basketReducer"





const DeviceContainer = (props) =>{
    let param = useParams().id
    useEffect(()=>{
        props.getSelectedDeviceThunkCreator(param)
    },[])
   
    console.log(props.reviews)
    if(props.selectedDevice.info){
        return(
            <DevicePage info = {props.selectedDevice.info} img={props.selectedDevice.img} name={props.selectedDevice.name}
                price ={props.selectedDevice.price} deviceId={param} addDevice={props.setNewBasketDeviceThunkCreator}
                basketId = {props.basketId} role={props.role} deleteDevice={props.deleteDeviceThunkCreator} isLogin={props.isLogin}/>
        )
    }
    
}


const mapStateToProps = (state) =>{
    return{
        selectedDevice : state.devices.selectedDevice,
        reviews : state.reviews.reviews,
        userId : state.user.userID,
        role : state.user.role,
        userName : state.user.email,
        newReview : state.reviews.newReview,
        basketId: state.basket.basketId,
        isLogin: state.user.isLogin
    }
}




export default connect(mapStateToProps,{getSelectedDeviceThunkCreator,setNewBasketDeviceThunkCreator,deleteDeviceThunkCreator})(DeviceContainer)