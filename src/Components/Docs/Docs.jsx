import React from "react";
import { dataTwo } from "../../utils/data";
import Card from "./Card";
export default function Docs() {
    return (
        <div className="flex md:flex-row flex-col justify-center md:items-start items-center md:gap-[40px] gap-[100px]  mt-[100px] md:px-12 px-2">
            <Card />
            <div className="grid md:grid-cols-2 grid-cols-1  md:w-[60%] w-1/2 md:mt-0 mt-[200px] md:gap-y-12 gap-y-2 md:gap-x-16 gap-x-2">
                {dataTwo &&
                    dataTwo?.map((item, index) => (
                        <div key={index}>
                            <p className="text-[#1a73e8]">{item.icon}</p>
                            <p className="text-[#344767] font-bold mt-4 text-[20px]">
                                {item.title}
                            </p>
                            <p className="text-[#7b809a] text-[16px]">
                                {item.text}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
}
