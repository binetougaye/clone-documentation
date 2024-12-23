import React from "react";
import desktop from "../../assets/images/desktop.jpeg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function SectionCTA() {
    return (
        <div className="mt-40 relative">
            <img
                src={desktop}
                className="md:h-[40vh]  w-full object-cover rounded-md"
                alt="Desktop background"
            />
            <div className="absolute top-0 left-0 flex items-center justify-start w-full h-full text-white p-8 bg-black bg-opacity-50 rounded-md">
                <div>
                    <p className="md:text-[24px] text-[14px]">
                        Built by developers
                    </p>
                    <h1 className="md:text-[48px] text-[24px] font-bold">
                        Complex Documentation
                    </h1>
                    <p className="mt-4 md:text-[20px] text-[14px] ">
                        From colors, cards, typography to complex elements, you
                        will find the full documentation. Play with the utility
                        classes and you will create unlimited combinations for
                        our components.
                    </p>
                    <p className="mt-4 cursor-pointer">
                        Read Docs
                        <ArrowForwardIcon />
                    </p>
                </div>
            </div>
        </div>
    );
}
