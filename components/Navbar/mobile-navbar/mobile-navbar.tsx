'use client'
import { useSelector } from "react-redux";
import Brand from "../navbar-brand";
import MobileNavbarItems from "./mobile-navbar-items";
import NavbarAuthDropdown from "../navbar-auth-dropdown";
import { logout } from "@/redux/slices/auth/globalAuthSlice";
import { useAppDispatch } from "@/redux/store";

const MobileNavbar = () => {

    const Auth = useSelector( (state: any) => state.auth);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <nav className="px-5 flex justify-between items-center lg:hidden py-3 border-b-[1px] fixed
        top-0 left-0 w-full bg-white z-50">
            <div className={Auth.AUTH ? "flex w-fit" : "flex w-full"}>
                <div className={Auth.AUTH ? 'order-2' : 'order-1'}>
                    <Brand />
                </div>
                <MobileNavbarItems />
            </div>
            {
                Auth.AUTH ? (
                    <NavbarAuthDropdown
                    user={Auth.user}
                    handleLogout={handleLogout}
                    />
                ) : (
                    null
                )
            }
        </nav>
    )
}

export default MobileNavbar;
