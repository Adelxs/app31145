import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import './Item.css'

const Item = ({name, img}) => {
    

    
    return(
        <div className="card-img">
            <picture className="picture">
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <ItemDetailContainer/>
            
        </div>
    ) 
}

export default Item