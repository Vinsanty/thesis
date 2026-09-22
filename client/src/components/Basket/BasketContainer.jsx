import { connect, useDispatch } from "react-redux"
import Basket from "./Basket"
import { createOrderThunkCreator, deleteBasketDeviceThunkCreator, getBasketDevicesThunkCreator, getDevicesInfoThunkCreator, unsetBasketDevicesAC } from "../../store/basketReducer"
import { useEffect } from "react"




const BasketContainer = (props) =>{
    let dispatch = useDispatch()
    useEffect(()=>{
        props.getBasketDevicesThunkCreator(props.basketId)
        return ()=>{
            dispatch(unsetBasketDevicesAC())
        }
    },[props.deviceId])

    useEffect(()=>{
        if(props.basketDevices){
            props.basketDevices.map((i)=>{
                props.getDevicesInfoThunkCreator(i.deviceId)
            })
        }
    },[props.basketDevices])

  
    if(props.basketDevicesInfo){
        return(
            <Basket info = {props.basketDevicesInfo} basketId={props.basketId} delete={props.deleteBasketDeviceThunkCreator}
            createOrder={props.createOrderThunkCreator} userId ={props.userId}/>
        )
    }
    
}

const mapStateToProps = (state) =>{
    return{
        isLogin : state.user.isLogin,
        basketId: state.basket.basketId,
        basketDevices: state.basket.basketDevices,
        basketDevicesInfo: state.basket.basketDevicesInfo,
        userId: state.user.userID
    }
}




export default connect(mapStateToProps,{getBasketDevicesThunkCreator,getDevicesInfoThunkCreator,deleteBasketDeviceThunkCreator,
    createOrderThunkCreator})(BasketContainer)