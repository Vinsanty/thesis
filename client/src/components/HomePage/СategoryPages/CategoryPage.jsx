import CardContainer from "../../../common/Cards/CardContainer"
import  style  from "../СategoryPages/categorypage.module.css"



const CategoryPage = (props) =>{
    
        return(
            <div className={style.categoryPageDiv}>
               {props.devices.devices.map(i=><CardContainer name={i.name} price={i.price} img={i.img} key={i.id} id={i.id}/>)}
            </div>
        ) 
}


export default CategoryPage