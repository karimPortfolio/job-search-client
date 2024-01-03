import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchMatchedJobs } from "../../api/jobs/searchJobThunk";

interface InitialState {
  loading: boolean;
  jobs: {}[];
  searchValue: string | null;
  location: string | null;
  error: string | undefined;
}

const initialState: InitialState = {
  loading: false,
  jobs:[],
  searchValue: null,
  location: null,
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
        state.jobs = payload.jobs;
        state.searchValue = payload.search;
        state.location = payload.location;
      }
    );
    builder.addCase(fetchMatchedJobs.rejected, (state, action) => {
      state.jobs = [];
      state.error = action.error?.message;
    });
  },
});

export default SearchJobSlice.reducer;
