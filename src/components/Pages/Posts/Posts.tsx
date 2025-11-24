import React from 'react';
import {Link} from "react-router-dom";
import './Posts.scss';

function Posts(): React.ReactElement {


    return (
        <div id="main">
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

                    <div className="col-md-6 col-sm-12 position-relative">
                        <div className="card">
                            <div className="position-absolute  top-0" style={{left: '0px', width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
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
                                <img className="card-img-bottom img-fluid" src="./assets/compiled/jpg/building.jpg"
                                     alt="Card image cap" style={{height: "20rem", objectFit: "cover"}}/>
                                <div className="card-body">
                                    <h4 className="card-title">Social Media</h4>
                                    <p className="card-text">
                                        Candy Cupcake sugar plum oat cake wafer marzipan jujubes.
                                        Jelly-o sesame snaps cheesecake topping. Cupcake fruitcake macaroon donut
                                        pastry
                                        gummies
                                        tiramisu
                                        chocolate bar muffin.
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
