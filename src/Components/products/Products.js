import React, {useEffect, useState } from 'react'
import ListItem from '../listItems/ListItem'
import Loader from '../UI/Loader'
export default function Products({addOn,removeOn,queue}) {
  const [items,setItems]= useState([])
  const [loader,setLoader]= useState(true)
  // const [cartItems,setCartItems]=useState([])
    useEffect(()=>{
      fetch("https://react-database2023-default-rtdb.firebaseio.com/items.json")
      .then(response=>response.json())
      .then(data=> {
        const transformedData=data.map((item,index)=>{
         return {...item,
          quantity:0,
          id:index}
      })
      setLoader(false)
      setItems(transformedData)
           
    })
      .catch(err=>{
        setLoader(false)
        console.log(err)})
    },[])
    useEffect(()=>{
      if(queue.id>-1){
      if(queue.type===1){
         handleAdd(queue.id)
      }
      else if(queue.type===-1){
        handelRemove(queue.id)
      }
    }
  }
    ,[queue])
    let handleAdd=(id)=>{
        // console.log(id)
        // setCartItems([...cartItems,id])
        // if(!cartItems.includes(id)){
        //   let items=[...cartItems,id]
        //   setCartItems(items)
        // }
        let data=[...items]
        let index= data.findIndex(i=>i.id===id)
        data[index].quantity +=1
        setItems(data)
        addOn(data[index])
    }
    let handelRemove=id=>{
      // console.log(id)
        // let index= cartItems.indexOf(id)
        // let items=[...cartItems]
        // items.splice(index,1)
        let data=[...items]
        let index= data.findIndex(i=>i.id===id)
        data[index].quantity -=1
        setItems(data)
        // setCartItems(items)
        removeOn(data[index])
    }
    // useEffect(()=>{console.log(`${cartItems}`)},[cartItems])
  return (
    <>
    <div className='product-list'>
        <div className='product-list--wrapper'>
        {items.map(item=><ListItem key={item.id} addItem={handleAdd} removeItem={handelRemove} data={item}></ListItem>)}
        {/* <ListItem data={item[0]}></ListItem> */}
        {/* <ListItem data={item[1]}></ListItem> */}
        </div>
    </div>
    {loader && <Loader/>}
    </>
  )
}
