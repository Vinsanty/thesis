import { useState } from 'react'
import style from './order.module.css'




const Order = ({active,setActive,info,userId,basketId,createOrder,deleteDev}) =>{
    
    let totalPrice = 0
    info.map(i=>{
        totalPrice += i.price
    }) 

    let [done, setDone] = useState(false)
    let [address,setAddress] = useState()

    return(
        <div className={active? `${style.mainModalBox} ${style.active}` : `${style.mainModalBox}`} onClick={()=>{
            setActive(false) 
            setDone(false)}}>
            {!done ?
                <div className = {style.orderBox} onClick={e=> e.stopPropagation()}>
                    <h1>Оформить заказ</h1>
                    <input type='text' placeholder='Адрес'  className={style.address} value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    <div className={style.devices}>
                        Товары:
                        {info.map(i=><div>
                            <span>{i.name}</span>
                            <span>{i.price} BYN</span>
                        </div>)}
                    </div>
                    <h2 className={style.totalPrice}>Сумма заказа: {totalPrice} BYN </h2>
                    <button className={style.order} onClick={()=>{ 
                        setDone(true) 
                        info.map(i=>{createOrder(address,userId,i.id)
                        deleteDev(basketId,i.id)
                        })}}>Оформить заказ</button>
                </div>
                : <div className = {style.orderBox}>
                    <h1>Ваш заказ оформлен</h1>
                    <h2>Спасибо за покупку!</h2>
                </div>
            }
            
        </div>
    )
}



export default Order