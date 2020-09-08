import React from 'react';
import { useStateValue } from '../../services/StateProvider';

import Header from '../../components/Header';

import './styles.css';
import CheckoutProduct from '../../components/CheckoutProduct';
import Subtotal from '../../components/Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="container-checkout">
            <Header />
            <div className="checkout__main">
                <div className="checkout__left">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Alexa/GW/Setembro/W37/DesktopHero_1500x600_EchoShow5_Lifestyle._CB406260764_.jpg"
                        alt="ad_checkout"
                        className="checkout_ad"
                    />

                    <div className="checkout">
                        {
                            basket?.length === 0 ? (
                                <div className='my-checkout'>
                                    <h2>Your Shopping Basket is empty</h2>
                                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                                </div>
                            ) : (
                                    <div className='my-checkout-products'>
                                        <h2 className='checkout__title'>Your Shopping Baket</h2>

                                        {basket.map(item => (
                                            <CheckoutProduct
                                                id={item.id}
                                                title={item.title}
                                                image={item.image}
                                                price={item.price}
                                                rating={item.rating}
                                            />
                                        ))}
                                    </div>
                                )
                        }
                    </div>
                </div>
                {basket.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Checkout;