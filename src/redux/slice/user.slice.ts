import {createSlice} from "@reduxjs/toolkit";

interface IUser {
    email: string
}

const init:IUser = {
    email: localStorage.getItem("user")
}

const userSlice = createSlice({
    name: "user",
    initialState: init,
    reducers: {
        loginReducer: (state, action) => {
            state.email = action.payload
        }
    }
})
export const { loginReducer} = userSlice.actions
export default userSlice.reducer