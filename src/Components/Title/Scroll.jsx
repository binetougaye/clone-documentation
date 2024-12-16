import React from "react";

export default function Scroll({ title, text }) {
    return (
        <div>
            <h1 className="text-[#344767] text-[30px] font-bold">{title}</h1>
            <p className="text-[#7b809a text-[16px] font-light mt-2">{text}</p>
        </div>
    );
}
