import { brandAPI } from "../api/api"
const GET_ALL_BRANDS = 'GET_ALL_BRANDS'

const initialState = {
    allBrands:[]
}



const brandReducer = (state = initialState,action)=>{
    switch(action.type){
        case GET_ALL_BRANDS:
            return {
                ...state,
                allBrands:action.data
            }
        default:
            return state
    }
}



const getBrandsAC = (data) =>{
    return {type:GET_ALL_BRANDS,data}
}


export const getAllBrnadsThunkCreator = () => async dispatch =>{
    let resp = await brandAPI.getBrands()
    dispatch(getBrandsAC(resp.data))
}


export default brandReducer

