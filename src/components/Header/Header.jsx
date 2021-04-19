import React from 'react';
// import './Header.css';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './Header.styles';
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
        <HeaderContainer>
            <LogoContainer to='/'>
               <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
               <OptionLink to='/shop'> SHOP </OptionLink>
               <OptionLink to='/shop'> CONTACT </OptionLink>

               {
                   currentUser ?
                       <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>
                            :
                        <OptionLink to='/signin'>SIGN IN</OptionLink>    
               }

               <CartIcon />
            </OptionsContainer>
            {cart ? null : <CartDropdown /> }
        </HeaderContainer>
    )
}


export default Header
