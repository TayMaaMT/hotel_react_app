import Header from "../components/details/Header";
import Data from "../components/details/Data";
import { useState ,useEffect} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom';


const Details = () => {
  const [DetailsState, setDetails] = useState({});
  const {id} =useParams();

  useEffect(() => {
    const callApiOwner = async()=>{
      const {data} = await axios.post('https://taymaa-hotel.herokuapp.com/api/hotel/findRoom', {
        id,
      });
      const room = data[0];
      const img = [room.img1,room.img2,room.img3,room.img4,room.img5];
      const details = {
        description:room.description,
        bathroom:room.bathroom,
        bed:room.bed,
        square:room.square,
        price:room.price,
        seating_area:room.seating_area,
        internet:room.internet,
        available:room.available,
        review:room.review
      }
      setDetails({img,title:room.title,details});
    }
    callApiOwner();

  },[id]);

  return (
    <>
    {console.log(DetailsState)}
    {DetailsState.img?(<>
    <Header img={DetailsState.img} title={DetailsState.title}/>
     <Data details={DetailsState.details}/>
     </>):<></>}
     
    </>
  );
};

export default Details;
