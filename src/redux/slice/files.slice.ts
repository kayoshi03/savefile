import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosAuth} from "../../api/interceptor.tsx";
import {ICardItem} from "../../components/CardItem.tsx";
//Request files
export const fetchMedia = createAsyncThunk<ICardItem[]>(
    'media/fetchMedia',
    async () => {
        const response = await axiosAuth.get("https://js-test.kitactive.ru/api/media");
        return response.data.files;
    }
);
interface IFilesState {
    data: ICardItem[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
const init:IFilesState = {
    data: [],
    status: 'idle',
    error: null
}

const filesSlice = createSlice({
    name: "files",
    initialState: init,
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
                state.error = action.error.message || 'Unknown error';
            });
    }
})
export default filesSlice.reducer;