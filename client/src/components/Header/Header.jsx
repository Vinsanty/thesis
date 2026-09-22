import s from './header.module.css'
import { NavLink } from "react-router-dom"
import Basket from '../../common/Basket'
import Person from '../../common/Person'
import { useDispatch } from 'react-redux'
import { setSelectedTupeAC } from '../../store/typeReducer'
import Plus from '../../common/Plus'
import { logautAC } from '../../store/userReducer'



const Header = (props) =>{
    const dispatch = useDispatch()
    const setType = (id) =>{
        dispatch(setSelectedTupeAC(id))
    }
    let types = props.allTypes.map(i=><NavLink className={s.item} to={`/catalog/${i.EN}`} 
     key={i.id} onClick={(e)=>setType(i.id)}>{i.name}</NavLink>)
    
    return(
        <div className="header">
            <div className={s.mainMenuBar}>
                <NavLink className={s.logo} to={'/'}>TechLand</NavLink>
               <div></div>
                {props.role == "ADMIN" ?
                     <NavLink to={'/admin'} className={s.fav}>
                        <Plus/>
                         <div className={s.favs}>Админ панель</div>
                    </NavLink>:null
                }
               
                <NavLink to={props.isLogin? '/basket' : '/auth'} className={s.basket}>
                    <Basket/>
                    <div>Корзина</div>
                </NavLink>
                {props.isLogin? 
                <div className={s.auth} onClick={()=>dispatch(logautAC())}>
                    <Person/>
                    <div>Выйти</div>
                </div>:
                <NavLink to={'/auth'} className={s.auth}>
                    <Person />
                        <div>Вход</div>
                </NavLink>
                
             }
               
            </div>
            <div className={s.additionalNav}>
                {types}
            </div>
        </div>
    )
}


export default Header