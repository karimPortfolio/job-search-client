import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchRecentJobs = createAsyncThunk(
    'recentJobs/fetchRecentJobs', async (arg, {rejectWithValue}) => {
        const url = `${process.env.NEXT_PUBLIC_API_ENDPOINTS_HOST}/jobs`;
        try
        {
            const response = await fetch(url);
            if (response.ok)
            {
                const recentJobs = await response.json();
                console.log(recentJobs);
                return recentJobs;
            }
        }
        catch (err)
        {
            console.log(err);
            rejectWithValue(err);
        }
    }
)

