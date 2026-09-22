import CategoryPage from "./CategoryPage"
import { connect } from "react-redux"
import { useEffect } from "react"
import { getAllDevicesThunkCreator } from "../../../store/deviceReducer"


const CategoryContainer = (props) =>{
    useEffect(()=>{
        props.getAllDevicesThunkCreator(props.typeId)
    },[props.typeId])
    
    if(props.devices){
        return(
            <CategoryPage devices= {props.devices} type = {'Смартфон'}/>
        )
    }
    
}

let mapStateToProps = (state) =>{
    return{
        devices:state.devices,
        typeId: state.types.selectedType
    }
}


export default connect(mapStateToProps,{getAllDevicesThunkCreator})(CategoryContainer)