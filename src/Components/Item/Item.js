import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Counter from '../ItemCount/ItemCount'
import { useState } from 'react'
import './Item.css'

const Item = ({name, img}) => {
    const [show, setShow] = useState(true)

    const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)}
    return(
        <div className="card-img">
            <picture className="picture">
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <ItemDetailContainer/>
            <Counter initial={0} stock={10} onAdd={handleOnAdd}/> 
        </div>
    ) 
}

export default Item