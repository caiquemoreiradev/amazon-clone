import React from 'react';
import { useStateValue } from '../../services/StateProvider';

import './styles.css';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{basket}, dispatch ] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    }
    return (
        <>
            <div className='checkoutProduct'>
                <img className='checkoutProduct__image' src={image} alt={title} />

                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>

                    <p className="checkoutProduct__price">
                        <small>R$</small>
                        <strong>{price}</strong>
                    </p>

                    <div className="checkoutProduct__rating">
                        {Array(rating)
                            .fill()
                            .map((_) => (
                                <span role='img' aria-label='star'>⭐</span>
                            ))}
                    </div>

                    <button onClick={removeFromBasket}>Remove from basket</button>
                </div>
            </div>
        </>
    );
}

export default CheckoutProduct;