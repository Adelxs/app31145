import { useState } from "react";


const ItemCount = ({inicial}) => {

    const [count, setCount] = useState(1)

    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    console.log(setCount)

    return (
        <div className="contador">
            <h3>Contador</h3>
            <div className="count">
                <button onClick={increment}>+</button>
                <p>{count}</p>
                <button onClick={decrement}>-</button>
            </div>
        
        </div>)
}

export default ItemCount