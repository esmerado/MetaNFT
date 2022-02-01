import {
  Nav,
  NavTitle,
  Ul,
  StyledLink,
  ShopIcon,
  ShopButton,
  Bubblealert,
} from "./NavbarStyles";
import { navContent } from "../../data/localData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <>
      <Nav>
        <NavTitle>
          Meta<span>NFT</span>
        </NavTitle>
        <Ul>
          {navContent.map((x) => (
            <li>
              <StyledLink to={x.url}>
                <p key={x.id}>{x.title}</p>
              </StyledLink>
            </li>
          ))}
        </Ul>
        <Link to="cart">
          <ShopButton>
            <Bubblealert>{cartCount}</Bubblealert>
            <ShopIcon size="2em" />
          </ShopButton>
        </Link>
      </Nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
