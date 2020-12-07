import React from "react";
import Section from "../globals/Section";
import Title from "../globals/Title";
import Slider from "./Slider";
import Card from "../globals/Card";
import {
  setRem,
  setBorder,
  setColor,
  media
} from "../../styles";
import styled from "styled-components";
import room1 from "../../images/room1.jpeg";

const Realtor = {
    img : room1,
    title :"Realtor name",
    info : ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut
      quos ea optio ipsa`}
const Header = () => {
    return (
      <Section>
          <Title title="Basic Economy" left /> 
        <HeaderCenter>
          <div className="about-img">
            <Slider/>
          </div>
          <div className="about-info">
          <Card room={Realtor}/>
          </div>
        </HeaderCenter>
      </Section>
    );
  };

  const HeaderCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  h3{
    margin-left:${setRem(100)}
  }
  .about-info{
      margin-top:${setRem(-25)}
  }
  
  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
  .about-img,
  .about-info {
    padding: ${setRem(0)};
  }
  width:100vw;
  max-width:1170px;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:${setRem(32)};
  .about-img{
   align-self:center;
  }
  
  }
  `}
`;
export default Header;
  