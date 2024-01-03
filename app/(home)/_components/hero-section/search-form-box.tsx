"use client";

import { useState } from "react";
import SearchForm from "./search-form";
import { useAppDispatch } from "@/redux/store";
import { fetchMatchedJobs } from "@/redux/api/jobs/searchJobThunk";
import { useRouter } from "next/navigation";

const SearchFormBox = () => {
  const [location, setLocation] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Get the router object
  const router = useRouter();

  const dispatch = useAppDispatch();

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
  };

  return (
    <div className="pt-16 flex justify-center max-[567px]:mx-8 max-[420px]:mx-4">
      <div className="px-3 py-3 bg-white rounded-full shadow-md">
        <SearchForm
          handleSubmit={handleSubmit}
          getSearchValue={getSearchValue}
          getLocation={getLocation}
          handleClick={handleClick}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default SearchFormBox;
