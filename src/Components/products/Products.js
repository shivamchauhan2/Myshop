import React, {useEffect, useState } from 'react'
import ListItem from '../listItems/ListItem'
import Loader from '../UI/Loader'
import { useNavigate, useParams } from 'react-router-dom'
export default function Products() {
  const [items,setItems]= useState([])
  const [loader,setLoader]= useState(true)
  const params =useParams()
  const history= useNavigate()
  console.log(history)
  // const [cartItems,setCartItems]=useState([])
    useEffect(()=>{
      let slug="items.json"
      console.log(params)
      try {
        if(params.category) {
            slug = `items-${params.category}.json`
        }
        // if(queryParams) {
            // slug += `?search=${queryParams}`
        // }
      }catch(error){
        console.log(console.log(error))
      }
      fetch(`https://react-database2023-default-rtdb.firebaseio.com/${slug}`)
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
    },[params])
    
  return (
    <>
    <div className='product-list'>
        <div className='product-list--wrapper'>
        {items.map(item=><ListItem key={item.id} data={item}></ListItem>)}
        {/* <ListItem data={item[0]}></ListItem> */}
        {/* <ListItem data={item[1]}></ListItem> */}
        </div>
    </div>
    {loader && <Loader/>}
    </>
  )
}
