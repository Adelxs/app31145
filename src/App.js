import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';



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
