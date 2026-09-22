import { useState } from "react"
import HomePageCard from "../../common/Cards/HomePageCards"
import Swiper from "../../common/Swiper/Swiper"
import style from './homePage.module.css'


const HomePage = (props) =>{
   

    const devices = props.devices.map((i)=><HomePageCard img={i.img} name={i.name} 
    price={i.price} id={i.id} key={i.id} addNewDevice={props.addDevice}
    allTypes = {props.allTypes} type = {i.typeId} isLogin={props.isLogin} basketId = {props.basketId}/>)
   
   
    return(
        <div className={style.mainPageDiv}>
            <Swiper />
            <div className={style.allDevicesBox}>
                
                {devices}
            </div>
            
        </div>
    )
}


export default HomePage