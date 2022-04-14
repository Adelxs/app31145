import { useState, useEffect } from 'react'
import './ItemCount.css'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
 
    useEffect(() => {
        let isActive = true

        setTimeout(() => {
            if(isActive) {
                setCount(0)       
            }
        }, 3000)

        return (() => {
            isActive = false
            
        })
    })

    useEffect(() => {
    }, [count])


    const decrement = () => {
        if (count > initial) 
        setCount(count - 1)
    }

    const increment = () => {
        if (count < stock)
        setCount(count + 1)
    }

   
    return(
        <div>
            <button onClick={decrement}>-</button> 
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 

export default Counter