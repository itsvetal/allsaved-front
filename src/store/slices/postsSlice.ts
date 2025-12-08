import {createSlice} from "@reduxjs/toolkit";
import {postsAdapter} from "../Adapters.ts";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {
        postsCreated: postsAdapter.upsertMany,
        postsUpdated: postsAdapter.upsertMany,
        postUpdated: postsAdapter.upsertOne,
        postDeleted: postsAdapter.removeOne
    }
})

export const {postsCreated, postsUpdated, postDeleted, postUpdated} = postsSlice.actions

export default postsSlice.reducer
