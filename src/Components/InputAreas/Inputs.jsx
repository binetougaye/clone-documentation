import React from "react";
import Scroll from "../Title/Scroll";
import { inputs } from "../../utils/data";
export default function Inputs() {
    return (
        <div className="mt-[400px]">
            <div className="flex gap-12 mt-20">
                <Scroll
                    title="Input Areas"
                    text="50+ elements that you need for text manipulation and insertion"
                />
                <div className="grid grid-cols-3 w-[80%] gap-x-5 gap-y-5">
                    {inputs &&
                        inputs?.map((item, index) => (
                            <div>
                                <div className="bg-white rounded-lg p-4  shadow-lg">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-96 h-32 object-cover"
                                    />
                                </div>
                                <div className="mt-5">
                                    <p className="text-[#344767] font-bold">
                                        {item.text}{" "}
                                    </p>
                                    <p>{item.example} </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
