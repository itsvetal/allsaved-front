import React from 'react';
import {Link} from "react-router-dom";

interface CardProps {
    id: number;
    userId: number;
    title: string;
    content: string;
    thumbnail: string;
}

function Card({ id, title, content, thumbnail }: CardProps): React.ReactElement {
    return (
        <div className="col-md-6 col-sm-12 position-relative">
            <div className="card">
                <div className="position-absolute  top-0"
                     style={{left: '0px', width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                    <button className="svg-btn bg-transparent p-1">
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
    );
}

export default Card;
