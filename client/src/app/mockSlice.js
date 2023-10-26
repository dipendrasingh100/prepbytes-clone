import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import server from "../host";

export const getTests = createAsyncThunk('getTests', async (_, { rejectWithValue }) => {
    try {
        let { data } = await server.get("/api/mock/tests")
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const mockReducer = createSlice({
    name: 'mock',
    initialState: {
        tests: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(getTests.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(getTests.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
            state.tests = action.payload.tests
        });

        builder.addCase(getTests.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})


export default mockReducer.reducer