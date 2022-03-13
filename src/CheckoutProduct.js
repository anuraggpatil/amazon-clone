import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () =>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })

    }

  return (
    <div className='checkoutProduct'>
        <input className='checkbox' type="checkbox" checked={true} onClick={removeFromCart}/>
        <img className='checkoutProduct__image' src={image} alt="img" />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
                {title}
            </p>
            <small className="instock">
            In stock
            </small>
            <br />
            <small>Eligible for FREE Shipping</small>
            <br />
            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" />
        
            <p className="checkoutProduct__price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>

            <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>
            <button onClick={removeFromCart} >Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct