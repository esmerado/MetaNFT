import React from "react";

// Redux
import { connect } from "react-redux";

import Product from "../Product/Product";
import { Container } from "../../styles/globalStyles";
import { CenterShop } from "./ShoppingCartStyles";

const Products = ({ products }) => {
  return (
    <Container>
      <CenterShop>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      </CenterShop>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);

