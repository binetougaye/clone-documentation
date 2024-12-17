import React from "react";
import { card } from "../../utils/data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function SecCard() {
    return (
        <div className="flex mt-5 gap-5">
            {card &&
                card?.map((item, index) => (
                    <div className={item.bg}>
                        <div className={item.iconColor}>{item.icon}</div>
                        <div>
                            <p className={item.titleColor}>{item.title}</p>
                            <p className={item.textClass}>{item.text}</p>
                            <p className={item.iconColors}>
                                {item.cta} <ArrowForwardIcon />
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
}
