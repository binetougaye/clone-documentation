import React from "react";
import Scroll from "../Title/Scroll";
import { inputs } from "../../utils/data";
export default function Inputs() {
    return (
        <div className="mt-[100px]">
            <div className="flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center gap-12 mt-20">
                <Scroll
                    title="Input Areas"
                    text="50+ elements that you need for text manipulation and insertion"
                />
                <div className="grid md:grid-cols-3 grid-cols-1 w-[80%] gap-x-5 gap-y-5">
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
                                    <p className="text-[#344767] md:text-start text-center font-bold">
                                        {item.text}{" "}
                                    </p>
                                    <p className=" md:text-start text-center ">
                                        {item.example}{" "}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
