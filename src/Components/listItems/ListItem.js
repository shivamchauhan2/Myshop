import React, { useState } from 'react'
import AddCardIcon from '../../assets/add_cart.svg'
import Modal from '../UI/Modal'
export default function ListItem({data,addItem,removeItem}) {
  const [counter,setCounter]= useState(0)
  const [showModal,setShowModal]= useState(false)
  let decreaseCounterByOne=(event)=>{
    event.stopPropagation()
    if(counter<=0){
      return
    }
    if(counter===1){
      removeItem(data.id)
    }
    setCounter(counter-1)
    
  }
  let increaseCounterByOne=(event)=>{
    event.stopPropagation()
    if(counter===0){
      addItem(data.id) 
    }
    setCounter(counter+1)
  }
  let handleModal=()=>{
      setShowModal(previousState=> !previousState)
  }
  return (
    <>
    <div onClick={handleModal} className={"item-card"}>
      <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt="img"></img>
      <div className={"pricing"}>
        <span>Rs. {data.discountedPrice} </span>
         <small>
            <strike>{data.price}</strike>
         </small>   
      </div>
      <div className={"title"}>
        <h3>{data.title}</h3>
      </div>
      {counter<1 ?<button onClick={increaseCounterByOne} className="cart-add" >
        <span >Add to Cart</span>
        <img src={AddCardIcon} />
      </button>:
     <div className={"cart-addon"}>
                <button onClick={decreaseCounterByOne}><span>-</span></button>
                <span className={"counter"}>{counter}</span>
                <button onClick={increaseCounterByOne}><span>+</span></button>
        </div>
}
    </div>
    {showModal && <Modal onClose={handleModal}> <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
                        </div>
                        <div className="meta">
                            <h3>{data.title}</h3>
                            <div className={"pricing"}>
                                <span>₹{data.discountedPrice}</span>
                                <small>
                                    <strike>₹{data.price}</strike>
                                </small>
                            </div>
                            <p>{data.description}</p>
                            {
                                counter < 1 ?
                                <button className={"cart-add card-add__modal"} onClick={increaseCounterByOne}>
                                    <span>Add to Cart</span>
                                    <img src={AddCardIcon} alt="Cart Icon"/>
                                </button>
                                :
                                <div className="cart-addon card-addon__modal">
                                    <button onClick={decreaseCounterByOne}><span>-</span></button>
                                    <span>{counter}</span>
                                    <button onClick={increaseCounterByOne}><span>+</span></button>
                                </div>
                            }
                        </div>
                    </div></Modal>}
    </>

  )
}
