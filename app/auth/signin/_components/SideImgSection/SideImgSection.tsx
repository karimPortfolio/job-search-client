'use client'

import Image from "next/image";
import img from "@/public/images/signin-side-img.png"
import DynamicImage from "@/components/DynamicImage/dynamic-image";
import Link from "next/link";


const SideImgSection = () => {
    return(
        <section 
        className="h-full hidden lg:block relative lg:col-span-1 after:contents-[*] after:bg-gradient-to-t
        after:w-full after:h-screen after:absolute after:top-0 after:left-0 after:to-[#0000001d]
        after:from-[15%] after:from-[#000000ce] after:z-10">
            <Image
            src={img}
            alt="focused employee"
            className="h-full w-full absolute top-0 left-0 object-cover -z-10"
            />
            <div className="pt-5 pl-5 relative z-20">
                <Link href="/">
                    <DynamicImage
                    Key="project-brand-v2.png"
                    Alt="Easy Job Brand"
                    Width={100}
                    Height={50}
                    className="z-20"
                    />
                </Link>
            </div>
            <div className="h-[87%] flex justify-start items-end pl-10">
                <h1 className="text-[64px] leading-[75px] font-DM-sans text-white z-20 font-semibold">
                    Your career turning point
                    <span className="block text-blue-500">is here.</span>
                </h1>
            </div>
        </section>
    )
}


export default SideImgSection;
