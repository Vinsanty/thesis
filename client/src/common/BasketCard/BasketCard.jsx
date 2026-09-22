import style from './basketCard.module.css'


const BasketCard = ({img,name,price,info,deleteDev,basketId,id}) =>{

    const description = info.map((i)=><p className={style.description}>{i.title}: {i.description}</p>)

    return(
        <div className={style.mainBasketCard}>
            <div>
                <img src={`http://localhost:3001/${img}`} alt="" />
            </div>
            <div className={style.infoDiv}>
                <p className={style.name}>{name}</p>
                {description}
                <div className={style.footer}>
                    <p className={style.price}>{price} BYN</p>
                    <button className={style.delete} onClick={()=>deleteDev(basketId,id)}>Удалить</button>
                </div> 
            </div>
        </div>
    )
}


export default BasketCard