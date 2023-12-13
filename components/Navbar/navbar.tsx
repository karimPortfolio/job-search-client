'use client'

import { useEffect, useState } from "react";
import MobileNavbar from "./mobile-navbar/mobile-navbar";
import Brand from "./navbar-brand";
import NavigationItems from "./navbar-items";

const NavbarUi = ({className}: React.HTMLAttributes<HTMLDivElement>) => {

    return(
        <nav 
        className={className === "" ? 
        "px-20 py-4 hidden lg:flex lg:justify-start lg:align-center absolute top-0 left-0 w-full border-b-[1px] bg-white z-50" 
        : className}>
            <div>
                <Brand />
            </div>
            <NavigationItems />
        </nav>
    )
}

const Navbar = () => {

    const [screenWidth, setScreenWidth] = useState(0);
    const [className, setClassName] = useState("");

    useEffect( () => {
        if (typeof window !== 'undefined')
        {
            setScreenWidth(window.innerWidth);
        }
    },[screenWidth])

    if (typeof window !== 'undefined')
    {
        window.addEventListener( 'scroll', () => {
            if (window.scrollY > 250)
            {
                setClassName("px-20 py-4 hidden lg:flex lg:justify-start lg:align-center fixed top-0 left-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full border-b-[1px] transition-all duration-700 z-50");
            }
            else 
            {
                setClassName("px-20 py-4 hidden lg:flex lg:justify-start lg:align-center absolute top-0 left-0 w-full border-b-[1px] bg-white z-50");
            }
        })
    }

    if (screenWidth >= 976)
    {
        return <NavbarUi
                className = {className}
                />
    }

    return <MobileNavbar />

}

export default Navbar;

