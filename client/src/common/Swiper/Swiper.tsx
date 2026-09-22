import s from './swiper.module.css'
import React from 'react'
import {FaChevronCircleLeft,FaChevronCircleRight} from 'react-icons/fa'


const Swiper = () =>{
    
    const slidesRef = React.useRef<HTMLDivElement|null>(null)
    let transformValue = 0

    const nextSlide = () =>{
        if(slidesRef.current && transformValue <= -2300){
            transformValue = 0
            slidesRef.current.style.transform = `translateX(${transformValue}px)`
        }else if (slidesRef.current){
            transformValue -= 1150
            slidesRef.current.style.transform = `translateX(${transformValue}px)`
        }
    }

    const prevSlide = () =>{
        if(slidesRef.current && transformValue >= 0){
            transformValue = -2300
            slidesRef.current.style.transform = `translateX(${transformValue}px)`
        }else if (slidesRef.current){
            transformValue += 1150
            slidesRef.current.style.transform = `translateX(${transformValue}px)`
        }
    }

    setInterval(nextSlide,10000)

    return(
        <div className={s.swiper}>
            <FaChevronCircleLeft onClick={prevSlide} className={s.btnPrev}/>
            <div className={s.slides} ref={slidesRef}>
                <div className={s.slide}>
                
                    <img src="https://tgl.by/assets/images/spec/tehnika.jpg"/>
                </div>
                <div className={s.slide}>
                    <img src="https://helpica.ru/wp-content/uploads/9/b/c/9bce568e3891b4358a18bc21d4cb40bc.jpeg" />
                </div>
                <div className={s.slide}>
                    <img src="https://kovri-aladdin.com/wp-content/uploads/2021/12/daahxtso.png" />
                </div>
            </div>
            <FaChevronCircleRight onClick={nextSlide} className={s.btnNext}/>
        </div>
    )
}

export default Swiper