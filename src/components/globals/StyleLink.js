import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
    setColor,
 
  } from "../../styles";
const StyledLink = styled(Link)`
    text-decoration: none;
    color:${setColor.mainWhite};
    &:hover, &:link, &:active {
        text-decoration: none;
        color:${setColor.mainBlack};
    }
`;

export default (props) => <StyledLink {...props} />;
