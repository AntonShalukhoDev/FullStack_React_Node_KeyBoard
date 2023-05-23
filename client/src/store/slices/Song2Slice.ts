import { createSlice } from "@reduxjs/toolkit";
import { SliceType } from "../types";

const initialState: SliceType = {
    value: false
}

const Song2Slice = createSlice({
    name: 'song2',
    initialState,
    reducers: {
        toggleSong2View: (state) => {
            state.value = !state.value
        },
        disableSong2: (state) => {
            state.value = false
        }
        
    }
})

export const {toggleSong2View, disableSong2} = Song2Slice.actions
export default Song2Slice.reducer