import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchMatchedJobs } from "../../api/jobs/searchJobThunk";

const initialState = {
  loading: false,
  jobs: [],
  error: "",
};

const SearchJobSlice = createSlice({
  name: "searchJobs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMatchedJobs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchMatchedJobs.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.jobs = payload;
      }
    );
    builder.addCase(fetchMatchedJobs.rejected, (state, action) => {
      state.jobs = [];
      state.error =
        typeof action.error.message !== "undefined" ? action.error.message : "";
    });
  },
});

export default SearchJobSlice.reducer;
