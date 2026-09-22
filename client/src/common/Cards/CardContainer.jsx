import { connect } from "react-redux"
import Card from "./Card"
import { setNewBasketDeviceThunkCreator } from "../../store/basketReducer"



const CardContainer = (props) =>{

    const setNewBasketDevice =()=>{
        props.setNewBasketDeviceThunkCreator(props.basketId,props.id)
    }

    return(
        <Card name={props.name} price={props.price} img={props.img} id={props.id} addNewDevice={setNewBasketDevice} isLogin={props.isLogin}/>
    )
}

const mapStateToProps = (state) =>{
    return{
        basketId: state.basket.basketId,
        isLogin : state.user.isLogin
    }
}



export default connect(mapStateToProps,{setNewBasketDeviceThunkCreator})(CardContainer)