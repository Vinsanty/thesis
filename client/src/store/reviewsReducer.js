import { reviewsAPI } from "../api/api"

const SET_DEVICE_REVIEWS = 'SET_DEVICE_REVIEWS'
const CREATE_NEW_REVIEW = 'CREATE_NEW_REVIEW'
const DELETE_TEXT_FROM_NEW_REVIEW = 'DELETE_TEXT_FROM_NEW_REVIEW'


const initialState = {
    reviews:[],
    newReview : ''
}




const reviewsReducer = (state=initialState,action)=>{

    switch(action.type){
        case SET_DEVICE_REVIEWS:{
            return{...state, reviews : action.data}
        }
        case CREATE_NEW_REVIEW:{
            return {...state, newReview:action.text}
        }
        case DELETE_TEXT_FROM_NEW_REVIEW:{
            return {...state,newReview: ''}
        }
        default:{
            return state
        }
    }
}

const setDeviceReviewsAC = (data) =>{
    return {type:SET_DEVICE_REVIEWS, data}
}

export const createNewDeviceReviewAC = (text) =>{
    return {type:CREATE_NEW_REVIEW,text}
}

export const deleteTextFromNewReviewAC = () =>{
    return {type: DELETE_TEXT_FROM_NEW_REVIEW}
}

export const getDeviceReviewsThunkCreator = (deviceId) => async dispatch =>{
    let resp = await reviewsAPI.getDeviceReviews(deviceId)
    dispatch(setDeviceReviewsAC(resp.data))
    
}

export const createNewDeviceReviewThunkCreator = (text,userId,deviceId,userName) => async dispatch =>{
    await reviewsAPI.createDeviceReview(text,userId,deviceId,userName)
    dispatch(deleteTextFromNewReviewAC())
}

export default reviewsReducer