import Section from "../globals/Section";
import Item from "../globals/Item";
import {
  setRem,
  setColor,
  setLetterSpacing,
  setFont
} from "../../style/styles";
import styled from "styled-components";
import square from '../../images/squares.svg';
import bath from '../../images/bath.svg';
import bed from '../../images/bed.svg';
import price from '../../images/price.svg';
import available from '../../images/date.svg';
import internet from '../../images/wifi.svg';
import seating_area from '../../images/seat.svg';
import review from '../../images/rating.svg';

const Data = ({details}) => {

    return (
      <Section>
          <DataContainer>
            
          <div className="right">
            <Item icon={square}title={`square`}data={`${details.square} square metres`}/>
            <Item icon={bed}title={`bed`}data={details.bed}/>
            <Item icon={available}title={`available`}data={details.available?`is available`:`not available`}/>
            <Item icon={internet}title={`internet`}data={details.internet?`free wifi`:`paid wifi`}/>
          </div>
          <div className="left">
            <Item icon={bath}title={`bathroom`}data={details.bathroom}/>
            <Item icon={seating_area}title={`seating area`}data={details.seating_area}/>
            <Item icon={price}title={`price`}data={`$ ${details.price}`}/>
            <Item icon={review}title={`review`}data={details.review}/>
          </div>
          <p>
            {details.description}
          </p>
          </DataContainer>

      </Section>
    );
  };
  const DataContainer = styled.div`
    margin:0 auto;
    width: 80vw;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    background: ${setColor.lightGrey};
    .left,.right{
       
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
 
    }
    p{
        font-size:${setRem(15)};
        padding:${setRem(50)};
        ${setLetterSpacing(1)};
        ${setFont.main};
    }
  `
  export default Data;
