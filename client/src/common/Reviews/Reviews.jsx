import style from './reviews.module.css'



const Reviews = (props) =>{
    let time = props.time.split('.')[0].replace('T',' ')

    return(
        <div className={style.mainReviewBox}>
            <div className={style.ustime}>
                <p>{props.userName}</p> <p>{time}</p>
            </div>
            <div className={style.reviewText}>
                {props.text}
            </div>
        </div>
    )
}


export default Reviews