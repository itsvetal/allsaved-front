import React from 'react';
import {Link} from "react-router-dom";
import './Card.scss';
import {useAuth} from "../../../../../context/AuthContext.tsx";

interface CardProps {
    id: number;
    userId: number;
    title: string;
    content: string;
    thumbnail: string;
}

function Card({id, userId, title, content, thumbnail}: CardProps): React.ReactElement {
    const { user } = useAuth();

    // const [openEditModal, setOpenEditModal] = useState(false);
    // const [openRemoveModal, setOpenRemoveModal] = useState(false);


    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Click card: ', id);
    };
    return (
        <>
            <div className="col-md-6 col-sm-12 position-relative">
                <div className="card">
                    <div className="position-absolute  top-0"
                         style={{left: '0px', width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                        <button data-bs-toggle="modal" data-bs-target={user?.id === userId ? `#inlineForm-${id}` : `#notOwner`}
                                className="svg-btn bg-transparent p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                 width="24px" fill="#c5c5c5">
                                <path
                                    d="m490-527 37 37 217-217-37-37-217 217ZM200-200h37l233-233-37-37-233 233v37Zm355-205L405-555l167-167-29-29-219 219-56-56 218-219q24-24 56.5-24t56.5 24l29 29 50-50q12-12 28.5-12t28.5 12l93 93q12 12 12 28.5T828-678L555-405ZM270-120H120v-150l285-285 150 150-285 285Z"/>
                            </svg>
                        </button>
                        <button className="svg-btn bg-transparent p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                 width="24px" fill="#c5c5c5">
                                <path
                                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="card-content">
                        <img className="card-img-bottom img-fluid" src={thumbnail}
                             alt="Card image cap" style={{height: "20rem", objectFit: "cover"}}/>
                        <div className="card-body">
                            <Link to={`${id}`} className="card-link">
                                <h4 className="card-title">{title}</h4>
                            </Link>
                            <p className="card-text">
                                {content}
                            </p>
                            <a href="#" className="card-link"><small>Read 12 Comments</small></a>
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
                </div>
            </div>

            <div className="modal fade text-left" id={`inlineForm-${id}`}
                 role="dialog"
                 aria-labelledby="myModalLabel33" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                     role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel33">Edit Post - {id}</h4>
                            <button type="button" className="close" data-bs-dismiss="modal"
                                    aria-label="Close">
                                <i data-feather="x"></i>
                            </button>
                        </div>
                        <form action="#" onSubmit={submitHandler}>
                            <div className="modal-body edit-modal">
                                <label htmlFor={`title-${id}`}>Title: </label>
                                <div className="form-group w-100">
                                    <input id={`title-${id}`} type="text"
                                           placeholder="Post title"
                                           className="form-control"/>
                                </div>
                                <label htmlFor={`content-${id}`}>Content: </label>
                                <div className="form-group w-100">
                                    <textarea
                                        id={`content-${id}`}
                                        className="form-control"
                                        rows={3}
                                        placeholder="Post content"
                                    />
                                </div>
                                <label htmlFor={`file-${id}`}></label>
                                <div className="form-group w-100" style={{display: "flex"}}>
                                    <input id={`file-${id}`} type="file"/>
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
                                    <span className="d-none d-sm-block">login</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="modal fade " id="notOwner" role="dialog"
                 aria-labelledby="myModalLabel1">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModalLabel1">Attention</h5>
                            <button type="button" className="close rounded-pill" data-bs-dismiss="modal"
                                    aria-label="Close">
                                <i data-feather="x"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                                You are not the owner of this post and cannot change or delete it
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn" data-bs-dismiss="modal">
                                <i className="bx bx-x d-block d-sm-none"></i>
                                <span className="d-none d-sm-block">Close</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Card;
