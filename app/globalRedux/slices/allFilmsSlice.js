import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllFilmsThunk = createAsyncThunk("get-films", async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  } catch (error) {
    console.error(error, "Error is occuried while fetching films");
  }
});

const initialState = {
  allFilms: {
    data: [],
    isLoading: false,
    isError: null
  },
};



export const filmsSlice = createSlice({
    name: "get-films",
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(getAllFilmsThunk.pending, (state) => {
            state.allFilms.isLoading = true;
            state.allFilms.isError = null;
        })
        .addCase(getAllFilmsThunk.fulfilled, (state,action) => {
            state.allFilms.isLoading = false;
            state.allFilms.data = action.payload;
        })
        .addCase(getAllFilmsThunk.rejected, (state,action) => {
            state.allFilms.isLoading = false;
            state.allFilms.isError = action.payload
        })
    }

});



export default filmsSlice.reducer;