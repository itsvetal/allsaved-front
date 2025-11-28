import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import './Posts.scss';
import {getPosts, type PaginatedPosts, type Post} from "../../../api";
import Card from "./components/Card/Card.tsx";

function Posts(): React.ReactElement {
    const [posts, setPosts] = React.useState<Post[] | null>(null);

    const fetchPosts = async () => {
        try {
            const data: PaginatedPosts = await getPosts();
            setPosts(data.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div id="main" className="posts">
            <header className="mb-3 ">
                <a href="#" className="burger-btn d-block d-xl-none">
                    <i className="bi bi-justify fs-3"></i>
                </a>
            </header>

            <div className="page-title mb-3">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 w-50% order-last justify-content-start">
                        <h3 className="text-start">Posts</h3>
                    </div>
                    <div className="col-12 col-md-6 order-md-2 order-first">
                        <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Card</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <section id="content-types" className="flex-grow-1">
                <div className="row">

                    {posts?.map(post => (
                        <Card {...post} key={post.id}/>
                    ))}

                </div>
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
    );
}

export default Posts;
