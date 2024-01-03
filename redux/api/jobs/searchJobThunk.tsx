
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Payload {
    searchValue: string,
    location: string,
    page: number
}

export const fetchMatchedJobs = createAsyncThunk(
    "matchedJobs/fetchMatchedJobs", async (payload: Payload, {rejectWithValue}) => {
        const url = `${process.env.NEXT_PUBLIC_API_ENDPOINTS_HOST}/jobs?page=${payload.page}`;
        const formData = {
            searchValue: payload.searchValue,
            location: payload.location
        };
        try
        {
            const response = await fetch(url, {
                method:'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok)
            {
                const result = await response.json();
                //to delete in production mode
                //console.log(result);
                return result;
            }
            
        }
        catch (err)
        {
            console.error(err)
            rejectWithValue(err);
        }
    }
)

