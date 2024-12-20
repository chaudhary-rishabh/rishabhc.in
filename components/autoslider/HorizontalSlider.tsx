import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type HorizontalSliderProps = {
    items: string[];
};

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ items }) => {
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
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <div className="w-full">
            <Slider {...horizontalSettings}>
                {items.map((item, index) => (
                    <div key={index} className="text-center text-lg font-semibold text-blue-500">
                        {item}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HorizontalSlider;
