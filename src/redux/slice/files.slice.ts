import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosAuth} from "../../api/interceptor.tsx";
//Request files
export const fetchMedia = createAsyncThunk(
    'media/fetchMedia',
    async () => {
        const response = await axiosAuth.get("https://js-test.kitactive.ru/api/media");
        return response.data.files;
    }
);

const filesSlice = createSlice({
    name: "files",
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMedia.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMedia.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchMedia.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})
export default filesSlice.reducer;