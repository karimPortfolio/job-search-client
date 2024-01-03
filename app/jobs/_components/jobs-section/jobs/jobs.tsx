import { useSelector } from "react-redux";
import { SearchJobsState } from "../jobs-section";
import JobsCardsContainer from "./jobs-cards-container";
import { SubscribeCard } from "./subscribe-card";
import PaginationComp from "./pagination";


const Jobs = () => {

    const jobsFound = useSelector( (state: SearchJobsState) => state.searchJobs );

    return(
        <div className="py-16">
            <div className="pb-9 md:grid lg:grid-cols-3 gap-8">
                <JobsCardsContainer
                jobs={jobsFound.jobs}
                loading={jobsFound.loading}
                />
                <div className="mt-8 md:mt-0">
                    <SubscribeCard />
                </div>
            </div>
            <PaginationComp 
            searchValue={jobsFound.searchValue}
            location={jobsFound.location}
            />
        </div>
    )
}


export default Jobs;

