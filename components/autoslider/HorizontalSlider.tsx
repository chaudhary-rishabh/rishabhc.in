// components/HorizontalSlider.tsx
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Skill = {
    label: string;
    icon: JSX.Element;
};

type HorizontalSliderProps = {
    skills: Skill[];
    direction?: "left" | "right";
};

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ skills, direction = "right" }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        rtl: direction === "left",
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 4 } },
            { breakpoint: 480, settings: { slidesToShow: 3 } },
        ],
    };

    return (
        <Slider {...settings}>
            {skills.map((skill, index) => (
                <div key={index} className="px-2"> {/* 👈 consistent spacing using padding instead of margin */}
                    <motion.div
                        className="flex flex-col items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.05,
                            ease: "easeOut",
                        }}
                    >
                        <div className="rounded-lg bg-white shadow-md p-2 flex items-center gap-2 w-auto pe-14 border border-orange-200 hover:shadow-orange-300 transition-shadow duration-300">
                            <div className="text-orange-600 text-lg">{skill.icon}</div>
                            <motion.span
                                animate={{
                                    backgroundImage: [
                                        "linear-gradient(45deg, #ea580c, #dc2626)",
                                        "linear-gradient(45deg, #f97316, #ea580c)",
                                        "linear-gradient(45deg, #dc2626, #f97316)",
                                    ],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                className="bg-clip-text text-transparent text-xs font-bold"
                            >
                                {skill.label}
                            </motion.span>
                        </div>
                    </motion.div>
                </div>
            ))}
        </Slider>
      
    );
};

export default HorizontalSlider;
