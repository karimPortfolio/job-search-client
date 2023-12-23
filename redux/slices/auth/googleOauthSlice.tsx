'use client'
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: {},
    isSuccess:false,
}

const GoogleOAuthSlice = createSlice({
    name: 'googleOAuth',
    initialState,
    reducers: {
        googleSuccess: (state, action) => {
            if (action.payload.res)
            {
                state.isSuccess = true;
                state.user = action.payload.res?.profileObj;
                window.localStorage.setItem('profile', JSON.stringify(action.payload.res.profileObj));
                window.localStorage.setItem('token_id', JSON.stringify(action.payload.res.tokenObj.id_token));
                window.localStorage.setItem('provider', 'google');
            }
        },
        googleFailure: (state) => {
            console.log('Google Sign in was unsuccessful. Try agin later.');
        }
    }
})


export const {googleSuccess, googleFailure} = GoogleOAuthSlice.actions;

export default GoogleOAuthSlice.reducer;

