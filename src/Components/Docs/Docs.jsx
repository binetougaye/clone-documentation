import React from "react";
import { dataTwo } from "../../utils/data";
import Card from "./Card";
export default function Docs() {
    return (
        <div className="flex justify-center gap-[40px] mt-[100px] px-12">
            <Card />
            <div className="grid grid-cols-2 w-[60%] gap-y-12 gap-x-16">
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
