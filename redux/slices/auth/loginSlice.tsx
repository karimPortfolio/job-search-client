import { fetchLoginUser } from "@/redux/api/auth/loginThunk"
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


const LoginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchLoginUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchLoginUser.fulfilled, (state, {payload}: PayloadAction<any>) =>{
            state.loading = false;
            state.response = payload;
        });
        builder.addCase(fetchLoginUser.rejected, (state, {error}: any) => {
            state.response = {};
            state.error = error;
        })
    }
})

export default LoginSlice.reducer;
