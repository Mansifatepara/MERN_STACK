import React from "react";
import { Outlet,Link } from "react-router-dom";

function Layout() {
    return (
        <>
            <div className="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/" style={{ fontSize: "30px", }}><b>Jotingada Primary School</b></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            </div>
                            <div >
                                <ul class="navbar-nav">
                                    <li className="nav-item">
                                        <Link class="nav-link active" to="/students"><h5>Students</h5></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link class="nav-link active" to="/faculties"><h5>Faculties</h5></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link class="nav-link active" to="/contactus"><h5>ContactUs</h5></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link class="nav-link active" to="/home"><h5>Home</h5></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='row'>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;