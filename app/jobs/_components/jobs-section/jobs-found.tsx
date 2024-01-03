import { Skeleton } from "@/components/ui/skeleton"


interface Props {
    jobs: {}[],
    loading: boolean
}

const JobsFound = ({
    jobs,
    loading
}: Props) => {

    const jobsFound = jobs.length;

    if (loading)
    {
        return (
            <Skeleton className="w-[180px] h-[25px] bg-gray-300 rounded-lg" />
        )
    }

    return(
        <div className="w-full lg:w-fit">
            <h5 className="font-DM-sans font-medium text-[18px]"> 
                <span>{jobsFound}</span>
                <span className="ml-2">jobs found</span>
            </h5>
        </div>
    )
}

export default JobsFound;
