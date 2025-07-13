import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.css";
import Slider from "react-slick";

function Carousel({children}){
    const settings = {
        dots: true,
        infinite: true, 
        speed: 500,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return(
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default Carousel;