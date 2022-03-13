import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {

    const [{cart, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <a href="https://oceanfinance.co.uk" target="_blank" rel="noreferrer noopener">
                    <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Onboarding/Pavitra/Bank7to13.jpg" alt="ad" />
                </a>

                <div>
                    <h2 className="checkout__title">
                        Your Shopping Cart <b>{cart.length ? '':' is empty.'}</b>
                    </h2>

                    {cart.map(item =>
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating = {item.rating}/>
                    )}

                </div>
            </div>
            <div className="checkout__right">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="purchase protection" />

                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout