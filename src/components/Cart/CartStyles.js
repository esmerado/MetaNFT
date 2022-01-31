import styled from "styled-components";
import { breakpoints } from "../../themes/default";

export const CartDiv = styled.div`
margin-top: 5em;
  width: 1100px;
  display: flex;
  justify-content: space-between;

  @media ${breakpoints.sm} {
    column-count: 1;
    width: auto;
    padding-left: 0.8em;
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

export const CartItems = styled.div`
  flex: 0.7;
  margin-right: 1rem;

`;

export const CartSummary = styled.div`
  height: 250px;
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  background-color: #050418;

`;

export const SummaryTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
`;

export const SummaryPrice = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  span:nth-child(1) {
    font-size: 0.9rem;
    flex: 0.6;
  }

  span:nth-child(2) {
    flex: 0.4;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const SummaryCheckOutBtn = styled.button`
  padding: 10px 17px;
  border: 1px solid #fff;
  border-radius: 10px;
  background: none;
  color: var(--light-color);
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  transition: all 0.3s ease-in-out;

  &focus {
    outline: none;
    border: 1px solid var(--secondary-color);
  }

  &:hover {
    opacity: 0.75;
    background-color: #fff;
    color: #050418;
  }

  @media ${breakpoints.sm} {
    margin-top: 2em;
  }
`;
