import React from "react";
import {Outlet} from "react-router-dom";
import{Link} from "react-router-dom";



function MainLayout(){
 return(
    <>
    <header>
        <Link to="/welcome">welcome</Link>
        <Link to="/member">navigate to member page</Link>
        <Link to="/form">Form</Link>
    </header>
    <Outlet/>
    <footer>
        <p>&Copy: 2023 My Application</p>
    </footer>
    </>
 )
}

export default MainLayout;
