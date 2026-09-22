import { typesAPI } from "../api/api"

const GET_TYPES = 'GET_TYPES'
const SET_SELECTED_TYPE = 'SET_SELECTED_TYPE'

const initialState = {
    allTypes:[],
    selectedType:null
}



const typeReducer = (state=initialState,action) =>{
    switch(action.type){
        case GET_TYPES:
            return{
                ...state,
                allTypes:action.data
            }
        case SET_SELECTED_TYPE:
            return{
                ...state,
                selectedType:action.value
            }    
        default:
            return state
    }
}



const getTypesAC = (data) =>{
    return {type:GET_TYPES,data}
}

export const setSelectedTupeAC = (value) =>{
    return {type:SET_SELECTED_TYPE,value}
}

export const getTypesThunkCreator = () => async dispathc =>{
    let resp = await typesAPI.getTypes()
    dispathc(getTypesAC(resp.data))
}





export default typeReducer