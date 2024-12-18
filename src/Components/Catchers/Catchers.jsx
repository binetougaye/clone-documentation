import React from "react";
import Scroll from "../Title/Scroll";
import { catchers } from "../../utils/data";
export default function Catchers() {
    return (
        <div className="mt-[100px]">
            <div className="flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center gap-12 mt-20">
                <Scroll
                    title="Attention Catchers"
                    text="20+ Fully coded components that popup from different places of the screen"
                />
                <div className="grid md:grid-cols-3 grid-cols-1 w-[80%] gap-x-5 gap-y-5">
                    {catchers &&
                        catchers?.map((item, index) => (
                            <div>
                                <div className="bg-white rounded-lg p-4  shadow-lg">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-96 h-32 object-cover"
                                    />
                                </div>
                                <div className="mt-5 md:text-start text-center">
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
