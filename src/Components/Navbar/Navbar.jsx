import React from "react";
import Button from "@mui/material/Button";
export default function Navbar() {
    return (
        <div className="absolute  w-[90%] py-4 px-3  rounded-lg flex justify-between items-center top-16 opacity-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center">
            <div>
                <h1 className="text-[#344767]">Material Kit 2</h1>
            </div>
            <div className="flex gap-5 text-[#344767]">
                <p>Pages</p>
                <p>Sections</p>
                <p>Docs</p>
                <p>Github</p>
                <p>Pages</p>
            </div>
            <div>
                <Button variant="contained">FREE DOWNLOAD</Button>
            </div>
        </div>
    );
}
