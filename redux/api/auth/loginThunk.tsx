import { createAsyncThunk } from "@reduxjs/toolkit";

interface formData {
    email: string,
    password: string
}

export const fetchLoginUser = createAsyncThunk(
    'login/fetchLoginUser', async (userCredentials: formData, {rejectWithValue}) => {
        const url = `${process.env.NEXT_PUBLIC_API_ENDPOINTS_HOST}/auth/login`;
        try
        {
            const response = await fetch(url, {
                method:'POST',
                body: JSON.stringify(userCredentials),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data = await response.json();
            console.log(data);
            if (data.type === 'success')
            {
                window.localStorage.setItem('token_id', JSON.stringify(data.token));
                window.localStorage.setItem('profile', JSON.stringify(data.user));
                window.localStorage.setItem('provider', 'email');
            }
            return data;
        }
        catch(err)
        {
            rejectWithValue(err);
        }
    }
)

