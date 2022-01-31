import styled from "styled-components";
import { breakpoints } from "../themes/default";

export const Container = styled.div`
  background-color: #af5e41;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${breakpoints.sm} {
    height: auto;
  }

`;

export const Center = styled.div`
  column-count: 3;
  width: 1200px;
  margin-top: -1em;
  z-index: 1;

  @media ${breakpoints.sm} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: auto;
    padding-left: 0.8em;
  }
`;

export const Article = styled.article`
  width: 370px;
  display: inline-block;
  transition: box-shadow 0.3s ease-in-out;

  background: rgba(5, 4, 24, 1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 10px;
  margin: 40px 10px 0 10px;
  border-radius: 10px;


  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.5);
  object-fit: cover;

  transform-origin: center;
  transform: perspective(800px) rotateY(0deg);

  transition: 0.5s;

  :hover {
    box-shadow: 3px 4px 5px rgb(0, 0, 0, 0.5);
    transform: perspective(800px) rotateY(5deg);
  }
`;

export const P = styled.p`
  margin: 10px 15px;
  color: #d9d4e7;
`;

export const Image = styled.img`
  width: inherit;
  border-radius: 10px;
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.h1`
  color: #0e172c;
  font-weight: 400;
  font-size: 3em;
  margin-top: 1em;
`;

export const LikeDivs = styled.div`
  display: flex;
`;
export const LikeDiv = styled.div`
  display: flex;
`;

export const LikeP = styled.p`
  color: #ffff;
  margin: 10px 0px 0 15px;
`;

export const HR = styled.hr`
  border: 0.5px solid rgb(217, 212, 231, 0.3);
`;

export const BuyButton = styled.button`
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

  margin: 1em;
  border-radius: 5px;

  &:hover {
    background-color: #985138;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`
