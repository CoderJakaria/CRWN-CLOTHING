import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../Firebase/Firebase.utils';
import { useSelector } from 'react-redux';
import CartIcon from '../cardIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user_selector';
import { selectCartHidden } from '../../redux/cart/cart_selector';

const Header = () => {
    
    const currentUser = useSelector(state => selectCurrentUser(state))
    const cart = useSelector(state => selectCartHidden(state))

    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
               <Logo className='logo'/>
            </Link>
            <div className='options'>
               <Link to='/shop' className='option'> SHOP </Link>
               <Link to='/shop' className='option'> CONTACT </Link>

               {
                   currentUser ?
                       <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                            :
                        <Link className='option' to='/signin'>SIGN IN</Link>    
               }

               <CartIcon />
            </div>
            {cart ? null : <CartDropdown /> }
        </div>
    )
}


export default Header
