import ReviewsBox from "./ReviewsBox"
import { createNewDeviceReviewAC, createNewDeviceReviewThunkCreator, deleteTextFromNewReviewAC, getDeviceReviewsThunkCreator } from "../../store/reviewsReducer"
import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"


const ReviewsBoxContainer = (props) =>{
    let dispatch = useDispatch()
    useEffect(()=>{
        props.getDeviceReviewsThunkCreator(props.deviceId)
     
    },[props.newReview])
    useEffect(()=>{
        return ()=>{
            dispatch(deleteTextFromNewReviewAC())
        }
    },[])
    return(
        <ReviewsBox  reviews={props.reviews} create = {props.createNewDeviceReviewThunkCreator} 
        userId={props.userId} deviceId = {props.deviceId} userName = {props.userName} updateAC = {props.createNewDeviceReviewAC}
        newReview = {props.newReview} isLogin = {props.isLogin}/>
    )
}


const mapStateToProps = (state) =>{
    return{
        reviews : state.reviews.reviews,
        userId : state.user.userID,
        userName : state.user.email,
        newReview : state.reviews.newReview,
        isLogin : state.user.isLogin
    }
}




export default connect(mapStateToProps,{getDeviceReviewsThunkCreator,deleteTextFromNewReviewAC,
    createNewDeviceReviewThunkCreator,createNewDeviceReviewAC})(ReviewsBoxContainer)