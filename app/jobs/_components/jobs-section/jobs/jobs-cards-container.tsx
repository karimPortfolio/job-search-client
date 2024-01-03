'use client'
import {useState} from 'react';
import PlaceHolders from "./place-holders";
import { testJobs } from './testJobs';
import JobsCard from './jobs-card';

interface Props{
    jobs: any,
    loading: boolean
}

const JobsCardsContainer = ({
    jobs,
    loading
}: Props) => {


    if (loading || jobs.length === 0)
    {
        return (
            <div className="col-span-2 space-y-5">
                <PlaceHolders/>
            </div>
        )
    }


    return(
        <div className="col-span-2 gap-6 space-y-5 h-[600px] overflow-y-scroll">
            {
                jobs.map( (job: any) => (
                    <JobsCard
                    key={job.job_id}
                    job={job}
                    />
                ))
            }
        </div>
    )
}

export default JobsCardsContainer;
