import './ItemDetail.css'
import Counter from '../ItemCount/ItemCount'


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

export default ItemDetail