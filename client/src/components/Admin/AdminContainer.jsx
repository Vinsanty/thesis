import { connect } from "react-redux"
import Admin from "./Admin"
import { useEffect } from "react"
import { getAllBrnadsThunkCreator } from "../../store/brandReduser"
import { createNewDeviceThunkCreator, getAllOrdersThunkCreator } from "../../store/adminReducer"




const AdminContainer = (props) =>{
    useEffect(()=>{
        props.getAllBrnadsThunkCreator()
        props.getAllOrdersThunkCreator()
    },[])

    return (
        <Admin brands={props.brands.allBrands} types={props.types.allTypes} createDevice={props.createNewDeviceThunkCreator}
         allOrders = {props.allOrders}/>
    )
}

const mapStateToProps = (state) =>{
    return{
        types: state.types,
        brands:state.brands,
        allOrders : state.admin.allOrders
    }
}


export default connect(mapStateToProps,{getAllBrnadsThunkCreator,createNewDeviceThunkCreator,getAllOrdersThunkCreator})(AdminContainer)