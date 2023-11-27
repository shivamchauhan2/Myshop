import './App.css';
import './styles/items.css'
import Products from './Components/products/Products.js';
import Header from './Components/layout/Header.js';
import SubHeader from './Components/layout/SubHeader.js';
import { useState } from 'react';

function App() {
  const[cartItems,setCartItems]= useState(0)
  let handleAddItem=()=>{
    setCartItems(cartItems+1)
  }
  let handleRemoveItem=()=>{
    setCartItems(cartItems-1)
  }
  return (
    <>
   <Header items={cartItems}/>
   <SubHeader />
   <Products addOn={handleAddItem} removeOn={handleRemoveItem}/>
   </>
  );
}

export default App;
