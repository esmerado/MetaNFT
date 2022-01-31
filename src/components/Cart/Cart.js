import React, { useState, useEffect } from "react";
import { CartDiv, CartItems, CartSummary, SummaryCheckOutBtn, SummaryPrice, SummaryTitle } from "./CartStyles";
import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";
import { Container } from "../../styles/globalStyles";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <Container>
      <CartDiv>
      <CartItems>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItems>
      <CartSummary>
        <SummaryTitle>Cart Summary</SummaryTitle>
        <SummaryPrice>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </SummaryPrice>
        <SummaryCheckOutBtn>
          Proceed To Checkout
        </SummaryCheckOutBtn>
      </CartSummary>
    </CartDiv>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
