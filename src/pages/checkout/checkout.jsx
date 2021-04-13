import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/Checkout_Item';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart_selector';
import './checkout.css';

const CheckoutPage = () => {

    const cartItems = useSelector(state => selectCartItems(state))
    const total = useSelector(state => selectCartTotal(state))

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quanity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map((cartItem)=>{
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                })
            }

            <div className="total">
                <span>TOTAL: ${total} </span>
            </div>
            {/* <div className="test-warning">
                *Pls use the following test credit cart for payment*
                      <br/>
                4242 4242 4242 4242 - Exp: future month and year - CVV: 123
            </div> */}
        </div>
    )
}

export default CheckoutPage
