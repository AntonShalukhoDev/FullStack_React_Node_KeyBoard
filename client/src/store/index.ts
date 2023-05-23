import { combineReducers, configureStore } from '@reduxjs/toolkit'
import Song1Slice from './slices/Song1Slice'
import Song2Slice from './slices/Song2Slice'
import Song3Slice from './slices/Song3Slice'
import ChangeIconSlice from './slices/ChangeIconSlice'
import AccountIconSlice from './slices/AccountIconSlice'
import ChangeNameSlice from './slices/ChangeNameSlice'
import UserNameSlice from './slices/UserNameSlice'

const rootReducer = combineReducers({
    sogn1: Song1Slice,
    sogn2: Song2Slice,
    sogn3: Song3Slice,
    isIcon: ChangeIconSlice,
    accountIcon: AccountIconSlice,
    changeName: ChangeNameSlice,
    username: UserNameSlice,
})

const store = configureStore({
    reducer: rootReducer
})

type RootState = ReturnType<typeof store.getState>

export const selectorSong1 = (state: RootState) => state.sogn1.value
export const selectorSong2 = (state: RootState) => state.sogn2.value
export const selectorSong3 = (state: RootState) => state.sogn3.value
export const selectorChangeIcon = (state: RootState) => state.isIcon.value
export const selectorAccountIcon = (state: RootState) => state.accountIcon.src
export const selectorChangeName = (state: RootState) => state.changeName.value
export const selectorUserName = (state: RootState) => state.username.username

export default store