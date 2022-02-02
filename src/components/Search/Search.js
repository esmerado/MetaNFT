import { Form, Formik } from "formik";
import { useState } from "react";
import { Article, Center, Container, Image, InputForm, P } from "../../styles/globalStyles";
import { FieldStyled, FormStyled } from "./SearchStyles";

const Search = () => {
  const [photos, setPhotos] = useState([]);
  const open = (url) => window.open(url);

  return (
    <>
      <Container>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={async (values) => {
          const response = await fetch(
            `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
            {
              headers: {
                Authorization:
                  "Client-ID 6HTz9Nsce8IGdmC76nOFVNLA5uHTOGskKWu0DO-XSDs",
              },
            }
          );
          const data = await response.json();
          setPhotos(data.results);
        }}
      >
        <FormStyled style={{marginBottom: '-3em', padding: 0}}>
          <FieldStyled placeholder="Search..."s name="search" />
        </FormStyled>
      </Formik>
        <Center>
          {photos.map((x) => (
            <Article key={x.id} onClick={() => open(x.links.html)}>
              <Image src={x.urls.regular} alt={photos.alt_description} />
              <P>{[x.description, x.alt_description].join(" - ")}</P>
            </Article>
          ))}
        </Center>
      </Container>
    </>
  );
};

export default Search;
