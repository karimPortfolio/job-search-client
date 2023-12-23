

import { fetchRegisterUser } from "@/redux/api/auth/registerThunk";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface InitialState {
    loading: boolean;
    response: {} | null;
    error: string
}

const initialState: InitialState = {
    loading:false,
    response:null,
    error:''
}


const RegisterSlice = createSlice({
    name:'register',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchRegisterUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRegisterUser.fulfilled, (state, {payload}: PayloadAction<any>) =>{
            state.loading = false;
            state.response = payload;
        });
        builder.addCase(fetchRegisterUser.rejected, (state, {error}: any) => {
            state.response = {};
            state.error = error;
        })
    }
})

export default RegisterSlice.reducer;
