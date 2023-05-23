import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserNameInterface {
    username: string
}

const initialState: UserNameInterface = {
    username: ''
}

const UserNameSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {
        changeUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        }
    }
})

export default UserNameSlice.reducer
export const {changeUserName} = UserNameSlice.actions