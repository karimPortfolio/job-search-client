'use client'

import { useEffect, useState } from "react"
import DateFilterSelect from "./date-posted/date-filter-select";
import ExperienceLevelSelect from "./experience-level/experience-level-select";
import JobsTypesSelect from "./jobs-types/jobs-types-select";
import RemoteJobsSelect from "./remote-jobs/remote-jobs-select";
import ResetButton from "./reset-button";
import JobsFiltersMobile from "./jobs-filters-mobile";


const JobsFilters = () => {

    const [typeSelected, setTypeSelected] = useState('');
    const [expLevelSelected, setExpLevelSelected] = useState('');
    const [dateSelected, setDateSelected] = useState('');
    const [remoteSelected, setRemoteSelected] = useState('');

    const handleJobsOptionsChange = (value: string) => {
        setRemoteSelected(value);
    }

    const handleDateSelectedChange = (value: string) => {
        setDateSelected(value);
    }

    const handleExpLevelSelectedChange = (value: string) => {
        setExpLevelSelected(value);
    }

    const handleTypeSelectedChange = (value: string) => {
        setTypeSelected(value);
    }

    const handleFiltersReset = () => {
        setRemoteSelected('');
        setDateSelected('');
        setExpLevelSelected('');
        setTypeSelected('');
    }

    return(
        <>
            <div className="w-full lg:w-fit hidden sm:grid sm:grid-cols-3 md:grid-cols-5 gap-7 mt-5 lg:mt-0">
                <DateFilterSelect
                dateSelected={dateSelected}
                handleDateSelectedChange={handleDateSelectedChange}
                />
                <JobsTypesSelect
                typeSelected={typeSelected}
                handleTypeSelectedChange={handleTypeSelectedChange}
                />
                <ExperienceLevelSelect
                expLevelSelected={expLevelSelected}
                handleExpLevelSelectedChange={handleExpLevelSelectedChange}
                />
                <RemoteJobsSelect
                remoteSelected={remoteSelected}
                handleJobsOptionsChange={handleJobsOptionsChange}
                />
                <ResetButton
                handleFiltersReset={handleFiltersReset}
                />
            </div>

            <JobsFiltersMobile
            dateSelected={dateSelected}
            typeSelected={typeSelected}
            expLevelSelected={expLevelSelected}
            remoteSelected={remoteSelected}
            handleJobsOptionsChange={handleJobsOptionsChange}
            handleExpLevelSelectedChange={handleExpLevelSelectedChange}
            handleTypeSelectedChange={handleTypeSelectedChange}
            handleDateSelectedChange={handleDateSelectedChange}
            handleFiltersReset={handleFiltersReset}
            />
            
        </>
    )
}

export default  JobsFilters;
