import React, { useState } from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import SuccessModal from '../UI/SuccessModal'

export default function Cart({items,data,handleQueue}) {
    const [showModal,setShowModal]= useState(false)
    const [orderModal,setOrderModal]= useState(false)
    let handleModal=()=>{
        setShowModal(previousState=> !previousState)
    }
    let handleOrder=()=>{
        setShowModal(false)
        setOrderModal(previousState=> !previousState)
    }
  return (
    <>
    <div onClick={handleModal} className="cart-container">
        <button>
            <span data-items={items}>Cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="6" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                <path d="M15 6h6m-3 -3v6" />
            </svg>
        </button>
    </div>
    {showModal && <Modal onClose={handleModal}>
      <div className="checkout-modal">
                        <h2>Checkout Modal</h2>
                        <div className="checkout-modal_list">
                            {
                                items > 0 ?
                                data.map((item)=>{
                                    return ( <CartItem item={item} key={item.id} emitIncrease={(id)=>handleQueue(id,1)} emitDecrease={(id)=>handleQueue(id,-1)}/>)
                                })
                                :
                                <div className="empty-cart">Please add something in your cart!</div>
                            }
                        </div>
                        { 
                            items > 0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount: </h4>
                                    <h4>{data.reduce((acc,cur)=>acc+cur.discountedPrice*cur.quantity,0)}INR</h4>
                                </div>
                                <button onClick={handleOrder}>Order Now</button>
                            </div>
                        }
                    </div>
        </Modal>}
    {orderModal && <SuccessModal onClose={handleOrder} ></SuccessModal>}
    </>
  )
}
