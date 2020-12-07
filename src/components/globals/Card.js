import { SmallBtn } from "./Button";
import StyleLink from "./StyleLink";
import styled from "styled-components";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  setBorder
} from "../../styles";

const Room = ({ className, room }) => {
    const { img = "", title = "", info = "", price = 0 } = room;
    return (
      <article className={className}>
        <div className="img-container">
          <img src={img} alt="single room" />
          <div className="price">${price}</div>
        </div>
        <div className="room-info">
          <h4>{title}</h4>
          <p>{info}</p>
          <StyleLink to="/hotel" ><SmallBtn>Hello</SmallBtn></StyleLink>
        </div>
      </article>
    );
  };

  export default styled(Room)`
  background: ${setColor.mainWhite};
  margin: ${setRem(32)} 0;
  .img-container {
    background: ${setColor.mainBlack};
    position: relative;
    img {
      width: 100%;
      display: block;
      ${setTransition};
    }
    &:hover img {
      opacity: 0.5;
    }
    .price {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      ${setLetterSpacing(5)};
      font-size: ${setRem(22)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainWhite })};
      opacity: 0;
      ${setTransition()};
    }
    &:hover .price {
      opacity: 1;
    }
  }
  .room-info {
    padding: ${setRem()};
    h4 {
      text-transform: capitalize;
      ${setLetterSpacing(1)};
    }
    p {
      ${setLetterSpacing(1)};
    }
  }
  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }
`
;
  