import { useState } from 'react';
import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  const title = "Ecommerce"

  const[cart, setCart] = useState([])
  console.log(cart)

  return (
    <div className="App">
        
        <BrowserRouter>
          <Navbar />
          
        
          <Routes>
           
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer setCart={setCart} cart={cart}/>} />
            
          </Routes>
        </BrowserRouter>
        
      </div>
  
        
  )
}

export default App;
