import React from 'react';

function PostEditModal(): React.ReactElement {
    return (
        <>
            <section id="form-and-scrolling-components">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="form-group">
                                        <h4 className="card-title">Edit Post</h4>
                                        <p> Created Simple Login Form.</p>
                                        {/*// <!-- Button trigger for login form modal -->*/}
                                        <button type="button" className="btn btn-outline-success" data-bs-toggle="modal"
                                                data-bs-target="#inlineForm">
                                            Launch Modal
                                        </button>

                                        {/*// <!--login form Modal -->*/}
                                        <div className="modal fade text-left" id="inlineForm"
                                             role="dialog"
                                             aria-labelledby="myModalLabel33" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                                                 role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title" id="myModalLabel33">Login Form </h4>
                                                        <button type="button" className="close" data-bs-dismiss="modal"
                                                                aria-label="Close">
                                                            <i data-feather="x"></i>
                                                        </button>
                                                    </div>
                                                    <form action="#">
                                                        <div className="modal-body">
                                                            <label htmlFor="email">Email: </label>
                                                            <div className="form-group">
                                                                <input id="email" type="text"
                                                                       placeholder="Email Address"
                                                                       className="form-control"/>
                                                            </div>
                                                            <label htmlFor="password">Password: </label>
                                                            <div className="form-group">
                                                                <input id="password" type="password"
                                                                       placeholder="Password"
                                                                       className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-light-secondary"
                                                                    data-bs-dismiss="modal">
                                                                <i className="bx bx-x d-block d-sm-none"></i>
                                                                <span className="d-none d-sm-block">Close</span>
                                                            </button>
                                                            <button type="button" className="btn btn-primary ms-1"
                                                                    data-bs-dismiss="modal">
                                                                <i className="bx bx-check d-block d-sm-none"></i>
                                                                <span className="d-none d-sm-block">login</span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default PostEditModal;
