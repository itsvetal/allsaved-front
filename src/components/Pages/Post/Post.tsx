import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../store/reduxHook.ts";
import {selectPost} from "../../../store/Selectors.ts";
import './Post.scss';
import {getPost} from "../../../api";
import {postUpdated} from "../../../store/slices/postsSlice.ts";

function Post(): React.ReactElement {

    const {postId} = useParams();
    const data = useAppSelector(state => selectPost(state, Number(postId)));
    const dispatch = useAppDispatch();

    const fetchPost = async (id: string) => {
        try {
            const data = await getPost(Number(id));
            console.log('Data:', data);
            dispatch(postUpdated(data));
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    };
    useEffect(() => {
        if (!postId) {
            console.log('True')
            return;
        }
       fetchPost((postId));
    }, [dispatch, postId]);

    return (
        <div className="post">
            <img className="" src={data?.thumbnail}
                 alt="Card image cap" style={{height: "20rem", objectFit: "cover"}}/>
            <div className="card-body">
                <h4 className="card-title">{data?.title}</h4>
                <p className="card-text">
                    {data?.content}
                </p>
            </div>
            <div className="btn-group align-items-center mx-2 px-1">
                <button type="button" className="btn btn-link p-2 m-1 text-decoration-none">
                    <i
                        className="bi bi-heart d-flex align-items-center justify-content-center text-secondary"></i>
                </button>
                <button type="button" className="btn btn-link p-2 m-1 text-decoration-none">
                    <i
                        className="bi bi-chat d-flex align-items-center justify-content-center text-secondary"></i>
                </button>
                <button type="button" className="btn btn-link p-2 m-1 text-decoration-none">
                    <i
                        className="bi bi-bookmark d-flex align-items-center justify-content-center text-secondary"></i>
                </button>
            </div>
        </div>
    );
}

export default Post;
