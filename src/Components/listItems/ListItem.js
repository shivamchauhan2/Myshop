import React, { useState} from 'react'
import AddCardIcon from '../../assets/add_cart.svg'
import { useDispatch, useSelector } from "react-redux"
import Modal from '../UI/Modal'
import { addItemHandler, removeItemHandler } from '../../actions'
export default function ListItem({data,addItem,removeItem}) {

  const [showModal,setShowModal]= useState(false)
  const item = useSelector(state => state.items.find(item => item.id === data.id))
  const dispatch = useDispatch()
  let decreaseCounterByOne=(event)=>{
    event.stopPropagation()
      dispatch(removeItemHandler(data.id))
    //   dispatch({
    //     type: "REMOVE_ITEM",
    //     payload: {
    //         id: data.id
    //     }
    // })
  }
  let increaseCounterByOne=(event)=>{
    event.stopPropagation()
    dispatch(addItemHandler(data))
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
      {!item ||item?.quantity<1 ?<button onClick={increaseCounterByOne} className="cart-add" >
        <span >Add to Cart</span>
        <img src={AddCardIcon} alt='Carticon' />
      </button>:
     <div className={"cart-addon"}>
                <button onClick={decreaseCounterByOne}><span>-</span></button>
                <span className={"counter"}>{item.quantity}</span>
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
                                !item || item?.quantity< 1 ?
                                <button className={"cart-add card-add__modal"} onClick={increaseCounterByOne}>
                                    <span>Add to Cart</span>
                                    <img src={AddCardIcon} alt="Cart Icon"/>
                                </button>
                                :
                                <div className="cart-addon card-addon__modal">
                                    <button onClick={decreaseCounterByOne}><span>-</span></button>
                                    <span>{item.quantity}</span>
                                    <button onClick={increaseCounterByOne}><span>+</span></button>
                                </div>
                            }
                        </div>
                    </div></Modal>}
    </>

  )
}
