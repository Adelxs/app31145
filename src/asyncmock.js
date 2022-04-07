const products = [{
    id: 1,
    name: 'Celestron Astromaster 130eq',
    price: 100.000,
    category: 'telescopio',
    img: 'https://cdn.shopify.com/s/files/1/1935/4371/products/31045_AstroMaster_130EQ_1_570x380@2x.jpg?v=1534171935',
    stock: 2,
    description: 'Telescopio con diametro de 130mm'

}
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}