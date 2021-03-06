import { useState, useEffect } from 'react'
import  { getProducts } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({setCart, cart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
   const {productId} = useParams()

    useEffect(() => {
        getProducts(getProducts).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])


    return (
        <div >
            {
             loading ?
                 <h1>Cargando...</h1> :
             product ?    
                    <ItemDetail {...product} setCart={setCart} cart={cart}/> :
                    <h1>El producto no existe</h1>
            }
        </div>
    )    
}
export default ItemDetailContainer