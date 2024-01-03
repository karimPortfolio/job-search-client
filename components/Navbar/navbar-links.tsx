import Link from "next/link";


export interface Links {
    id: number,
    url: string,
    title: string
}

export const links = [
    {id:1, url: '/', title: 'Home'},
    {id:2, url: '/about', title: 'About us'},
]


const NavLinks = ({
    auth
}: {auth: boolean} ) => {
    return (
        <ul className="flex justify-center items-center gap-6 mr-auto">
            {links.map( (link: Links) => {
                return(
                    <li key={link.id}>
                        <Link 
                        href={link.url}
                        className={`text-[16] font-DM-sans hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#4376ea] hover:to-[#021c64]
                        transition-all duration-500 relative after:contents-[*] after:w-0 after:h-[4px] after:bg-gradient-to-r after:from-[#4376ea]
                        after:to-[#021c64] after:absolute ${auth ? 'after:top-[44px]' : 'after:top-[40px]'} after:left-0 hover:after:w-full after:transition-all
                        after:duration-500`}
                        > 
                        {link.title} 
                        </Link>
                    </li>
                )
            }) }
        </ul>
    )
}

export default NavLinks;

