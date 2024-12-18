import React from "react";
import { testimony } from "../../utils/data";
export default function Testimony() {
    return (
        <div className="mt-32">
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-[#344767] text-[36px] font-bold">
                    Trusted by over
                </h3>
                <h1 className="text-[#1a73e8] font-bold md:text-[36px] text-[24px]">
                    1,679,477+ web developers
                </h1>
                <p className="text-[#7b809a] text-center text-[20px]">
                    Many Fortune 500 companies, startups, universities and
                    governmental <br /> institutions love Creative Tim's
                    products.
                </p>
            </div>
            <div className="flex md:flex-row flex-col justify-center mt-20 items-center">
                {testimony &&
                    testimony?.map((item, index) => (
                        <div className={item.bg}>
                            <p>{item.nom}</p>
                            <p className="text-sm flex items-center gap-1 mt-1">
                                <p>{item.icon}</p>
                                <p>{item.date}</p>
                            </p>
                            <p className={item.textColor}>"{item.text}"</p>
                            <div className={item.starColor}>
                                {item.star.map((item) => (
                                    <p>{item}</p>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
