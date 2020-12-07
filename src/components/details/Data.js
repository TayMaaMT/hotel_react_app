import Section from "../globals/Section";
import Item from "../globals/Table";
// import Slider from "./Slider";
// import Card from "../globals/Card";
import {
  setRem,
  setColor,
  setLetterSpacing,
  setFont
} from "../../styles";
import styled from "styled-components";


const Data = () => {
    return (
      <Section>
          <DataContainer>
          <div className="right">
          <Item/>
          <Item/>
          <Item/>
          </div>
          <div className="left">
          <Item/>
          <Item/>
          <Item/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut
            quos ea optio ipsa ,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut
            quos ea optio ipsa ,
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut
            quos ea optio ipsa ,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut
            quos ea optio ipsa 
              </p>
          </DataContainer>

      </Section>
    );
  };
  const DataContainer = styled.div`
    display:flex;
    margin:0 auto;
    width: 80vw;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    background: ${setColor.lightGrey};
    .left,.right{
        width:40%;
    }
    p{
        font-size:${setRem(15)};
        padding-top:${setRem(70)};
        ${setLetterSpacing(1)};
        ${setFont.main};
    }
  `
  export default Data;
