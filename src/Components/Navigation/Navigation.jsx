import React from "react";
import Scroll from "../Title/Scroll";
import { navs } from "../../utils/data";
export default function Navigation() {
    return (
        <div className="flex gap-12 mt-20">
            {/* <div className="grid grid-cols-3 w-[80%] gap-12">
                {navs &&
                    navs?.map((item, index) => (
                        <div className="flex flex-col justify-between">
                            <div className="bg-white  rounded-lg p-4 shadow-lg">
                                <img
                                    src={item.image}
                                    className="w-full"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p>{item.text} </p>
                                <p>{item.example} </p>
                            </div>
                        </div>
                    ))}
            </div> */}
            <div className="flex gap-12 mt-20">
                <Scroll
                    title="Navigation"
                    text="30+ components that will help go through the pages"
                />
                <div className="grid grid-cols-3 w-[80%] gap-x-5 gap-y-5">
                    {navs &&
                        navs?.map((item, index) => (
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
