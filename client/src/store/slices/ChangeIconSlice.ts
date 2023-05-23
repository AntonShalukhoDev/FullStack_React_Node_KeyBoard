import { createSlice } from "@reduxjs/toolkit";
import { SliceType } from "../types";

const initialState: SliceType = {
    value: false
}

const ChangeIconSlice = createSlice({
    name: 'changeIcon',
    initialState,
    reducers: {
        toggleIconsWrap: (state) => {
            state.value = !state.value
        }
    }
})

export const {toggleIconsWrap} = ChangeIconSlice.actions
export default ChangeIconSlice.reducer