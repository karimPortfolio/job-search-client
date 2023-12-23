import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface ResponseProp {
    auth: {
        AUTH: boolean,
        user: {} | null
    }
}

const MobileNavAuthButtons = ({auth}: ResponseProp) => {

    if (auth.AUTH)
    {
        return null;
    }

    return (
        <div className="md:px-10 mt-14">
            <div>
                <Button variant="secondary" className="w-full">
                    <Link href="/auth/signin">Sign in</Link>
                </Button>
            </div>
            <div className="mt-5">
                <Button 
                variant="destructive" 
                className="w-full bg-gradient-to-r from-[#4376ea] font-DM-sans to-[#021c64]
                hover:text-[#021c64] transition-all duration-700 hover:shadow-md 
                hover:border hover:border-[#021c64] hover:from-white hover:to-white">
                    <Link href="/auth/register">Create Account</Link>
                </Button>
            </div>
        </div>
    )
}


export default MobileNavAuthButtons;

