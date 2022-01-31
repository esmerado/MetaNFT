import {
  ButtonLink,
  CardButton,
  CardContentDiv,
  HeaderContainer,
  HeaderP,
  HeaderTitle,
  MainCard,
  MainText,
  MainTextDiv,
  MainTextTitle,
} from "./HeaderStyles";
import MonkeyImage from "../../assets/images/monkey_king.png";
const Header = () => {
  return (
    <>
      <HeaderContainer>
        <MainTextDiv>
          <MainText color="#6EABE9">From the creators of Next Level.</MainText>
          <MainTextTitle>
            The market of <br></br> the future.
          </MainTextTitle>
          <MainText size="1.2em" margin="2em" color="#FFFFFF">
            Welcome to the world's largest digital art marketplace. <br/>
            In this marketplace you will be able to buy all the NTFs <br/>
            around the world.
          </MainText>
          <ButtonLink to="search">Search new Tokens</ButtonLink>
        </MainTextDiv>
        <MainCard>
          <img alt="monkey_nft" src={MonkeyImage} />
          <CardContentDiv>
            <HeaderTitle>King Monkey</HeaderTitle>
            <HeaderP>The king of all the monkeys of the metaverse.</HeaderP>
            <CardButton>Add to Cart</CardButton>
          </CardContentDiv>
        </MainCard>
      </HeaderContainer>
    </>
  );
};

export default Header;
