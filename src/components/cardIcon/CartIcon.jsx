import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';
import toggleCartHidden from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cart_selector';
import './CartIcon.css';

const CartIcon = () => {
    
    const dispatch = useDispatch()

    const itemCount = useSelector(state => selectCartItemsCount(state));

    return (
        <div className="cart-icon" onClick={()=> dispatch(toggleCartHidden())} >
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count" > {itemCount} </span>
        </div>
    )
}

export default CartIcon
