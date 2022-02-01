import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../themes/default";

export const HeaderContainer = styled.div`
  background-color: #050418;
  display: flex;
  justify-content: space-evenly;
  align-content: flex-end;
  flex-direction: row;
  height: 90vh;
  overflow: hidden;

  @media ${breakpoints.sm} {
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 130vh;
    margin-top: 1em;
  }

  @media ${breakpoints.spm} {
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 170vh;
    margin-top: 1em;
  }
`;

export const HeaderTitle = styled.span`
  color: #6eabe9;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.3em;
`;

export const HeaderP = styled.span`
  color: #ffffff;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.3em;
`;

export const CardButton = styled.button`
  margin-top: 2em;
  background-color: #af5e41;
  cursor: pointer;
  border: none;
  color: #050418;
  padding: 0.8em;
  font-weight: 700;
  letter-spacing: 4px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  &:hover {
    background-color: #985138;
  }
`;

export const CardContentDiv = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  @media ${breakpoints.sm} {
    text-align: left;
  }
`;

export const MainCard = styled.div`
  margin-top: 4em;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 19rem;
  height: 520px;
  -webkit-box-reflect: below 2px
    linear-gradient(transparent, transparent, #0004);

  transform-origin: center;
  transform: perspective(800px) rotateY(-20deg);
  transition: 0.5s;
  overflow: hidden;
  align-items: center;

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: contain;
  }
`;

export const MainTextDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 4em;

  @media ${breakpoints.sm} {
    align-items: center;
    margin-top: 2em;
      }
`;

export const MainTextTitle = styled.h2`
  color: #ffffff;
  font-family: "Times New Roman", Times, serif;
  font-size: 3em;
  padding: 0;
  margin: 0.5em 0 0 0;
`;

export const MainText = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-family: "Times New Roman", Times, serif;
  padding: 0;
  margin-top: ${(props) => props.margin};
  margin-bottom: 0;
`;

export const ButtonLink = styled(Link)`
  margin-top: 3em;
  text-decoration: none;
  color: #050418;
  padding: 1em 1.3em;
  background-color: #af5e41;
  width: 140px;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 4px 5px rgb(152, 81, 56, 0.5);
  border-radius: 5px;

  &:hover {
    background-color: #985138;
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
