import React from "react";
export default function Social() {
    return (
        <div className="flex md:flex-row flex-col md:gap-0 gap-12 items-center justify-between mt-52 pb-14">
            <div>
                <h1 className="text-[#344767] font-bold text-[24px]">
                    Thank you for your support!
                </h1>
                <p className="text-[#7b809a] text-[20px]">
                    We deliver the best web products
                </p>
            </div>
            <div className="flex gap-4">
                <button className="bg-[#55acee] px-5 py-2 text-sm rounded-lg text-white">
                    TWEET
                </button>
                <button className="bg-[#3b5998] px-5 py-2 text-sm rounded-lg text-white">
                    SHARE
                </button>
                <button className="bg-[#cc2127] px-5 py-2 text-sm rounded-lg text-white">
                    PIN IT
                </button>
            </div>
        </div>
    );
}
