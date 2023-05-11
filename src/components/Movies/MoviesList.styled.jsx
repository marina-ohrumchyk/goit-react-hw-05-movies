import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const List = styled.ul`
    list-style: none;
`

export const Item = styled.li`
    margin-bottom: 20px;
`

export const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  margin: 1rem;
`