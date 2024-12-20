import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type HorizontalSliderProps = {
    items: any;
};

const HomeSlider: React.FC<HorizontalSliderProps> = ({ items }) => {
    const horizontalSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <Slider {...horizontalSettings}>
                {items.map((item: any, index: any) => (
                    <div key={index} className="slider-item">
                        <div className="icon-container">{item}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeSlider;
