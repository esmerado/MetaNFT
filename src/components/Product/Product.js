import React from "react";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../redux/Shopping/shopping-actions";
import { Article, ButtonDiv, BuyButton, HR, Image, P } from "../../styles/globalStyles";
import {Price} from './ProductStyles'

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <Article style={{borderRadius: '15px'}} key={product.id}>
      <Image src={product.image} alt={product.title} />
      <P style={{fontSize: '1.5em'}}>
        {product.title}
      </P>
      <HR />
      <ButtonDiv>
        <Price>
          {product.price} $
        </Price>
        <BuyButton onClick={() => addToCart(product.id)}>Add to Cart</BuyButton>
      </ButtonDiv>
    </Article>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
