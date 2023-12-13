'use client'

import CardsContainer from "./cards-container";

const IntroText = () => {
    return (
        <div className="px-4 sm:px-9 md:px-14 lg:px-20">
            <h1
            className="text-4xl max-[480px]:text-3xl max-[400px]:text2xl font-semibold font-DM-sans"
            >
                Latest and Top
                <span 
                className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-[#4376ea] to-[#021c64]"
                >Job Openings</span> 
            </h1>
            <h5
            className="mt-3 w-full font-DM-sans max-[400px]:text-sm max-[400px]:w-[80%]  text-slate-500"
            >
                Discover the fresh job openings.
            </h5>
        </div>
    )
}

const RecentJobs = () => {
    return (
        <section className="py-20">
            <IntroText />
            <CardsContainer />
        </section>
    )
}

export default RecentJobs;
