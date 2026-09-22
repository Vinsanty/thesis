import { useRef } from 'react'
import style from './MenuBurgBtn.module.css'



const MenuBurgBtn = () =>{

    let burg = useRef()

    const toggleClass = ()=>{
        console.log(burg)
    }

    return(
        <div className={style.menuBurgBtn} ref={burg} onClick={toggleClass} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )


}



export default MenuBurgBtn