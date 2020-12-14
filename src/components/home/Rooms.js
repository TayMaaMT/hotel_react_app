import Card from "../globals/Card";
import styled from "styled-components";
import Title from "../globals/Title";
import Section from "../globals/Section";
// import rooms from "./rooms-data";
import { setColor, media, setRem } from "../../styles";
import { useState ,useEffect} from 'react';
import axios from "axios";

// const initialState={
//     rooms
// }
 const Rooms=()=> {
    const [roomState, setRooms] = useState([]);
    
    useEffect(() => {
      const callApiRooms = async()=>{
        const {data} = await axios.get('http://localhost:3000/api/hotel/room');
        setRooms(data);
      }
      callApiRooms();
    },[]);
      return (
        <Section color={setColor.lightGrey}>
          <Title title="our rooms" center />
          <RoomsCenter>
            {roomState.map(room => {
              return <Card key={room.id} room={room} />;
            })}
          </RoomsCenter>
        </Section>
      );

  }
  
  const RoomsCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    ${media.tablet`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-column-gap:${setRem(32)};
    `};
    ${media.desktop`
    width:100vw;
    max-width:1170px;
    `};
    ${media.large`
      grid-template-columns:repeat(3,1fr);
    `};
  `;
  export default Rooms;