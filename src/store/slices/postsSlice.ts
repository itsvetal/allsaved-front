import {createSlice} from "@reduxjs/toolkit";
import {postsAdapter} from "../Adapters.ts";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {
        postsCreated: postsAdapter.upsertMany,
        postsUpdated: postsAdapter.upsertMany,
        postsDeleted: postsAdapter.removeMany
    }
})

export const {postsCreated, postsUpdated, postsDeleted} = postsSlice.actions

export default postsSlice.reducer
