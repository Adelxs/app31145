import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  const title = "Ecommerce"
  return (
    <main>
    <Navbar/>
<div>
  <ItemListContainer greeting = {'Bienvenido a esta tienda'}/>
  <ItemDetailContainer/>
  <ItemCount />
  </div>
</main>
  
        
  );
}

export default App;
