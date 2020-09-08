import React from 'react';
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from '../../services/StateProvider';

import './styles.css';
import { getBasketTotal } from '../../services/reducer';

function Subtotal() {
    const [{ basket }] = useStateValue();
  return (
      <div className="subtotal__container">

          <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>

                    <small className='subtotal__gift'>
                        <input type="checkbox"/> This order contains a gift 
                    </small>
                </>
            )}

          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'R$'}
          />
          <button>Proceed to checkout</button>
      </div>
  );
}

export default Subtotal;