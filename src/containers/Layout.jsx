import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

const Layout = () => {
    return (
        <>
            <div className="flex flex-row h-screen w-screen">
                <div className="w-1/5 bg-slate-800">
                    <NavBar />
                </div>    
                <div className="w-4/5 bg-slate-300">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Layout;