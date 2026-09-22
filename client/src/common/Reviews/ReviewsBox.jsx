import { useDispatch } from 'react-redux'
import Reviews from '../../common/Reviews/Reviews'
import style from './reviewbox.module.css'

const ReviewsBox = (props) =>{

    let dispatch = useDispatch()

    const chek=()=>{
        if(props.isLogin){
            createNewDeviceReview(props.newReview)
        }else{
            alert('Необходимо авторизоваться')
        }
    }
    
    const createNewDeviceReview=(text)=>{
        if(!props.userId){
            alert("Чтобы оставить комментарий, необходимо авторизоваться")
        }else{
            props.create(text,props.userId,props.deviceId,props.userName)
            
        }       
    }

    return (
        <div className={style.reviewBox}>
        <div>
            <input type='text' placeholder='Оставьте свой отзыв ...' value={props.newReview} onChange={(e)=>dispatch(props.updateAC(e.target.value))}/>
            <button className={style.sendReview} onClick={chek}>Отправить</button>
        </div>
            {props.reviews.map((i)=><Reviews userName={i.userName} text ={i.review} time={i.createdAt}/>)}
        </div>
    )
}


export default ReviewsBox