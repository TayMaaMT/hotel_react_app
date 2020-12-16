import Hero from "../globals/Hero";
import aboutImg from "../../images/aboutBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Button";

const Header = () => {
  return (
    <Hero img={aboutImg}>
       <Banner
        greeting="welcome to"
        title="Beach Hotel "
        text="Across the world, our hotels anchor a community of travelers united in the pursuit of inspired environments, genuine local culture ."
      >
         <PrimaryBtn t="1rem">view details</PrimaryBtn>
     </Banner>
    </Hero>
  );
};

export default Header;
