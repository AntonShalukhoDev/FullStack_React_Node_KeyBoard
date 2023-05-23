import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AccountIconInterface {
    src: string
}

const initialState: AccountIconInterface = {
    src: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
}

const accountIconSlice = createSlice({
    name: 'accountIcon',
    initialState,
    reducers: {
        changeIconSrc: (state, action: PayloadAction<string>) => {
            state.src = action.payload
        }
    }
})
export default accountIconSlice.reducer
export const {changeIconSrc} = accountIconSlice.actions