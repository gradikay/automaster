import React from 'react';
import { withRouter } from "react-router-dom";
import '../css/News.css';

// Card3
function Card3(props) {
    return (
        <section className="card col-md-6 border-0 mb-3">
            <div className="w-100" style={{ height: "250px", overflow: "hidden"}}>                
                <img src={props.imageSource} alt="Chicago" style={{ width: "inherit" }}/>
            </div>
            <div className="card-body border ">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </section>
    );
}

function News() {
    return (
        <main className="News">
            <header className="py-5 d-flex flex-wrap align-content-center justify-content-center" style={{ color: "white" }}>
                <div>
                    <h2>- News -</h2>
                </div>
            </header>
            <section className="container-fluid bg-white py-5">
                <div className="row">
                    <div className="col-md-9"> 
                        <div className="row">
                            { /* SECTION */}
                            <Card3
                                title="Car rates are dropping accross the nation"
                                imageSource="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
                                link="#"
                                linkName="See Profile"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation"
                            />
                            <Card3
                                title="Car rates are dropping accross the nation"
                                imageSource="https://images.unsplash.com/photo-1561491431-71b89da6056a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                                link="#"
                                linkName="See Profile"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation"
                            />
                            <Card3
                                title="Car rates are dropping accross the nation"
                                imageSource="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                                link="#"
                                linkName="See Profile"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation"
                            />
                            <Card3
                                title="Car rates are dropping accross the nation"
                                imageSource="https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                                link="#"
                                linkName="See Profile"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation"
                            />
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
