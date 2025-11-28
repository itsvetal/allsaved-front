import {createEntityAdapter} from "@reduxjs/toolkit";
import type {IPost} from "../api";

export const postsAdapter = createEntityAdapter({
    selectId: (post: IPost) => post.id,
    sortComparer: (a: IPost, b: IPost) => a.id - b.id,
});
