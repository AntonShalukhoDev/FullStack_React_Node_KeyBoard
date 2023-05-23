import { createSlice } from "@reduxjs/toolkit";
import { SliceType } from "../types";

const initialState: SliceType = {
    value: false
}

const Song1Slice = createSlice({
    name: 'song1',
    initialState,
    reducers: {
        toggleSongView: (state) => {
            state.value = !state.value
        },
        disableSong1: (state) => {
            state.value = false
        }
    }
})

export const {toggleSongView, disableSong1} = Song1Slice.actions
export default Song1Slice.reducer