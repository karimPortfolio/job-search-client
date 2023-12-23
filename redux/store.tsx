"use client";
import { configureStore } from "@reduxjs/toolkit";
import SearchJobSlice from "./slices/jobs/searchJobSlice";
import { useDispatch } from "react-redux";
import RecentJobsSlice from "./slices/jobs/recentJobsSlice";
import GoogleOAuthSlice from './slices/auth/googleOauthSlice';
import LoginSlice from "./slices/auth/loginSlice";
import RegisterSlice from "./slices/auth/registerSlice";
import GlobalAuthSlice from "./slices/auth/globalAuthSlice";

export const store = configureStore({
  reducer: {
    searchJobs: SearchJobSlice,
    recentJobs: RecentJobsSlice,
    googleOAuth: GoogleOAuthSlice,
    login: LoginSlice,
    register: RegisterSlice,
    auth: GlobalAuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
