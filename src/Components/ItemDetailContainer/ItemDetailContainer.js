import { useState, useEffect } from 'react'
import  { getProducts } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
   

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

    }, [getProducts])


    return (
        <div >
            
            
                    <ItemDetail  /> :
                
            
        </div>
    )    
}
export default ItemDetailContainer