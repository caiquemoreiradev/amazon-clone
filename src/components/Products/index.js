import React from 'react';
import { useStateValue } from '../../services/StateProvider';

import './styles.css';

function Products({ id, title, price, rating, image }) {

    const [{basket}, dispatch ] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='product__container'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>R$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <span role='img' aria-label='star'>⭐</span>
                        ))}
                </div>
            </div>
            <div className="product">
                <img src={image} alt={title} />
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </div>
    );
}

export default Products;