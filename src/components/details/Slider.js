import Slider from "react-slick";
import { setColor, media, setRem,setBorder } from "../../styles";

const  SliderImg =({img})=>  {
	const rooms = img?img:[]
		const settings = {
			customPaging: function (i) {
				return (<img src={rooms[i]} alt="img slider"/>);
			},
			dots: true,
			dotsClass: "slick-dots slick-thumb",
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		}
		return (
			<div className="container">
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
               
				<Slider {...settings}>
                {rooms.map((room,id) => {
              return( <div key={id}>
                            <img  src={room} alt="img slider" />
                        </div>)
                        })}
				</Slider>
			</div>
		);
	}


const cssstyle = `

.container {
	margin: 0 auto;
	padding: 0px 40px 40px 40px;
	width: 60vw;
  }
.slick-next:before, .slick-prev:before {
    color:${setColor.mainGray};
}
.slick-thumb {
    bottom: -55px;
}
.slick-thumb li {
	width: 15%;
    height: 45px;
		cursor: pointer;
}
img {
    max-width: 100%;
    margin: 0 0 ${setRem(1.45)};
    padding: 0;
}

${media.tablet` width: 90vw;
${setBorder({ width: "6px", color: setColor.primaryColor })};
`}
`;
export default SliderImg;