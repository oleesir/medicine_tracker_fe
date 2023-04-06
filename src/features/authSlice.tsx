import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState={}

// export const signupUser = createAsyncThunk("auth/signup", async (formData: SignupInput, { rejectWithValue }) => {
//     try {
//         const res = await fetch(formData);
//         return res;
//     } catch (error: any) {
//         return rejectWithValue(error.response?.data);
//     }
// });


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{},
    extraReducers:{}
})