import instance from "./axios.ts";

export interface IPost {
    id: number;
    userId: number;
    title: string;
    content: string;
    thumbnail: string;
}

export interface PaginatedPosts {
    data: IPost[];
    links: PaginationLink[];
    currentPage: number;
    lastPage: number;
    first_page_url: string;
    last_page_url: string;
    from: number;
    to: number;
    total: number;
    per_page: number;

}

export interface PaginationLink {
    url: string;
    label: string;
    page: number;
    active: boolean
}

export const getPosts = async (page: number = 1, search: string = '', path: string = '/posts'): Promise<PaginatedPosts> => {
    const params = {page, ...(search && {search})};
    return await instance.get(path, {params});
}

export const getPost = async (id: number): Promise<IPost> => {
    return await instance.get(`/posts/${id}`);
}
