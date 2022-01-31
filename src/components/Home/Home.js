import { useEffect, useState } from "react";
import { UserService } from "../../data/data";
import Header from "../header/Header";
import {
  Article,
  ButtonDiv,
  BuyButton,
  Center,
  Container,
  HR,
  Image,
  LikeDiv,
  LikeDivs,
  LikeP,
  P,
} from "../../styles/globalStyles";
import { ContainerTag, TagButton } from "../Tag/TagStyles";
import { tagsContent } from "../../data/localData";
import { AiOutlineLike } from "react-icons/ai";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const service = new UserService();

  const open = (url) => window.open(url);

  console.log({ photos });

  useEffect(() => {
    service.getRandom().then((data) => {
      setPhotos(data);
      setLoading(false);
    });
  }, []);

  const handleGetBySearch = async (x) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?per_page=20&query=${x.title}`,
      {
        headers: {
          Authorization:
            "Client-ID 6HTz9Nsce8IGdmC76nOFVNLA5uHTOGskKWu0DO-XSDs",
        },
      }
    );
    const data = await response.json();
    console.log("test", data);
    setPhotos(data.results);
  };

  return (
    <div>
      <Header />
      <Container>
        <ContainerTag>
          {tagsContent.map((x) => (
            <TagButton
              onClick={async () => {
                handleGetBySearch(x);
              }}
              key={x.id}
            >
              {x.title}
            </TagButton>
          ))}
        </ContainerTag>
        <Center>
          {photos.map((x) => (
            <Article key={x.id}>
              <Image src={x.urls.regular} alt={photos.alt_description} />
              <P>
                {(x.description !== null) | (x.alt_description !== null)
                  ? [x.description, x.alt_description].join(" - ")
                  : "No content avalible"}
              </P>
              <LikeDivs>
                <LikeDiv>
                  <LikeP>{x.likes}</LikeP>
                  <AiOutlineLike
                    style={{ color: "#ffff", margin: "13px 0px 0 5px" }}
                  />
                </LikeDiv>

                <P>{x.updated_at.substr(0, 10)}</P>
              </LikeDivs>
            </Article>
          ))}
        </Center>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, image) => dispatch(addToCart(id, image)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
