// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// type VerticalSliderProps = {
//     items: string[];
// };

// const VerticalSlider: React.FC<VerticalSliderProps> = ({ items }) => {
//     const verticalSettings = {
//         dots: false,
//         arrows: false,
//         infinite: true,
//         speed: 2000,
//         slidesToShow: 3,
//         vertical: true,
//         autoplay: true,
//         autoplaySpeed: 0,
//         cssEase: "linear",
//     };

//     return (
//         <>
//             <Slider {...verticalSettings}>
//                 {items.map((item, index) => (
//                     <div key={index} className="text-center text-xs shadow-lg bg-blue-100 rounded-lg text-blue-500">
//                         {item}
//                     </div>
//                 ))}
//             </Slider>
//         </>
//     );
// };

// export default VerticalSlider;
