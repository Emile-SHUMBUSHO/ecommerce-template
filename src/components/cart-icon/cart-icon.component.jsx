import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';
import {ReactComponent as ShopingCart} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const handleToggleCart = () => setIsCartOpen(!isCartOpen);
  return (
    <div className='cart-icon-container' onClick={handleToggleCart}>
        <ShopingCart className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon