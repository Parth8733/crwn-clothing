import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandle = () => clearItemFromCart(cartItem);
  const addItemHandle = () => addItemToCart(cartItem);
  const removeItemHandle = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandle}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandle}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandle}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
