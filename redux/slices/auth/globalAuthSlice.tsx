import { createSlice } from "@reduxjs/toolkit"
import { NextResponse } from "next/server"

interface InitialState {
    AUTH: boolean,
    user: {} | null,
}

const initialState: InitialState = {
    AUTH:false,
    user:null
}


const GlobalAuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        checkAuth: (state) => {
            const token = window.localStorage.getItem('token_id');
            if (!token)
            {
                NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/auth/signin`);
            }
            else
            {
                state.AUTH = true;
                const provider = window.localStorage.getItem('provider');
                let user: any = window.localStorage.getItem('profile');
                user = JSON.parse(user);
                console.log(provider);
                console.log(user);
                if (provider === 'google')
                {
                    const googleUser = {
                        id: user?.googleId,
                        fullName: user?.name,
                        email: user?.email,
                        profileImgUrl: user?.imageUrl,
                    }
                    state.user = googleUser;
                }
                else{
                    state.user = user;
                }
            }
        },
        setTokenCookie:() =>{
            const token = window.localStorage.getItem('token_id');
            if (token){
                console.log('token exists');
                document.cookie = `token=${token}; path=/; secure; HttpOnly; SameSite=None`;
            }
            else {
                console.log('no token')
            }
        },
        logout: (state) => {
            window.localStorage.removeItem('token_id');
            window.localStorage.removeItem('profile');
            window.localStorage.removeItem('provider');
            state.AUTH = false;
            state.user = null;
        }
    }
})


export const {checkAuth, setTokenCookie, logout} = GlobalAuthSlice.actions;
export default GlobalAuthSlice.reducer;

