import ReviewsBoxContainer from '../../common/Reviews/ReviewsBoxContainer'
import style from './devicepage.module.css'



const DevicePage = (props) =>{


    return(
        <div className={style.devicePage}>
            <h1>{props.name}</h1>
            <div className={style.mainDeviceBox}>
                <img src={`http://localhost:3001/${props.img}`} alt="" className={style.img}/>
                <div>
                    <div className={style.infoBox}>
                        Характеристики:
                        {props.info.map((i)=>
                        <div>
                            {i.title}: {i.description}
                        </div>)}
                    </div>
                    <p className={style.price}>{props.price} BYN</p>
                    {props.role == 'ADMIN' ? <button className={style.addBtn}  onClick={()=>{props.deleteDevice(props.deviceId)}} >Удалить</button>
                    :
                    <button className={style.addBtn}  onClick={()=>{props.isLogin? props.addDevice(props.basketId,props.deviceId): alert('Необходимо авторизоваться')}} >В корзину</button> 
                    }
                </div>
            </div>
           <ReviewsBoxContainer deviceId={props.deviceId}/>
        </div>
    )
}


export default DevicePage