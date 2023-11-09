import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const clearCartItemHandler = () => {
        clearItemFromCart(cartItem)
    }

    const addCartItemHandler = () => {
        addItemToCart(cartItem)
    }

    const removeCartItemHandle = () => {
        removeItemToCart(cartItem)
    }

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className='arrow' onClick={removeCartItemHandle}>&#10094;</div>
                <span className='value'>
                    {quantity}
                </span>
                <div className='arrow' onClick={addCartItemHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearCartItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem