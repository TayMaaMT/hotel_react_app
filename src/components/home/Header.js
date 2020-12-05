import Hero from "../globals/Hero";
import aboutImg from "../../images/aboutBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Button";

const Header = () => {
  return (
    <Hero img={aboutImg}>
       <Banner
        greeting="welcome to"
        title="beachwalk "
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi provident eos sapiente deleniti in quisquam."
      >
         <PrimaryBtn t="1rem">view details</PrimaryBtn>
     </Banner>
    </Hero>
  );
};

export default Header;
