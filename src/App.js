import React from 'react'
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import Navbar from './Components/NavBar/NavBar';
import ItemCount from './Components/ItemCount/ItemCount';


function App() {
  const title = "Ecommerce"
  return (
    <main>
    <Navbar/>
<div>
  <ItemListContainer greeting = {'Bienvenido a esta tienda'}/>
  <ItemCount />
  </div>
</main>
  
        
  );
}

export default App;
