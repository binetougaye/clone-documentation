import React from "react";
import Scroll from "../Title/Scroll";
import { navs } from "../../utils/data";
export default function Navigation() {
    return (
        <div className="flex md:justify-start justify-center gap-12 mt-20">
            <div className="flex md:flex-row md:items-start md:justify-start justify-center items-center flex-col gap-12 mt-20">
                <Scroll
                    title="Navigation"
                    text="30+ components that will help go through the pages"
                />
                <div className="grid md:grid-cols-3 grid-cols-1 w-[80%] gap-x-5 gap-y-5">
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
                                    <p className="text-[#344767] md:text-start text-center font-bold">
                                        {item.text}{" "}
                                    </p>
                                    <p className="md:text-start text-center ">
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
