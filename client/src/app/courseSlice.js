import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import server from "../host";

export const getCourse = createAsyncThunk('getCourse', async (cname, { rejectWithValue }) => {
    try {
        let { data } = await server.get(`/api/course/getcourse?c=${cname}`)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const courseSlice = createSlice({
    name: "course",
    initialState: {
        course: null,
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(getCourse.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(getCourse.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
            state.course = action.payload.courseDetails
        });

        builder.addCase(getCourse.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export default courseSlice.reducer
