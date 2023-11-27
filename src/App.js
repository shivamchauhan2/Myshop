import './App.css';
import './styles/items.css'
import Products from './Components/products/Products.js';
import Header from './Components/layout/Header.js';
import SubHeader from './Components/layout/SubHeader.js';
import { useState } from 'react';

function App() {
  const[cartItems,setCartItems]= useState([])
  const [queue,setQueue]=useState({
    id:"",
    type:""
  })
   let handleCartQueue=(id,type)=>{
      // console.log(id,type)
      setQueue({id,type})
   }
  let handleAddItem=(item)=>{
    let data=[...cartItems]
    let index=data.findIndex(i=>i.id===item.id)
    if(index>-1){
      data[index]=item
      setCartItems(data)
    }else{
      setCartItems([...cartItems,item])
  }
}
  let handleRemoveItem=(item)=>{
    let data=[...cartItems]
    let index=data.findIndex(i=>i.id===item.id)
    if(data[index].quantity===0){
      data.splice(index,1)
      setCartItems(data)
    }else{
      data[index]=item
      setCartItems(data)
    }
    
  }
  return (
    <>
   <Header itemsLength={cartItems.length} items={cartItems} handleQueue={(id,type)=>handleCartQueue(id,type)}/>
   <SubHeader />
   <Products addOn={handleAddItem} removeOn={handleRemoveItem} queue={queue} />
   </>
  );
}

export default App;
