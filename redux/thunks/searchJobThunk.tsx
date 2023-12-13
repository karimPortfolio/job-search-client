
import { createAsyncThunk } from "@reduxjs/toolkit";

interface formData {
    searchValue: string,
    location: string
}

export const fetchMatchedJobs = createAsyncThunk(
    "matchedJobs/fetchMatchedJobs", async (formData: formData, {rejectWithValue}) => {
        const url = `${process.env.NEXT_PUBLIC_API_ENDPOINTS_HOST}/jobs/`
        try
        {
            // console.log(formData);
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

