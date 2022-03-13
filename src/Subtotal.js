import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { CardTravel } from '@material-ui/icons'
import { useStateValue } from './StateProvider';

function Subtotal() {

    const [{cart}, dispatch] = useStateValue();
    const getCartTotal=(cart)=>cart?.reduce((prev, curr) => prev + curr.price, 0);

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({cart.length} items):
                        <strong>
                            {`${value}`}
                            </strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" />This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button>Proceed to Buy</button>
    </div>
  )
}

export default Subtotal