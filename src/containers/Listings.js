import React, { useState } from 'react';
import { withRouter } from "react-router-dom"; 
import '../css/Listings.css';

// Card 2 without props
function Card3() {
    return (
        <section className="card col-md-4 p-0 border-0 mb-3">
            { /* IMAGE */}
            <img
                src="https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                alt="Chicago"
                style={{ width: "100%" }}
            />
            { /* CARD-BODY */}
            <div className="card-body bg-light border">
                { /* TITLE */}
                <h4>Ford Mustang</h4>
                { /* DESCRIPTIONS */}
                <ul className="list-group list-group-horizontal d-inline-flex">
                    <li className="list-group-item border-0 p-0  bg-light">
                        <i style={{ fontSize: "1rem" }} className='fas fa-charging-station d-block'></i>
                        <span>520</span>
                    </li>
                    <li className="list-group-item border-0 p-0 px-5  bg-light">
                        <i style={{ fontSize: "1rem" }} className='fas fa-horse-head d-block'></i>
                        <span>15</span>
                    </li>
                    <li className="list-group-item border-0 p-0  bg-light">
                        <i style={{ fontSize: "1rem" }} className='fas fa-car-battery d-block'></i>
                        <span>5 years</span>
                    </li>
                </ul>
                <hr />
                <ul className="p-0 AddOn">
                    <li>Pay at pick-up</li>
                    <li>Chilled AC</li>
                    <li>Free Cancellation</li>
                    <li>Audio Input</li>
                    <li>Heated Seats</li>
                    <li>Budget Car</li>
                    <li>Automatic</li>
                    <li>Unlimited Miles</li>
                    <li>Bluetooth</li>
                </ul>
                <hr />
                <ul className="list-group list-group-horizontal d-inline-flex">
                    <li className="list-group-item border-0 p-0 pr-5 pt-2  bg-light">
                        <p className=""><b>$10,000</b></p>
                    </li>
                    <li className="list-group-item border-0 p-0  bg-light">
                        <button type="button" class="btn btn-outline-danger">Buy Now</button>
                    </li>
                </ul>
            </div>
        </section>
    );
}

function Listings() {
    const [rangeMax, setRangeMax] = useState(1890);
    const [rangeMin, setRangeMin] = useState(1890);
    const [priceMin, setPriceMin] = useState(1000);
    const [priceMax, setPriceMax] = useState(1000);
    const [fuel, setFuel] = useState("Choose One");
    return (
        <main className="Listings">
            <header className="py-5 d-flex flex-wrap align-content-center justify-content-center" style={{color: "white"}}>
                <div>
                    <h2>- Listings -</h2>  
                </div>
            </header>
            <section className="container-fluid bg-white py-5">
                <div className="row">
                    <div className="col-md-9">
                        <div className="border border-right-0 mb-3 justify-content-around row ">
                            <div className="">
                                <div className="list-group list-group-horizontal">
                                    <div className="list-group-item border-0 p-0 align-self-center">
                                        <span>SHOW ON PAGE</span>
                                    </div>
                                    <div className="list-group-item border-0">
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-light border dropdown-toggle" data-toggle="dropdown">
                                                20 Auto
                                    </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#1">10 Autos</a>
                                                <a className="dropdown-item" href="#2">50 Auto</a>
                                                <a className="dropdown-item" href="#3">All Autos</a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>                             
                            </div>
                            <div className="">
                                <div className="list-group list-group-horizontal">
                                    <div className="list-group-item border-0 p-0 align-self-center">
                                        <span>SORT BY</span>
                                    </div>
                                    <div className="list-group-item border-0">
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-light border dropdown-toggle" data-toggle="dropdown">
                                                Last Added
                                    </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#2">Last Added</a>
                                                <a className="dropdown-item" href="#3">First Added</a>
                                                <a className="dropdown-item" href="#4">Price Min - Max</a>
                                                <a className="dropdown-item" href="#4">Price Max - Min</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="justify-content-around row">
                        <Card3/>
                        <Card3/>
                        <Card3/>
                        <Card3/>
                        <Card3/>
                        <Card3/> 
                        </div>
                    </div>
                    <div className="col-md-3 bg-light border py-5">
                        <form className="mb-3">
                            <label htmlFor="customRange">YEAR RANGE  </label>                      
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item">
                                Min: {rangeMin}
                                    <input type="range" className="custom-range" id="customRange" name="points1" min="1890" max="2021" onChange={e => setRangeMin(e.target.value)} value={rangeMin} />
                                </li>
                                <li className="list-group-item">
                                    Max: {rangeMax}
                                    <input type="range" className="custom-range" id="customRange" name="points1" min="1890" max="2021" onChange={e => setRangeMax(e.target.value)} value={rangeMax} />
                                </li> 
                            </ul>
                        </form>
                        
                        <form className="mb-3">
                            <label htmlFor="customRange">PRICE RANGE</label>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item">
                                Min: {priceMin}
                                    <input type="range" className="custom-range" id="customRange" name="points1" min="1000" max="100000" step="1000" onChange={e => setPriceMin(e.target.value)} value={priceMin} />
                                </li>
                                <li className="list-group-item">
                                    Max: {priceMax}
                                    <input type="range" className="custom-range" id="customRange" name="points1" min="1000" max="100000" step="1000" onChange={e => setPriceMax(e.target.value)} value={priceMax} />
                                </li> 
                            </ul>
                        </form>
                        <form className="mb-5">
                            <label htmlFor="customRange">FUEL TYPE</label>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="form-group">
                                        <label htmlFor="sel1">Show me: { fuel }</label>
                                        <select className="form-control" id="sel1" value={fuel} onChange={e => setFuel(e.target.value)}>
                                            <option>All Fuel Types</option>
                                            <option>Petrol</option>
                                            <option>Diesel</option>
                                            <option>Hybrid</option>
                                            <option>Electric</option>
                                        </select>
                                    </div>
                                </li> 
                            </ul>
                        </form>
                        <button type="button" className="btn btn-outline-primary">Update Filter</button>
                    </div>
                </div>
            </section>
            
        </main>
    );
}

export default withRouter(Listings);
