import { FaCircleCheck } from "react-icons/fa6";

const TypographySection = () => {

    const advantages = [
        {text:'Create an Account'},
        {text:'Search Job'},
        {text:'Upload CV/ Resume'},
        {text:'Get Job'},
    ]

    return(
        <section 
        className="hidden lg:block h-full bg-gradient-to-tl from-blue-400 to-[90%] to-blue-800 px-10"
        >
            <div className="h-full flex justify-center items-center flex-col">
                <div>
                    <h1 className="text-4xl font-DM-sans leading-[50px] font-semibold text-white">Search and Apply to Thousands of Jobs</h1>
                </div>
                <div className="mt-8 w-full pb-16">
                    <ul>
                        {
                            advantages.map( (value, index) => (
                                <li 
                                key={index}
                                className="flex justify-start items-center mt-3"
                                >
                                    <FaCircleCheck className='text-white' />
                                    <p className="text-white font-DM-sans text-[19px] ml-3"> {value.text} </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TypographySection;

