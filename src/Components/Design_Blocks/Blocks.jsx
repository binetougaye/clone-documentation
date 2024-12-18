import React from "react";
import Title from "../Title/Title";
import { images } from "../../utils/data";
import Scroll from "../Title/Scroll";
export default function Blocks() {
    return (
        <div className="md:mt-[400px] mt-[100px]">
            <Title
                text="infinite combinations"
                title="Huge collection of sections"
                para="We have created multiple options for you to put together and customise into pixel perfect pages."
            />
            <div className="flex md:flex-row md:items-start items-center flex-col gap-12 mt-20">
                <Scroll
                    title="Design Blocks"
                    text="A selection of 45 pages sections that fit perfectly in any combination"
                />
                <div className="grid md:grid-cols-3 grid-cols-1 w-[80%] gap-x-5 gap-y-5">
                    {images &&
                        images?.map((item, index) => (
                            <div className="bg-white rounded-lg p-4 shadow-lg">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-96 h-32 object-cover"
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
