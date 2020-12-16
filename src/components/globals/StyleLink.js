import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
    setColor,
 
  } from "../../style/styles";
 const StyledLink= (props) => <Styled {...props} />
const Styled = styled(Link)`
    text-decoration: none;
    color:${setColor.mainWhite};
    &:hover, &:link, &:active {
        text-decoration: none;
        color:${setColor.mainBlack};
    }
`;

export default StyledLink;
