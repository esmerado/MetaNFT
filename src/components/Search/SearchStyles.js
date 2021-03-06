import { Field, Form } from "formik";
import styled from "styled-components";

export const FieldStyled = styled(Field)`
  padding: 0.5em 1em;
  border: 1px solid #0e172c;
  margin: 5em;
  border-radius: 1em;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const FormStyled = styled(Form)`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #af5e41;
  z-index: 2;
`;
