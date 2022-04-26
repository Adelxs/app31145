/*import './ItemDetail.css'
import Counter from '../ItemCount/ItemCount'
import { useNavigate, link } from 'react-router-dom'


const ItemDetail = ({  name, img}) => {
    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`)}
    
    return (
        <article >
            <header >
            
                <h2 >
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Categoria: telescopio
                </p>
                <p>
                    Descripción: Telescopio con diametro de 130mm
                </p>
                <p>
                    Precio: $100.000
                </p>
            </section>           
            <footer>
            <Counter initial={0} stock={10} onAdd={handleOnAdd}/> 
            
            </footer>
        </article>
    )
}

export default ItemDetail*/

import './ItemDetail.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const InputCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)
    console.log(stock)
    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial }) => {
    const [count, setCount] = useState(0)

    const increment = () => {
         
            setCount(count + 1)
         
    }

    const decrement = () => {
        
            setCount(count - 1)
        

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const Select = ({ options = [], onSelect}) => {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            {options.map(o => <option key={o.id} value={o.value}>{o.text}</option>)}
        </select>
    )
}

const ItemDetail = ({ id, name, img, category, description, price, stock, setCart, cart }) => {
    const [typeInput, setTypeInput] = useState(true)
    const [quantity, setQuantity] = useState(0) 
    const options = [{id: 0, value: '', text: '-'}, {id: 1, value: '/', text: 'ItemListContainer'}, {id: 2, value: '/form', text: 'Formulario'}]
    const navigate = useNavigate()

    const handleAdd = (count) => {
        console.log('Agregar al carrito')
        const objProd = {
            id, name, price, quantity
        }
        setCart([...cart, objProd])
        setQuantity(count)
        
        
    }

    const handleSelect = (value) => {
        navigate(value)
    }

    const Count = typeInput ? ButtonCount : InputCount

    return (
        <article className="CardItem">
            <header className="Header">
                <button onClick={() => setTypeInput(!typeInput)}>Cambiar Count</button>
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Select options={options} onSelect={handleSelect} />
                {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <Count onConfirm={handleAdd} stock={stock}/> } 
            </footer>
        </article>
    )
}

export default ItemDetail