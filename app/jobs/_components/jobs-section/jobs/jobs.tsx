import { useSelector } from "react-redux";
import { SearchJobsState } from "../jobs-section";
import JobsCardsContainer from "./jobs-cards-container";
import { SubscribeCard } from "./subscribe-card";


const Jobs = () => {

    const jobsFound = useSelector( (state: SearchJobsState) => state.searchJobs );

    console.log(jobsFound);

    return(
        <div className="py-16 grid grid-cols-3 gap-8">
            <JobsCardsContainer
            jobs={jobsFound.jobs}
            loading={jobsFound.loading}
            />
            <div>
                <SubscribeCard />
            </div>
        </div>
    )
}


export default Jobs;

