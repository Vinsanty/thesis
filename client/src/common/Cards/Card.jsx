import { NavLink } from 'react-router-dom'
import style from '../Cards/card.module.css'




const Card = ({img,name,price,id,addNewDevice,isLogin}) =>{
    
    const chek = () =>{
        if(isLogin){
            addNewDevice()
        }else{
            alert('Необходимо авторизоваться')
        }
    }

    return (
        <div className={style.mainDiv}>
            <NavLink className={style.mainCardDiv} to={`/catalog/device/${id}`}>
            <div className={style.imgDiv}>
                <img  src={`http://localhost:3001/${img}`}/>
            </div>
            <div className={style.infoDiv}>
                <p className={style.deviceName}>{name}</p>
                <p>{price} BYN</p>
            </div>    
            </NavLink>
            <button className={style.addBtn} onClick={chek}>В корзину</button>
        </div>
    )

}



export default Card

