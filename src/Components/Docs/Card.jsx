import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import front from "../../assets/images/rotating-card-bg-front.bdcdfadc.jpeg";
import back from "../../assets/images/rotating-card-bg-back.183088de.jpeg";
import TouchAppIcon from "@mui/icons-material/TouchApp";

export default function Card() {
    const [flipped, setFlipped] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    return (
        <div
            className="w-[30%] relative cursor-pointer perspective-1000"
            onClick={() => setFlipped(!flipped)}
        >
            {/* Front Side */}
            <a.div
                className="absolute w-full h-full  text-white flex items-center  justify-center rounded-lg backface-hidden"
                style={{ opacity: opacity.to((o) => 1 - o), transform }}
            >
                <img
                    src={front}
                    alt="Back"
                    className="w-full h-full shadow-lg object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center bg-[#1a73e8] opacity-80  justify-center">
                    <p>
                        <TouchAppIcon fontSize="large" />
                    </p>
                    <h2 className="text-[30px] mt-5 font-bold text-white">
                        Free the Material kit
                    </h2>
                    <p className="text-white text-center font-light mt-3">
                        All the MUI components that you need in development have
                        been re-designed with the new look.
                    </p>
                </div>
            </a.div>

            {/* Back Side */}

            <a.div
                className="absolute w-full h-full text-white flex items-center justify-center  backface-hidden"
                style={{
                    opacity,
                    transform,
                    rotateX: "180deg",
                }}
            >
                <img
                    src={front}
                    alt="Front"
                    className="w-full h-full object-cover shadow-lg rounded-lg"
                />
                <div className="absolute inset-0 bg-[#1a73e8] opacity-80  flex flex-col items-center justify-center">
                    <h2 className="text-[30px] font-bold text-white">
                        Discover More
                    </h2>
                    <p className="text-white text-center">
                        You will save a lot of time going from prototyping to
                        full-functionnal code because all elements are
                        implemented
                    </p>
                    <button className="uppercase">start with header</button>
                </div>
            </a.div>
        </div>
    );
}
