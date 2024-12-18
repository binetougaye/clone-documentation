import React, { useState } from "react";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="absolute  w-[90%] py-4 px-3 rounded-lg flex flex-col md:flex-row md:justify-between justify-center items-center md:top-16 top-16 md:opacity-80  left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center z-50">
            <div className="flex justify-between w-full md:w-auto items-center">
                <h1 className="text-[#344767]">Material Kit 2</h1>

                <button
                    className="md:hidden   text-[#344767] p-2"
                    onClick={toggleMenu}
                >
                    {menuOpen ? (
                        <CloseIcon style={{ fontSize: 30 }} />
                    ) : (
                        <MenuIcon style={{ fontSize: 30 }} />
                    )}
                </button>
            </div>

            <div
                className={`${
                    menuOpen ? "flex" : "hidden"
                } flex-col md:flex hidden md:flex-row md:gap-12 text-[#344767] w-full md:w-auto mt-60 md:mt-0`}
            >
                <div className="flex  flex-col md:flex-row gap-5">
                    <p className="flex gap-1 items-center text-[#344767] text-[16px]">
                        <DashboardIcon />
                        <span className="text-[14px] font-light">Pages</span>
                    </p>
                    <p className="flex gap-1 items-center text-[#344767] text-[16px]">
                        <CalendarViewDayIcon />
                        <span className="text-[14px] font-light">Sections</span>
                    </p>
                    <p className="flex gap-1 items-center text-[#344767] text-[16px]">
                        <ArticleIcon />
                        <span className="text-[14px] font-light">Docs</span>
                    </p>
                    <p className="flex gap-1 items-center text-[#344767] text-[16px]">
                        <GitHubIcon />
                        <span className="text-[14px] font-light">Github</span>
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <Button variant="contained">FREE DOWNLOAD</Button>
                </div>
            </div>
        </div>
    );
}
