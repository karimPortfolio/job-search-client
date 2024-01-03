'use client'

import { useSelector } from "react-redux";
import JobsFound from "./jobs-found";
import JobsFilters from "./jobs-filters/jobs-filters";
import Jobs from "./jobs/jobs";

export interface SearchJobsState {
    searchJobs: {
        loading: boolean;
        jobs: {}[];
        error: string;
        searchValue: string;
        location: string;
    }
}

const JobsSection = () => {

    const jobsFound = useSelector( (state: SearchJobsState) => state.searchJobs )

    return(
        <section className="px-5 sm:px-10 md:px-20 pt-14">
            <div className="flex justify-between sm:justify-start lg:justify-between items-center flex-row sm:flex-col
                lg:flex-row">
                <JobsFound
                jobs={jobsFound.jobs}
                loading={jobsFound.loading}
                />
                <JobsFilters />
            </div>
            <Jobs />
        </section>
    )
}

export default JobsSection;
