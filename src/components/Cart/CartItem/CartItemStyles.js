import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { breakpoints } from "../../../themes/default";

export const CartItemDiv = styled.div`
  margin-bottom: 1rem;
  display: flex;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 15px;
  background-color: #050418;

  @media ${breakpoints.sm} {
    column-count: 1;
    width: 300px;
    flex-direction: column;
    margin-top: 2em;
  }

  img {
    width: 350px;
    object-fit: contain;
    border-radius: 10px;

    @media ${breakpoints.sm} {
    width: 100%;
    object-fit: cover;
  }
  }
`;

export const ContentFull = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1em;
`;

export const CartDetails = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
`;

export const CartImage = styled.img`
  width: 350px;
  object-fit: contain;
  border-radius: 10px;
`;

export const Details = styled.p`
  font-size: 1.5em;
`;

export const CartItemsActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
`;

export const CartItemQty = styled.div`
  display: flex;
  align-items: center;

  label {
    color: #fff;
    padding-right: 0.5em;
    margin-bottom: 0.4em;
    font-weight: 400;
  }

  input {
    border-radius: 0.1em;
    padding: 0.3em;
    border: none;
    font-size: 1em;
    outline: none;
    width: 50px;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const DeleteIcon = styled(AiFillDelete)`
  color: #F51717;
  font-size: 2.5em;
  transition: all .3s ease-in-out;

  &:hover {
    color: #D01313;
  }
`;
