import { createSlice } from "@reduxjs/toolkit";
import { SliceType } from "../types";

const initialState: SliceType = {
    value: false
}

const Song3Slice = createSlice({
    name: 'song3',
    initialState,
    reducers: {
        toggleSong3View: (state) => {
            state.value = !state.value
        },
        disableSong3: (state) => {
            state.value = false
        }
    }
})

export const {toggleSong3View, disableSong3} = Song3Slice.actions
export default Song3Slice.reducer