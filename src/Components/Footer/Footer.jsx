import React from "react";
import { socials } from "../../utils/data";
import logo from "../../assets/images/logo.png";
import { company } from "../../utils/data";
import { resources } from "../../utils/data";
import { support } from "../../utils/data";
import { legal } from "../../utils/data";
export default function Footer() {
    return (
        <div>
            {" "}
            <div className="flex md:flex-row flex-col  md:justify-between justify-center md:items-start items-center px-24 mt-32">
                <div>
                    <div className="flex md:justify-start justify-center items-center">
                        <img src={logo} alt="" className="w-10 " />
                    </div>
                    <p className="text-[#344767] md:text-start text-center font-bold mt-5">
                        Material Kit 2
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                        {socials &&
                            socials?.map((item) => (
                                <div>
                                    <img
                                        className="w-5 text-[#344767]"
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                            ))}
                    </div>
                </div>
                <div className="md:text-start text-center text-[#344767]">
                    <p className="text-[#344767] font-bold text-[14px]">
                        Company
                    </p>
                    <div className="mt-3">
                        {company?.map((item) => (
                            <p>{item} </p>
                        ))}
                    </div>
                </div>
                <div className="md:text-start text-center text-[#344767]">
                    <p className="text-[#344767] font-bold text-[14px]">
                        Resources
                    </p>
                    <div className="mt-3">
                        {resources?.map((item) => (
                            <p>{item} </p>
                        ))}
                    </div>
                </div>
                <div className="md:text-start text-center text-[#344767]">
                    <p className="text-[#344767] font-bold text-[14px]">
                        Help & support
                    </p>
                    <div className="mt-3">
                        {support?.map((item) => (
                            <p>{item} </p>
                        ))}
                    </div>
                </div>
                <div className="md:text-start text-center text-[#344767]">
                    <p className="text-[#344767] text-[14px] font-bold">
                        Legal
                    </p>
                    <div className="mt-3">
                        {legal?.map((item) => (
                            <p>{item} </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center text-[#344767] pb-5 mt-20">
                <p>
                    All rights reserved. Copyright © 2024 Material Kit by
                    Creative Tim.
                </p>
            </div>
        </div>
    );
}
