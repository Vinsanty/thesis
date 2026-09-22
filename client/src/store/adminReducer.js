import { brandAPI, devicesAPI, ordersAPI, typesAPI } from "../api/api"

const GET_ALL_ORDERS = 'GET_ALL_ORDERS'

const initialState = {
    allOrders:null
}

const adminRouter = (state=initialState,action) =>{
    switch(action.type){
        case GET_ALL_ORDERS:{
            return{...state, allOrders: action.data}
        }
        default:
            return state
    }
}

const getAllOrdersAC = (data)=>{
    return {type:GET_ALL_ORDERS,data}
}


export const createNewTypeThunkCreator = (value,en) => async dispatch =>{
    await typesAPI.postType(value,en)
}

export const createNewBrandThunkCreator = (value) => async dispatch =>{
    await brandAPI.createNewBrand(value)
}

export const createNewDeviceThunkCreator = (fromData) => async dispatch =>{
    await devicesAPI.createDevice(fromData)
}

export const getAllOrdersThunkCreator = () => async dispatch =>{
    let res = await ordersAPI.getAllOrders()
    dispatch(getAllOrdersAC(res.data))
}



export default adminRouter
