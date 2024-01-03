'use client'

import { SearchJobsState } from "../jobs-section/jobs-section";
import SearchBoxContainer from "./search-box-container";
import SearchTypography from "./search-typography";
import {useSelector} from 'react-redux'


const SearchSection = () => {

    const jobsFound = useSelector( (state: SearchJobsState) => state.searchJobs)

    return (
        <section className="pt-[75px] px-5 sm:px-10 lg:px-20 bg-gray-100 py-10">
            <SearchTypography
            desiredJob={jobsFound.searchValue || null}
            jobs={jobsFound.jobs}
            loading={jobsFound.loading}
            />
            <SearchBoxContainer />
        </section>
    )
}

export default SearchSection;
