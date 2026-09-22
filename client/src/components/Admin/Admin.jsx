import { useState } from "react"
import { useDispatch } from "react-redux"
import { createNewBrandThunkCreator, createNewTypeThunkCreator} from "../../store/adminReducer"
import style from './admin.module.css'




const Admin = (props) =>{
   
    let [type,setType] = useState('')
    let [EN,setEN] = useState('')
    let [brand,setBrand] = useState('')
    let [name,setName] = useState('')
    let [price,setPrice] = useState('')
    let [file,setFile] = useState(null)
    let [selectedType,setSelectedType] = useState(null)
    let [selectedBrand,setSelectedBrand] = useState(null)
    let [info,setInfo] = useState([])
    let dispatch = useDispatch()

    let allTypes = props.types.map((i)=><option key={i.id} value={i.id}>{i.name}</option>)
    let allBrands = props.brands.map((i)=><option key={i.id} value={i.id}>{i.name}</option>)

    const addNewType = (value,EN)=>{
        dispatch(createNewTypeThunkCreator(value,EN))
        setType('')
        setEN('')
    }

    const addNewBrand = (brand) =>{
        dispatch(createNewBrandThunkCreator(brand))
        setBrand('')
    }
    
    const addFile = (e) =>{
        setFile(e.target.files[0])

    }
    
    const addInfo = () =>{
        setInfo([...info,{title:'',description:'',number:Date.now()}])
    }

    const removeInfo = (number) =>{
        setInfo(info.filter(i=> i.number !== number))
    }

    const changeInfo = (key,value,number) =>{
        setInfo(info.map(i=> i.number === number ? {...i,[key]:value}:i))
    }

    const addNewDevice = () =>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('price',price)
        formData.append('img',file)
        formData.append('brandId',selectedBrand)
        formData.append('typeId',selectedType)
        formData.append('info',JSON.stringify(info))
        props.createDevice(formData)
        setSelectedBrand(null)
        setSelectedType(null)
        setPrice('')
        setFile(null)
        setInfo([])
        setName('')

    }

    return (
        <div className={style.mainAdminBox}>
            <div className={style.addTypeBox}>
                <div>
                    Добавить новый тип:
                </div>
                <input type="text" onChange={(e)=>{setType(e.target.value)}} value={type} placeholder="Тип..."/>
                <input type="text" onChange={(e)=>{setEN(e.target.value)}} value={EN} placeholder="EN..."/>
                <button onClick={()=>addNewType(type,EN)}>Добавить</button>
            </div>
            <div className={style.addBrandBox}>
                <div>Добавить новый Брэнд:</div>
                <input type="text" onChange={(e)=>{setBrand(e.target.value)}} value={brand} placeholder="Брэнд..."/>
                <button onClick={(e)=>addNewBrand(brand)}>Добавить</button>
            </div>
            <div className={style.addDeviceBox}>
                <div>Добавить новое устройтсво:</div>
                <select onChange={e=>setSelectedType(e.target.value)}>
                    <option>--Выберите тип устройства--</option>
                    {allTypes}
                </select>
                <select onChange={e=>setSelectedBrand(e.target.value)}>
                    <option>--Выберите брэнд устройства--</option>
                    {allBrands}
                </select>
                <input type="text" placeholder="Название" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Цена" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <input type="file" onChange={addFile}/>
                <button onClick={addInfo}>Добавить характеристики</button>
                {info.map(i=><div key={i.number} className={style.infoDiv}>
                    <input type="text" placeholder="Название" value={i.title} onChange={(e)=> changeInfo('title',e.target.value,i.number)} />
                    <input type="text" placeholder="Описание" value={i.description} onChange={(e)=> changeInfo('description',e.target.value,i.number)}/>
                    <button onClick={(e)=> removeInfo(i.number)}>Удалить</button>
                </div>)}
                <button onClick={addNewDevice}>Добавить</button>
            </div>
            
        </div>
    )
}

export default Admin