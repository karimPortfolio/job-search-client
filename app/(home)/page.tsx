'use client'

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/store";
import HeroSection from "./_components/hero-section/hero-section";
import HiringSteps from "./_components/hiring-steps/hiring-steps";
import RecentJobs from "./_components/recent-jobs/recent-jobs";
import { checkAuth } from "@/redux/slices/auth/globalAuthSlice";
import ExpiryDialog from "@/components/dialogs/expiry-dialog";
import { useSelector } from "react-redux";


const HomePage = () => {

    const Auth = useSelector( (state: any) => state.auth)
    const dispatch = useAppDispatch();

    useEffect( () => {
        dispatch(checkAuth());
    },[dispatch])

    return(
        <>
            <ExpiryDialog
            auth={Auth.expired}
            />
            <HeroSection />
            <HiringSteps />
            <RecentJobs />
        </>
    )
}

export default HomePage;
