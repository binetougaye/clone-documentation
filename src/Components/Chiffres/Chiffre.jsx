import React from "react";
import { data } from "../../utils/data";
export default function Chiffre() {
    return (
        <div className="flex">
            {data &&
                data?.map((item, index) => (
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[48px] text-[#1a73e8] font-medium">
                            {item.num}
                        </p>
                        <p className="text-[20px] text-[#344767] ">
                            {item.title}
                        </p>
                        <p className="text-center text-[16px] text-[#7b809a] ">
                            {item.text}
                        </p>
                    </div>
                ))}
        </div>
    );
}
