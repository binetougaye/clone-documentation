import React from "react";
import Title from "../Title/Title";
import Scroll from "../Title/Scroll";
import { items } from "../../utils/data";

export default function Sec() {
    return (
        <div className="mt-[120px]">
            <Title
                text="Boost creativity"
                title="With our coded pages"
                para="The easiest way to get started is to use one of our pre-built example pages"
            />
            <div className="flex gap-12 mt-40">
                <div className="grid grid-cols-2 w-[100%] gap-x-5 gap-y-5">
                    {items &&
                        items?.map((item, index) => (
                            <div>
                                <div className=" shadow-lg">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="rounded-lg  "
                                    />
                                </div>
                                <div className="mt-5">
                                    <p className="text-[#344767] font-bold">
                                        {item.text}{" "}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
                <Scroll
                    title="Presentation Pages for Company, Landing Pages, Blogs and Support"
                    text="These is just a small selection of the multiple possibitilies you have. Focus on the business, not on the design."
                />
            </div>
        </div>
    );
}
