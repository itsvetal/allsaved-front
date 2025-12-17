import React, {useEffect, useState} from 'react';
import './Posts.scss';
import Card from "./components/Card/Card.tsx";
import {useAppDispatch, useAppSelector} from "../../../store/reduxHook.ts";
import {selectPosts} from "../../../store/Selectors.ts";
import {postsUpdated, postUpdated} from "../../../store/slices/postsSlice.ts";
import {createPost, getPosts, type IPostForm, type PaginatedPosts} from "../../../api";

function Posts(): React.ReactElement {

    const [formData, setFormData] = useState<IPostForm>({
        title: '',
        content: '',
        thumbnail: null,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectPosts);

    const fetchPosts = async () => {
        try {
            const data: PaginatedPosts = await getPosts(currentPage, search);
            setTotalPages(data.last_page);
            setCurrentPage(data.current_page);
            dispatch(postsUpdated(data.data))
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [dispatch]);

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('content', formData.content);
        if (formData.thumbnail) {
            data.append('thumbnail', formData.thumbnail);
        }
        try {
            const postData = await createPost(data);
            dispatch(postUpdated(postData));
            setFormData({
                title: '',
                content: '',
                thumbnail: null,
            });
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    console.log('Current Page:', currentPage);

    return (
        <>
            <div id="main" className="posts">
                <header className="mb-3 ">
                    <a href="#" className="burger-btn d-block d-xl-none">
                        <i className="bi bi-justify fs-3"></i>
                    </a>
                </header>

                <div className="page-title mb-3">
                    <div className="row justify-content-end">
                        <div className="col-12 col-md-6 order-md-2 order-first">
                            <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
                                <ol className="breadcrumb flex-row align-items-center">
                                    <li className="breadcrumb-item">
                                        <button
                                            className="btn btn-success"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#newPost"
                                        >
                                            + New post
                                        </button>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Posts</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <section id="content-types" className="flex-grow-1">
                    <div className="row posts-list">

                        {posts.length ? (posts?.map(post => (
                            <Card {...post} key={post.id}/>
                        )))
                        : (
                            <div className="flex-column align-items-center justify-content-center">
                                <img src="/assets/images/img.png" alt="Posts is not found"/>
                                <div>No posts found</div>
                            </div>
                            )}

                    </div>
                    {totalPages > 1 && (
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                {totalPages > 1 && Array.from({length: totalPages}, (_, index) => (
                                    <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                                {/*<li className="page-item"><a className="page-link" href="#">1</a></li>*/}
                                {/*<li className="page-item"><a className="page-link" href="#">2</a></li>*/}
                                {/*<li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    )}
                </section>

                <footer className="flex-shrink-0">
                    <div className="footer clearfix mb-0 text-muted">
                        <div className="float-start">
                            <p>2023 &copy; Mazer</p>
                        </div>
                        <div className="float-end">
                            <p>Crafted with <span className="text-danger"><i
                                className="bi bi-heart-fill icon-mid"></i></span>
                                by <a href="https://saugi.me">Saugi</a></p>
                        </div>
                    </div>
                </footer>
            </div>

            <div className="modal fade text-left" id={`newPost`}
                 role="dialog"
                 aria-labelledby="myModalLabel33" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                     role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel33">Create Post</h4>
                            <button type="button" className="close" data-bs-dismiss="modal"
                                    aria-label="Close">
                                <i data-feather="x"></i>
                            </button>
                        </div>
                        <form action="#" onSubmit={submitHandler}>
                            <div className="modal-body edit-modal">
                                <label htmlFor={`add-title`}>Title: </label>
                                <div className="form-group w-100">
                                    <input
                                        id={`add-title`}
                                        name="title"
                                        type="text"
                                        placeholder="Post title"
                                        className="form-control"
                                        value={formData.title}
                                        onChange={(event) => setFormData((state) => ({
                                            ...state,
                                            title: event.target.value
                                        }))}
                                    />
                                </div>
                                <label htmlFor={`add-content`}>Content: </label>
                                <div className="form-group w-100">
                                    <textarea
                                        id={`add-content`}
                                        className="form-control"
                                        rows={3}
                                        placeholder="Post content"
                                        value={formData.content}
                                        onChange={(event) => setFormData((state) => ({
                                            ...state,
                                            content: event.target.value
                                        }))}
                                    />
                                </div>
                                <label htmlFor={`add-file`}></label>
                                <div className="form-group w-100" style={{display: "flex"}}>
                                    <input
                                        id={`add-file`}
                                        type="file"
                                        accept="image/*"
                                        onChange={(event) => {
                                            const file = event.target.files?.[0] ?? null;
                                            setFormData((state) => ({...state, thumbnail: file}))
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light-secondary"
                                        data-bs-dismiss="modal">
                                    <i className="bx bx-x d-block d-sm-none"></i>
                                    <span className="d-none d-sm-block">Close</span>
                                </button>
                                <button type="submit" className="btn btn-primary ms-1"
                                        data-bs-dismiss="modal">
                                    <i className="bx bx-check d-block d-sm-none"></i>
                                    <span className="d-none d-sm-block">Create</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Posts;
