import React from "react";

// Redux
import { connect } from "react-redux";

import Product from "../Product/Product";
import { Container } from "../../styles/globalStyles";
import { CenterShop } from "./ShoppingCartStyles";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import {AiFillCloseCircle} from 'react-icons/ai'

const Products = ({ products }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
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
      <CenterShop>
      {products.map((product) => (
        <Product handle={handleClick} key={product.id} product={product} />
      ))}
      </CenterShop>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Added Product"
        action={action}
      >
        <Alert severity="success">Added Product</Alert>
      </Snackbar>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);

