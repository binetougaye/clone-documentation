import React from "react";

export default function Title({ text, title, para }) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <p className="bg-[#aecef7] w-40 font-bold py-1 rounded-md text-[#095bc6] uppercase text-[12px] mb-2">
                {text}
            </p>
            <h1 className="text-[#344767] text-[40px] font-bold mb-2">
                {title}
            </h1>
            <p className="text-[#7b809a] text-[20px]">{para}</p>
        </div>
    );
}
