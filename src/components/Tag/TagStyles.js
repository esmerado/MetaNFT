import styled from "styled-components";
import { breakpoints } from "../../themes/default";

export const ContainerTag = styled.div`
  display: block;
  display: flex;
  flex-direction: row;
  padding: 1em;
  padding-bottom: 0;
  margin: 0;
  flex-wrap: wrap;
  background-color: #AF5E41;
  z-index: 2;
`;

export const TagButton = styled.button`
  color: #FFFFFF;
  border: none;
  padding: 0.5em 1em;
  border-radius: 2em;
  margin: 0 5px 0 5px;
  transition: all .2s ease-in-out;
  cursor: pointer;
  background: #050418;
  letter-spacing: 2px;

  :hover {
    box-shadow: 1px 3px 5px rgb(5, 4, 24, 0.4);
  }

  @media ${breakpoints.sm} {
    margin: 0.3em;
  }
`;
