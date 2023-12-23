'use client'

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/store";
import HeroSection from "./_components/hero-section/hero-section";
import HiringSteps from "./_components/hiring-steps/hiring-steps";
import RecentJobs from "./_components/recent-jobs/recent-jobs";
import { checkAuth } from "@/redux/slices/auth/globalAuthSlice";


const HomePage = () => {

    const dispatch = useAppDispatch();

    useEffect( () => {
        dispatch(checkAuth());
    })

    return(
        <>
            <HeroSection />
            <HiringSteps />
            <RecentJobs />
        </>
    )
}

export default HomePage;
