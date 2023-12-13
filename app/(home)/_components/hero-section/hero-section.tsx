'use client'
import Image from "next/image";
import IntroContent from "./intro-content";
import SearchFormBox from "./search-form-box";
// import img from "@/public/images/map-img.png"
import DynamicImage from "@/components/DynamicImage/dynamic-image";


const HeroSection = () => {
    return(
        <section 
        className="h-screen bg-gradient-to-br from-[#455ea43e] from-[23%] via-[#ffffffb0] to-[#aec3fd64]
        flex justify-center items-center flex-col">
            <div>
                <DynamicImage
                Key="hero-section/map-img.png"
                Width={2}
                Height={2}
                className="hidden md:block w-full h-screen absolute top-10 left-0 -z-10"
                />
                {/* <Image 
                src={img} 
                alt="not found" 
                className="w-full h-screen absolute top-10 left-0 -z-10" /> */}
            </div>
            <IntroContent />
            <SearchFormBox />
        </section>
    )
}

export default HeroSection;

