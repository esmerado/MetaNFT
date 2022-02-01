import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { breakpoints } from "../../themes/default";

export const Nav = styled.header`
  background-color: #050418;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px 0 22px;
  z-index: 2;
  position: relative;


  @media ${breakpoints.sm} {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: -3em;
  }
`;

export const NavTitle = styled.h1`
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 5px;
  font-weight: 200;
  color: #d9d4e7;
  padding: 0;
  margin: 0;

  span {
    color: #af5e41;
  }

  @media ${breakpoints.sm} {
    margin-top: 1em;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  transition: all 0.3s ease-in-out;
  position: relative;
  margin-right: 2em;

  li {
    display: inline-block;
    padding: 0 1em 0 1em;
    color: #ffff;
    transition: all 0.3s ease-in-out;

  }

  p {
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: #ffff;
    transition: all 0.3s ease-in-out;
    border-bottom: 1px solid rgb(255,255,255,0);



    :hover {
    border-bottom: 1px solid rgb(255,255,255,1);

    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 2px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ShopIcon = styled(AiOutlineShoppingCart)`
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: all 0.3s ease-in-out;
  color: #ffff;
`;

export const ShopButton = styled.button`
  border-radius: 0em;
  border: none;
  padding: 1em;
  transition: all 0.3s ease-in-out;
  background-color: #050418;

  &:hover {
    background-color: #ffff;
    cursor: pointer;
    ${ShopIcon} {
      color: #050418;
    }
  }
`;

export const Bubblealert = styled.span`
  background-color: #e9725a;
  border-radius: 15px;
  color: #fff;
  padding: 2px 10px;
  font-size: 0.9rem;
width: 20px;
`;
