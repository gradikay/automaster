import React from 'react';
import { withRouter } from "react-router-dom";
import '../css/ItemPreview.css';
import mustang from "../img/mustang.jpg"

  
function News() {
    return (
        <main className="ItemPreview">
            <header className="py-5 d-flex flex-wrap align-content-center justify-content-center" style={{ color: "white" }}>
                <div>
                    <h2>- Item -</h2>
                </div>
            </header>
            <section className="container-fluid bg-white py-5">
                <div className="row">
                    <div className="col-md-9"> 
                        <div id="demo" className="carousel slide border vh-75" data-ride="carousel">                          
                            <ul className="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" className="carousel-slide active">
                                    <img src={mustang} alt="Los Angeles" />
                                </li>
                                <li data-target="#demo" data-slide-to="1" className="carousel-slide border-right border-left">
                                    <img src={mustang} alt="Los Angeles" />
                                </li>
                                <li data-target="#demo" data-slide-to="2" className="carousel-slide">
                                    <img src={mustang} alt="Los Angeles" />
                                </li>
                            </ul>                         
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={mustang} alt="Los Angeles" />
                                </div>
                                <div className="carousel-item">
                                    <img src={mustang} alt="Chicago"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={mustang} alt="New York"/>
                                </div>
                            </div>                                         
                            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                <span className="fas fa-reply"></span>
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                                <span className="fas fa-share"></span>
                            </a>

                        </div>
                        <div className="mt-5 vh-75">
                            <ul className="nav nav-tabs pb-3">
                                <li className="btn btn-primary text-white m-2"><a data-toggle="tab" href="#home" className="text-white">VEHICLE DESCRIPTION</a></li>
                                <li className="btn btn-primary text-white m-2"><a data-toggle="tab" href="#menu1" className="text-white">SPECIFICATION</a></li>
                                <li className="btn btn-primary m-2"><a data-toggle="tab" href="#menu2" className="text-white">REVIEWS</a></li>
                            </ul>

                            <div className="tab-content">
                                <div id="home" className="tab-pane active">
                                    <h3>VEHICLE DESCRIPTION</h3>
                                    <p className="text-left py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div id="menu1" className="tab-pane ">
                                    <h3>SPECIFICATION</h3>
                                    <p className="text-left py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div id="menu2" className="tab-pane "> 
                                    <h3>REVIEWS</h3>
                                    <p className="text-left py-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-md-3 bg-light border py-5">
                        <form className="mb-3">
                            <label htmlFor="customRange">SEARCH</label>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-success" type="submit">Go</button>
                                            </div>
                                    </div>
                                </li>
                            </ul>
                        </form> 
                        <form className="mb-3 border p-3 bg-white">
                            <label htmlFor="customRange">NEWSLETTER</label>
                            <h3>Get Even More</h3>
                            <p>Get all latest content delivered straight to your inbox.</p>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit">Register</button>
                                </div>
                            </div>
                            <p><small>Don't worry we don't spam.</small></p>
                        </form> 
                    </div>
                </div>
            </section>

        </main>
    );
}

export default withRouter(News);
