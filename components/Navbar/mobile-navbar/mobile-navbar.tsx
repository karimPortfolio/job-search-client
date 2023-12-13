'use client'
import Brand from "../navbar-brand";
import MobileNavbarItems from "./mobile-navbar-items";


const MobileNavbar = () => {
    return (
        <nav className="px-5 flex justify-between items-center lg:hidden py-3 border-b-[1px] fixed
        top-0 left-0 w-full bg-white z-50">
            <Brand />
            <MobileNavbarItems />
        </nav>
    )
}

export default MobileNavbar;
