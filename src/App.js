import React from 'react'
import ItemListContainer from './componets/itemListContainer/itemListContainer';
import Navbar from './componets/navBar/navbar';


function App() {
  const title = "Ecommerce"
  return (
    <main>
    <Navbar/>
<div>
  <ItemListContainer greeting = {'Bienvenido a esta tienda'}/>
  </div>
</main>
  
        
  );
}

export default App;
