import CardsContainer from "./cards-container";

const IntroText = () => {
    return (
        <div className="px-4 sm:px-9 md:px-14 lg:px-20">
            <h1
            className="text-4xl max-[480px]:text-3xl max-[400px]:text2xl font-semibold font-DM-sans"
            >
                Get Hired in 
                <span 
                className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-[#4376ea] to-[#021c64]"
                >4 Quick Easy Steps</span> 
            </h1>
            <h5
            className="mt-3 w-full font-DM-sans max-[400px]:text-sm max-[400px]:w-[80%]  text-slate-500"
            >
                The quickest and most effective way to get hired easily
            </h5>
        </div>
    )
}

const HiringSteps = () => {
    return (
        <section className="py-20">
            <IntroText />
            <CardsContainer />
        </section>
    )
}

export default HiringSteps;

