import { basketAPI, devicesAPI, ordersAPI } from "../api/api"

const SET_BASKET_ID = 'SET_BASKET_ID'
const SET_BASKET_DEVICES = 'SET_BASKET_DEVICES'
const SET_DEVICES_INFO = 'SET_DEVICES_INFO'
const UNSET_DEVICE_INFO = 'UNSET_DEVICE_INFO'
const DELETE_DEVICE = 'DELETE_DEVICE'

const initialState = {
    basketId:'',
    basketDevices:[],
    basketDevicesInfo:[]
}


const basketReducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_BASKET_ID:
            return {...state,basketId:action.id}
        case SET_BASKET_DEVICES:
            return {...state,basketDevices:action.data}
        case SET_DEVICES_INFO:
            return {...state,
                basketDevicesInfo:[...state.basketDevicesInfo,action.data]}
        case UNSET_DEVICE_INFO:
            return {...state,basketDevices:[],basketDevicesInfo:[]}
        case DELETE_DEVICE:
            return{
                ...state,
                basketDevicesInfo: state.basketDevicesInfo.filter((i)=>{
                    if(i.id !== action.id){
                        return {...i}
                    }
                })
            }
        default:
            return state
    }
}



export const setBasketIdAC = (id)=>{
    return{type:SET_BASKET_ID,id}
}

const setBasketDevicesAC = (data) =>{
    return {type:SET_BASKET_DEVICES,data}
}

const setBasketDevicesInfoAC = (data)=>{
    return{type:SET_DEVICES_INFO,data}
}

const deleteDeviceAC = (id) =>{
    return {type:DELETE_DEVICE,id}
}

export const unsetBasketDevicesAC = ()=>{
    return{type:UNSET_DEVICE_INFO}
}

export const getBasketDevicesThunkCreator = id => async dispatch=>{
    let resp = await basketAPI.getBasketDevices(id)
    dispatch(setBasketDevicesAC(resp.data))
}

export const setNewBasketDeviceThunkCreator = (basketId,deviceId) => async dispatch =>{
    await basketAPI.setBasketDevice(basketId,deviceId)
}

export const getDevicesInfoThunkCreator = (deviceId) => async dispatch =>{
    let resp = await devicesAPI.getSelectedDevice(deviceId)
    dispatch(setBasketDevicesInfoAC(resp.data))
    console.log(resp.data)
}

export const deleteBasketDeviceThunkCreator = (basketId,deviceId) => async dispatch =>{
    await basketAPI.deleteBasketDevice(basketId,deviceId)
    dispatch(deleteDeviceAC(deviceId))
}

export const createOrderThunkCreator = (address,userId,deviceId) => async dispatch =>{
    await ordersAPI.createOrder(address,userId,deviceId)
}


export default basketReducer