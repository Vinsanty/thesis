import { useState } from "react"
import BasketCard from "../../common/BasketCard/BasketCard"
import Order from "../../common/Order/Order"
import style from './basket.module.css'




const Basket = (props) =>{

    const devices = props.info.map((i)=><BasketCard img={i.img} price={i.price} name={i.name} info={i.info} id={i.id} key={i.id} 
        basketId = {props.basketId} deleteDev={props.delete}/>)

    const [active,setActive] = useState(false)

    return(
        <div className={style.mainBasket}>
            {devices}
            <button className={style.order} onClick={()=>setActive(true)}>Оформить заказ</button>
            <Order active={active} setActive={setActive} info={props.info} createOrder={props.createOrder} userId = {props.userId} 
            deleteDev = {props.delete} basketId={props.basketId}/>
        </div>
    )
}


export default Basket