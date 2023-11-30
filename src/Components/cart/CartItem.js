import React from 'react'

export default function CartItem({item,emitIncrease,emitDecrease}) {
  let data=
    <div className="checkout-modal_list-item">
                                <div className="img-wrap">
                                    <img src={`/assets/${item.thumbnail}`} className="img-fluiid" alt={`${item.thumbnail}`}/>
                                </div>
                                <div className="information">
                                    <div>
                                        <h4>{`${item.title}`}</h4>
                                        <div className="pricing">
                                            <span>{`${item.discountedPrice}`}</span>
                                            <small>
                                                <strike>{`${item.price}`}</strike>
                                            </small>
                                        </div>
                                    </div>
                                    <div className="cart-addon cart-addon__modal">
                                        <button onClick={()=>emitDecrease(item)}>-</button>
                                        <span className="counter">{`${item.quantity}`}</span>
                                        <button onClick={()=>emitIncrease(item)}>+</button>
                                    </div>
                                </div>
  </div>
  return data
}
