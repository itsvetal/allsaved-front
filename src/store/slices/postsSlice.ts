import {createSlice} from "@reduxjs/toolkit";
import {postsAdapter} from "../Adapters.ts";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {
        postsCreated: postsAdapter.upsertMany,
        postsUpdated: postsAdapter.upsertMany,
        postUpdated: postsAdapter.upsertOne,
        postCreated: postsAdapter.upsertOne,
        postDeleted: postsAdapter.removeOne
    }
})

export const {postsUpdated, postDeleted, postUpdated, postCreated} = postsSlice.actions

export default postsSlice.reducer
