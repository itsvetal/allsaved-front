import {createSlice} from "@reduxjs/toolkit";
import {postsAdapter} from "../Adapters.ts";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {
        postsCreated: postsAdapter.upsertMany,
        postsUpdated: postsAdapter.upsertMany,
        postsDeleted: postsAdapter.removeMany,
        postUpdated: postsAdapter.upsertOne
    }
})

export const {postsCreated, postsUpdated, postsDeleted, postUpdated} = postsSlice.actions

export default postsSlice.reducer
