import React from "react";
import { languages } from "../../utils/data";
export default function Language() {
    return (
        <div className="mt-40">
            <h1 className="text-center text-[#344767] text-[30px] font-bold">
                Available on these technologies
            </h1>
            <div className="flex md:flex-row flex-col justify-center items-center mt-5">
                {languages &&
                    languages?.map((item, index) => (
                        <div>
                            <img
                                className="w-[100px] opacity-80"
                                src={item.image}
                                alt=""
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}
