import React from "react";
import Scroll from "../Title/Scroll";
import { elements } from "../../utils/data";

export default function Elements() {
    return (
        <div className="mt-[100px]">
            <div className="flex md:flex-row flex-col md:items-start items-center md:justify-start justify-center gap-12 mt-20">
                <Scroll
                    title="Elements"
                    text="80+ carefully crafted small elements that come with multiple colors and shapes"
                />
                <div className="grid md:grid-cols-3 grid-cols-1 w-[80%] gap-x-5 gap-y-5">
                    {elements &&
                        elements?.map((item, index) => (
                            <div>
                                <div className="bg-white rounded-lg p-4  shadow-lg">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-96 h-32 object-cover"
                                    />
                                </div>
                                <div className="mt-5 md:text-start text-center">
                                    <p className="text-[#344767]  font-bold">
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
