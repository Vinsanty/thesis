import style from './card.module.css'
import { NavLink} from 'react-router-dom'


const HomePageCard = ({img,name,price,id,type,addNewDevice,allTypes,isLogin,basketId}) =>{
    let selectedType
    if(allTypes){
       selectedType = allTypes.filter(i=> i.id === type)
    }
    
    const chekLogin = () =>{
        if(isLogin){
            addNewDevice(basketId,id)
        }else{
            alert('Для добавления товара в корзину, необходимо авторизоваться')
        }
    }

    return (
        <div className={style.mainDiv}>
            <NavLink className={style.mainCardDiv} to={`/catalog/device/${id}`}>
            <div className={style.imgDiv}>
                <img  src={`http://localhost:3001/${img}`}/>
            </div>
            <div className={style.infoDiv}>
                <p>{name}</p>
                <p>{price} BYN</p>
            </div>    
            </NavLink>
            <button className={style.addBtn} onClick={chekLogin }>В корзину</button>
        </div>
    )

}

export default HomePageCard
