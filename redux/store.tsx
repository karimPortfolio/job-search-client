'use client'
import { configureStore } from "@reduxjs/toolkit";
import SearchJobSlice from './slices/searchJobSlice';
import { useDispatch } from "react-redux";
import RecentJobsSlice from './slices/recentJobsSlice';

export const store = configureStore({
    reducer:{
        searchJobs: SearchJobSlice,
        recentJobs: RecentJobsSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;

