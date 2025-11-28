import {postsAdapter} from "./Adapters.ts";
import type {RootState} from "./store.ts";

export const { selectAll: selectPosts, selectById: selectPost } =
    postsAdapter.getSelectors<RootState>(state => state.posts);
