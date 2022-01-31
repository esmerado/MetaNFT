import styled from "styled-components";
import { Center } from "../../styles/globalStyles";
import { breakpoints } from "../../themes/default";

export const CenterShop = styled(Center)`
@media ${breakpoints.sm} {
    column-count: 1;
    width: auto;
    padding-left: 0.8em;
    padding-top: 3em;
  }
`