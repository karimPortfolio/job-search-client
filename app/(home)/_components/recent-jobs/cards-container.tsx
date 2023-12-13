'use client'

import { useAppDispatch } from "@/redux/store";
import { fetchRecentJobs } from "@/redux/thunks/recentJobsThunk";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PlaceHolders from "./place-holders";
import Cards from "./cards";


const CardsContainer = () => {

    const recentJobs = useSelector( (state: any) => state.recentJobs )
    const dispatch = useAppDispatch();

    console.log(recentJobs);

    useEffect(() => {
        //dispatch(fetchRecentJobs());
    },[dispatch])


    return(
        <div className="mt-14 md:mt-20 lg:mt-28">
            {recentJobs.loading && (<PlaceHolders />)}
            {!recentJobs.loading && recentJobs.jobs.length ? (
                <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-9 md:px-14 lg:px-20"
                >
                    {
                        recentJobs.jobs.map( (job: any) => (
                            <Cards
                            key = {job.job_id}
                            job = {job}
                            />
                        ))
                    }
                </div>
            ) : (<PlaceHolders />)}
        </div>
    )
}


export default CardsContainer;
