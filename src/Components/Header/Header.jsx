import React from "react";
import presentation from "../../assets/images/bg-presentation.88963029.jpeg";
import Navbar from "../Navbar/Navbar";

export default function Header() {
    return (
        <div className="relative">
            <img
                className="w-full h-screen object-cover"
                src={presentation}
                alt="Presentation Background"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 className="text-[48px] font-bold mb-4">
                    Material Kit 2 React
                </h1>
                <p className="text-[20px]">
                    Free & Open Source Web UI Kit built over ReactJS & MUI. Join
                    over 1.6 million developers around the world.
                </p>
            </div>
            <Navbar />
        </div>
    );
}
