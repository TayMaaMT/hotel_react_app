import React from "react";
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/aboutBcg.jpeg";
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media
} from "../../style/styles";
import { PrimaryBtn } from "../globals/Button";
import styled from "styled-components";

const About = () => {
    return (
      <Section>
        <AboutCenter>
          <div className="about-img">
            <img src={aboutImg} alt="about us" />
          </div>
          <div className="about-info">
            <Title title="about us" />
            <p>
            For a quarter century, we’ve been at the forefront of a movement in travel by curating a global collection of independent, design-driven hotels that function as social hubs and spaces for purposeful experiences.
            </p>
            <PrimaryBtn>read more</PrimaryBtn>
          </div>
        </AboutCenter>
      </Section>
    );
  };

  const AboutCenter = styled.div`
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
  .about-info {
    p {
      ${setLetterSpacing(2)};
    }
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
  .about-info{
   p{
    width:80%;
   }
  }
  `}
`;

export default About;
  