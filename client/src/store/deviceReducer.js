import { devicesAPI } from "../api/api"


const GET_ALL_DEVICES = 'GET_ALL_DEVICES'
const GET_SELECTED_DEVICE_INFO = "GET_SELECTED_DEVICE_INFO"
const SET_SEARCH = 'SET_SEARCH'


const initialState = {
    devices : [],
    selectedDevice:[],
    search:null
}


const deviceReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_DEVICES:{
            return {
                ...state,
                devices:action.data
            }
        }
        case GET_SELECTED_DEVICE_INFO:{
            return {
                ...state,
                selectedDevice: action.data
            }
        }
        case SET_SEARCH:{
            return {
                ...state, search:action.data
            }
        }
        default:
            return state
    }
}

const getAllDevicesAC = (data) =>{
    return {type:GET_ALL_DEVICES,data}
}

const getSelectedDeviceInfoAC = (data) =>{
    return {type:GET_SELECTED_DEVICE_INFO,data}
}

export const setSearchAC = (data) =>{
    return {type:SET_SEARCH,data}
}


export const getAllDevicesThunkCreator = (id) => async dispatch =>{
    let resp = await devicesAPI.getAllTypedDevices(id)
    dispatch(getAllDevicesAC(resp.data.rows))
}

export const getSelectedDeviceThunkCreator = (id) => async dispatch =>{
    let resp = await devicesAPI.getSelectedDevice(id)
    dispatch(getSelectedDeviceInfoAC(resp.data))
}

export const getDevicesThunkCreator = () => async dispatch=>{
    let resp = await devicesAPI.getAllDevices()
    dispatch(getAllDevicesAC(resp.data.rows))
}

export const deleteDeviceThunkCreator = (deviceId) => async dispatch =>{
    await devicesAPI.deleteDevice(deviceId)
}

export default deviceReducer