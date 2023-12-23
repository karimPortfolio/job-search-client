"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchRecentJobs } from "@/redux/api/jobs/recentJobsThunk";

interface Job {
  loading: boolean;
  jobs: {}[];
  error: string;
}

const initialState: Job = {
  loading: false,
  jobs: [],
  error: "",
};

const RecentJobsSlice = createSlice({
  name: "recentJobs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRecentJobs.pending, (state) => {
      state.loading = true;
      state.jobs = [];
    });
    builder.addCase(
      fetchRecentJobs.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.jobs = typeof payload !== "undefined" ? payload : [];
      }
    );
    builder.addCase(fetchRecentJobs.rejected, (state, { error }: any) => {
      state.loading = false;
      state.jobs = [];
      state.error = error;
    });
  },
});

export default RecentJobsSlice.reducer;
