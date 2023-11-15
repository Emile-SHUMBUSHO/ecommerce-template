import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const handleToggleCart = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={handleToggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
