import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
    return configureStore({
        reducer:{}
    })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
