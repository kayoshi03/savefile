import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./slice/user.slice.ts";
import mediaReducer from "./slice/files.slice.ts"
export const store = configureStore({
    reducer: {
        user: loginReducer,
        media: mediaReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;