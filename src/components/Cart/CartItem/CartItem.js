import React, { useState } from "react";
import {
  CartDetails,
  CartItemDiv,
  CartItemQty,
  CartItemsActions,
  ContentFull,
  DeleteButton,
  DeleteIcon,
  Details,
} from "./CartItemStyles";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <CartItemDiv>
      <img src={item.image} alt={item.title} />
      <ContentFull>
        <CartDetails>
          <Details>{item.title}</Details>
          <Details style={{fontWeight: 'bold'}}>$ {item.price}</Details>
        </CartDetails>

        <CartItemsActions>
          <CartItemQty>
            <label htmlFor="qty">Qty: </label>
            <input
              min="1"
              max="10"
              type="number"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />
          </CartItemQty>
          <DeleteButton onClick={() => removeFromCart(item.id)}>
            <DeleteIcon />
          </DeleteButton>
        </CartItemsActions>
      </ContentFull>
    </CartItemDiv>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
