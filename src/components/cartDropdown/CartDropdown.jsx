import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import toggleCartHidden from '../../redux/cart/cartAction';
import { selectCartItems } from '../../redux/cart/cart_selector';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import "./CartDropdown.css";

const CartDropdown = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const cartItems = useSelector(state=> selectCartItems(state))

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem} />)
                       :
                    <span className="empty-massege"> Your cart is empty </span>
                }
            </div>
            
            <CustomButton onClick={()=> {
                 history.push('/checkout')
                 dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
