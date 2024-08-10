import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Homelayout=()=>{
    return(
        <>
        <Header />
        <Outlet/>
        </>
    )
}
export default Homelayout;