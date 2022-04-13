import { useState } from 'react'
import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import Counter from './Components/ItemCount/ItemCount';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  const title = "Ecommerce"

  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)}
  return (
    <main>
    <Navbar/>
<div>
  <ItemListContainer greeting = {'Bienvenido a esta tienda'}/>
  <ItemDetailContainer/>
  <Counter initial={0} stock={10} onAdd={handleOnAdd}/> 
  </div>
</main>
  
        
  )
}

export default App;
