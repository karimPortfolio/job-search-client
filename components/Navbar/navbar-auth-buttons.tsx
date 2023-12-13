import { Button } from "@/components/ui/button";
import { mainColors } from "@/config/Colors/main-colors-config";
import Link from "next/link";
import styles from './styles/styles.module.css'

const AuthButtons = () => {

    return (
        <div>
            <Button variant="ghost" className="font-DM-sans">
                <Link href='/auth/signin'>Sign in</Link>
            </Button>
            <Button className={`bg-gradient-to-r from-[#4376ea] font-DM-sans to-[#021c64] ml-4
                    hover:text-[#021c64] transition-all duration-700 hover:shadow-md 
                    hover:border hover:border-[#021c64] hover:from-white hover:to-white`}>
                <Link href='/auth/register'>Create Account</Link>
            </Button>
        </div>
    )
}

export default AuthButtons;

