import { Skeleton } from "@/components/ui/skeleton"


interface Props {
    desiredJob: string | null,
    jobs: {}[],
    loading: boolean;
}

const SearchTypography = ({
    desiredJob,
    jobs,
    loading
}: Props) => {

    if (loading)
    {
        return (
            <div className="py-5">
                <Skeleton className="mt-4 bg-gray-300 w-[300px] h-[40px] rounded-lg" />
                <Skeleton className="mt-4 bg-gray-300 w-[280px] h-[25px] rounded-lg" />
            </div>
        )
    }

    return(
        <div className="py-5">
            <h1 className="text-2xl sm:text-4xl md:text-5xl mt-4 font-DM-sans font-bold">
                Top
                <span 
                className="mx-3 bg-clip-text text-transparent bg-gradient-to-r from-[#4376ea] to-[#021c64]"
                >
                    {desiredJob ? desiredJob : "Software Engineer"}
                </span>
                Jobs
            </h1>
            <p className="max-[373px]:text-[13px] text-[14px] sm:text-[16px] mt-4 font-DM-sans text-gray-600">
                Choose from over 
                <span className="mx-1 text-blue-700">
                    {jobs.length} {desiredJob ? desiredJob : "Software Engineer"} 
                    <span className="ml-1">jobs</span>
                </span>
                available based on your search
            </p>
        </div>
    )
}

export default SearchTypography;
