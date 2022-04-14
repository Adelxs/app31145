
import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App() {
  const title = "Ecommerce"


  return (
    <div className="App">
        
        <BrowserRouter>
          <Navbar />
          
        
          <Routes>
           
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
        
            
          </Routes>
        </BrowserRouter>
        
      </div>
  
        
  )
}

export default App;
