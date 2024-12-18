import React from "react";
import apple from "../../assets/images/logo-apple.f9c2682e.svg";
import facebook from "../../assets/images/logo-facebook.106d2ac0.svg";
import nasa from "../../assets/images/logo-nasa.c5d11f88.svg";
import vodaphone from "../../assets/images/logo-vodafone.b3e8486c.svg";
import ocean from "../../assets/images/logo-digitalocean.a1f147b0.svg";
export default function Logo() {
    return (
        <div className="flex md:justify-center md:flex-row flex-col flex-wrap gap-10 mt-20 md:items-start items-center">
            <img className="w-40" src={apple} alt="" />
            <img className="w-40" src={facebook} alt="" />
            <img className="w-40" src={nasa} alt="" />
            <img className="w-40" src={vodaphone} alt="" />
            <img className="w-40" src={ocean} alt="" />
        </div>
    );
}
