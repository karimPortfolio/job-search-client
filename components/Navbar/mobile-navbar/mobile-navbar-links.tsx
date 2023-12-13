import  Link from "next/link";
import { Links, links } from "../navbar-links";
import { BsArrowUpRight } from "react-icons/bs";

const MobileNavLinks = () => {
    return (
        <ul className="mt-10 md:px-10">
            {
                links.map( (link: Links) => {
                    return(
                        <li key={link.id} 
                            className="my-5 py-4 relative  after:contents-[*] after:bg-black after:w-full after:h-[1px] after:absolute
                            after:top-full after:left-0 after:opacity-10">
                            <Link href={link.url} 
                            className="text-[17px] group text-[#213547] font-DM-sans flex  justify-between align-center w-full"
                            > 
                                <span className="group-hover:text-[#213547]">
                                    {link.title}
                                </span>
                                <span>
                                    <BsArrowUpRight 
                                    className="text-[#213547] transition-all duration-700 group-hover:-translate-y-[3px]
                                    group-hover:translate-x-[4px] text-[15px]" />
                                </span>
                            </Link>
                        </li>
                    )
                } )
            }
        </ul>
    )
}

export default  MobileNavLinks;

