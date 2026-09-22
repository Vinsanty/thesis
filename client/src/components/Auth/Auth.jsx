import { useState } from 'react'
import style from './auth.module.css'
import { NavLink } from 'react-router-dom'



const Auth = (props) =>{
    
    let[email,setEmail] = useState('')
    let[pass,setPass] = useState('')

    return(
        <div className={style.mainAuthBox}>
            <div className={style.authBox}>
                <p className={style.authTitle}>{props.reg || 'Авторизация'}</p>
                <input type='text' value={email} placeholder='Email...' onChange={(e)=>setEmail(e.target.value)} className={style.email}/>
                <input type='password' value={pass} placeholder='Password...' onChange={(e)=>setPass(e.target.value)} className={style.pass}/>
                {!props.reg?<NavLink to={'/registration'} className={style.regLink}>Зарегистрироватья</NavLink>:null}
                <button  className ={style.authBtn}onClick={()=>{
                    if(!props.reg){
                        props.login(email,pass)
                    }else{
                        props.registration(email,pass)
                    }
                    setEmail('')
                    setPass('')
                    }}>{props.reg?'Зарегистрироваться':'Войти'}</button>
                {props.error ?? <div className={style.errMessage}>{props.error}</div>}
            </div>
        </div>
    )
}



export default Auth