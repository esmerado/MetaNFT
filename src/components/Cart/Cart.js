import React, { useState, useEffect } from "react";
import { CartDiv, CartItems, CartSummary, SummaryCheckOutBtn, SummaryPrice, SummaryTitle } from "./CartStyles";
import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";
import { Container } from "../../styles/globalStyles";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import {AiFillCloseCircle} from 'react-icons/ai'

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [open, setOpen] = React.useState(false);

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


  const handleClick = () => {
    if(totalItems !== 0) {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const clearCart = () => {
    setTotalItems(0)
    setTotalPrice(0)
  }

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        READY
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <AiFillCloseCircle fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

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
        <SummaryCheckOutBtn onClick={() => {
          handleClick()
          clearCart()
        }}>
          Proceed To Checkout
        </SummaryCheckOutBtn>
      </CartSummary>
    </CartDiv>
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Added Product"
        action={action}
      >
        <Alert severity="success">Thanks for buying!!</Alert>
      </Snackbar>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
