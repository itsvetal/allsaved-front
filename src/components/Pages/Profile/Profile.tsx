import React from 'react';
import {useAuth} from "../../../context/AuthContext.tsx";
import {Link} from "react-router-dom";
import {routes} from "../../../routes/routes.ts";

function Profile(): React.ReactElement {

    const { user } = useAuth();

    return (
        <div id="main">
            <header className="mb-3">
                <a href="#" className="burger-btn d-block d-xl-none">
                    <i className="bi bi-justify fs-3"></i>
                </a>
            </header>

            <div className="page-heading">
                <div className="page-title">
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-1 order-last">
                            <h3>Account Profile</h3>
                            <p className="text-subtitle text-muted">A page where users can change profile
                                information</p>
                        </div>
                        <div className="col-12 col-md-6 order-md-2 order-first">
                            <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={`/${routes.dashboard}`}>Dashboard</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <div className="avatar avatar-2xl">
                                            <img src="./assets/compiled/jpg/2.jpg" alt="Avatar"/>
                                        </div>

                                        <h3 className="mt-3">{user?.name}</h3>
                                        <p className="text-small">Junior Software Engineer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <form action="#" method="get">
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="text" name="name" id="name" className="form-control"
                                                   placeholder="Your Name" value={user?.name}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="text" name="email" id="email" className="form-control"
                                                   placeholder="Your Email" value={user?.email}/>
                                        </div>
                                        {/*<div className="form-group">*/}
                                        {/*    <label htmlFor="phone" className="form-label">Phone</label>*/}
                                        {/*    <input type="text" name="phone" id="phone" className="form-control"*/}
                                        {/*           placeholder="Your Phone" value="083xxxxxxxxx"/>*/}
                                        {/*</div>*/}
                                        {/*<div className="form-group">*/}
                                        {/*    <label htmlFor="birthday" className="form-label">Birthday</label>*/}
                                        {/*    <input type="date" name="birthday" id="birthday" className="form-control"*/}
                                        {/*           placeholder="Your Birthday"/>*/}
                                        {/*</div>*/}
                                        {/*<div className="form-group">*/}
                                        {/*    <label htmlFor="gender" className="form-label">Gender</label>*/}
                                        {/*    <select name="gender" id="gender" className="form-control">*/}
                                        {/*        <option value="male">Male</option>*/}
                                        {/*        <option value="female">Female</option>*/}
                                        {/*    </select>*/}
                                        {/*</div>*/}
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">Save Changes</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <footer>
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

export default Profile;
