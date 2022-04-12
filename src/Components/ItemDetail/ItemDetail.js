


const ItemDetail = ({  name, img, category, description, price}) => {



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
        
        </article>
    )
}

export default ItemDetail