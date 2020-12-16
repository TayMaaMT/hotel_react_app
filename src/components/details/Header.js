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
} from "../../style/styles";
import styled from "styled-components";
import { useState ,useEffect} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom';

const Header = ({img,title}) => {
  const [OwnerState, setOwner] = useState({});
  const {owner_id} =useParams();
  console.log(title);
  useEffect(() => {
    const callApiOwner = async()=>{
      const {data} = await axios.post('http://localhost:3000/api/hotel/findOwner', {
        id:owner_id,
      });
      setOwner({title:data[0].username,img1:data[0].picture,description:data[0].information,phone:data[0].phone});
    }
    callApiOwner();

  },[owner_id]);
    return (
      <Section>
          <Title title={title} left /> 
        <HeaderCenter>
          <div className="about-img">
            <Slider img={img}/>
          </div>
          <div className="about-info">
          <Card room={OwnerState}/>
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
    width: 90vw;
    margin: 0 auto;

  ${media.tablet`
  display:grid;
  width:90vw;

  grid-column-gap:${setRem(32)};

  `};
  ${media.desktop`
  
  width:60vw;
  max-width:1170px;
  img {
    width: 100%;
    display: block;
    ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
  }
  `};
  ${media.large`
    grid-template-columns:repeat(3,1fr);
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  `};
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
  