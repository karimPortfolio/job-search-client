import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { Button } from "./ui/button";


interface Link {
    id: number,
    icon: React.ReactNode,
    url: string
}


const SocialLinks = ({className}: React.HTMLAttributes<HTMLLinkElement>) => {

    return (
        <ul className="flex justify-center items-center gap-5 w-full md:px-10">
            <li>
                <Button variant="ghost" className="rounded-full px-[0.6rem]">
                    <Link 
                    href="/"
                    target="_blank"
                    className={className}
                    >
                        <FaXTwitter className="hover:scale-115 transition-all duration-500 ease-in"/>
                    </Link>
                </Button>
                    
            </li>
            <li>
                <Button variant="ghost" className="rounded-full px-[0.6rem]">
                    <Link 
                    href="/"
                    target="_blank"
                    className={className}
                    >
                        <FaTiktok className="hover:scale-115 transition-all duration-500 ease-in"/>
                    </Link>
                </Button>
                    
            </li>
            <li>
                <Button variant="ghost" className="rounded-full px-[0.6rem]">
                    <Link 
                    href="/"
                    target="_blank"
                    className={className}
                    >
                        <FaYoutube className="hover:scale-115 transition-all duration-500 ease-in"/>
                    </Link>
                </Button>
            
            </li>
            <li>
                <Button variant="ghost" className="rounded-full px-[0.6rem]">
                    <Link 
                    href="/"
                    target="_blank"
                    className={className}
                    >
                        <FaFacebookF className="hover:scale-115 transition-all duration-500 ease-in"/>
                    </Link>
                </Button>
            
            </li>
        </ul>
    )
}

export default SocialLinks

