'use client'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchFormBox from "./search-form-box";
import { useAppDispatch } from "@/redux/store";
import { fetchMatchedJobs } from "@/redux/api/jobs/searchJobThunk";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton"
import { SearchJobsState } from "../jobs-section/jobs-section";

const SearchBoxContainer = () => {

    const jobs = useSelector( (state: SearchJobsState) => state.searchJobs );
    const [searchValue, setSearchValue] = useState(jobs.searchValue);
    const [location, setLocation] = useState(jobs.location);
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect( () => {
        setSearchValue(jobs.searchValue);
        setLocation(jobs.location);
    },[jobs]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    
    const getSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const getLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    };

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            if (searchValue !== "") {
                const payload = {
                    searchValue: searchValue,
                    location: location,
                    page:1
                };
                 //call to the thunk async function fetchMatchedJobs
                dispatch(fetchMatchedJobs(payload));
                 // Use the router object to push a new path
                router.push("/jobs");
            }
            setLoading(false);
        }, 5000);
    }

    if (jobs.loading)
    {
        return(
            <Skeleton className="w-full bg-gray-300 h-[60px] rounded-lg" />
        )
    }

    return (
        <div className="py-5 flex justify-center w-full">
            <SearchFormBox
            searchValue={searchValue}
            location={location}
            handleSubmit={handleSubmit}
            getSearchValue={getSearchValue}
            getLocation={getLocation}
            handleClick={handleClick}
            loading={loading}
            />
        </div>
    )
}

export default SearchBoxContainer;
