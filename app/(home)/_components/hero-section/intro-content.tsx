'use client'

import FloatingCard from "./floating-card";


const IntroContent = () => {
    return (
        <div className="pt-[140px]">
            <FloatingCard />
            <h1 className="text-center font-DM-sans  max-[500px]:text-4xl max-[330px]:text-3xl max-[400px]:mx-2 text-6xl font-semibold">
                Let your
                 {/* box-decoration-slice bg-gradient-to-r from-[#4376ea] to-[#021c64]  */}
                <span 
                className=" ml-3 bg-clip-text text-transparent bg-gradient-to-r from-[#4376ea] to-[#021c64]">
                    ambition
                </span>
            </h1>
            <h1 className="text-center font-DM-sans  max-[500px]:text-4xl max-[330px]:text-3xl max-[400px]:mx-2 text-6xl mt-3 font-semibold">
                lead the way to a 
                <span 
                className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-[#4376ea] to-[#021c64]">
                    job you love
                </span>
            </h1>
            <p className="text-center text-DM-sans mt-7 text-gray-500 max-[576px]:mx-4 max-[330px]:text-[14px]">
                Instantly see top matching jobs. Find the jobs you miss when searching. 
                <span className="max-[576px]:inline-flex block">Stay up to date with all the latest in your industry.</span>
            </p>
        </div>
    )
}

export default IntroContent;
