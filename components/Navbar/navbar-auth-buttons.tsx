import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from './styles/styles.module.css'
import { useSelector } from "react-redux";
import NavbarAuthDropdown from "./navbar-auth-dropdown";
import { useAppDispatch } from "@/redux/store";
import { logout } from "@/redux/slices/auth/globalAuthSlice";
import { useRouter } from "next/navigation";

const AuthButtons = () => {

    const Auth = useSelector( (state: any) => state.auth);
    const dispatch = useAppDispatch();
    const router = useRouter();
    
    const handleLogout = () => {
        dispatch(logout());
        router.push('/auth/signin');
    }

    if (!Auth.AUTH)
    {
        return (
            <div>
                <Button variant="ghost" className="font-DM-sans">
                    <Link href='/auth/signin'>Sign in</Link>
                </Button>
                <Button className={`bg-gradient-to-r from-[#4376ea] font-DM-sans to-[#021c64] ml-4
                        hover:text-[#021c64] transition-all duration-700 hover:shadow-md 
                        hover:border hover:border-[#021c64] hover:from-white hover:to-white`}>
                    <Link href='/auth/signup'>Create Account</Link>
                </Button>
            </div>
        )
    }


    return <NavbarAuthDropdown 
            user = {Auth.user}
            handleLogout = {handleLogout}
            />


}

export default AuthButtons;

