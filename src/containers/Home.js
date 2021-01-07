import React from 'react';
import { withRouter } from "react-router-dom";
import '../css/Home.css';

// Card 1 with props
function Card1(props) {
    return (
        <section className="card col-md-4 border-0">
            { /* SPAN - ICON */ }
            <span style={{ fontSize: "4rem" }}>
                { /* ICON NAME */ }
                {props.icon}
            </span>
            { /* CARD-BODY */ }
            <div className="card-body">
                { /* TITLE */ }
                <h4>{props.title}</h4>
                { /* DESCRIPTION */ }
                <p>{props.description}</p> 
            </div>
        </section>
    );
}
// Card 2 without props
function Card2() {
    return (
        <section className="col-md-4 media pb-3">
            { /* SPAN - ICON */ }
            <span
                style={{ fontSize: "4rem" }}
                className='fas fa-truck-monster border p-3 mr-2'
            >
            </span>
            { /* CARD-BODY */ }
            <div className="media-body">
                { /* TITLE / DESCRIPTION */ }
                <h4>Choose Express or Regular Delivery</h4>
                <h4> - Its On Us -</h4>
            </div>
        </section>
        );
}
// Card 3 without props
function Card3() {
    return (
        <section className="card col-md-3 p-0 border-0 mb-3">
            { /* IMAGE */ }
            <img
                src="https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                alt="Chicago"
                style={{ width: "100%" }}
            />
            { /* CARD-BODY */ }
            <div className="card-body bg-light border">
                { /* TITLE */ }
                <h4>Ford Mustang</h4>
                { /* DESCRIPTIONS */ }
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
                        <button type="button" className="btn btn-outline-danger">Buy Now</button>
                    </li> 
                </ul>
            </div>
        </section>
    );
}
// Card 4 with props
function Card4(props) {
    return (
        <section className="media">
            { /* SPAN - ICON */ }
            <i
                style={{ fontSize: "2rem", width: "15%", color: "purple" }}
                className={`${props.icon} text-center`}
            >
            </i>
            { /* CARD-BODY */ }
            <div className="media-body text-left">
                { /* TITLE */ }
                <h4>{props.title}</h4>
                { /* DESCRIPTION */ }
                <p>{props.description}</p>
            </div>
        </section>
    );
}
// Card 5 with props
function Card5() {
    return (
        <div className="w-75 h-100 m-auto">
            <section className="media d-flex flex-wrap align-content-center justify-content-center">
                <img src="https://images.unsplash.com/photo-1542178243-bc20204b769f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Chicago" width="400" height="400" />
                <div className="media-body text-left p-md-5 m-3 align-self-center">
                    <h4>Jhon Kalun</h4>
                    <p>Integer tortor bibendum est faucibus gravid aliquam nulla lectus lacinia eget lorem acdua eros pharetral interdum quisque convallis nula dpsum val mualiq amet consectetur adipisicing sed eiusmod tem pory.</p>
                </div>
            </section>
        </div>
    );
}
// Card 6 with props
function Card6() {
    return (
        <div className="card ml-3 border-0" style={{ width: "300px", display: "inline-block" }}>
            <img className="card-img-top" src="https://images.unsplash.com/photo-1585390062625-2786fecfef01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Car" />
            <div className="card-body text-left">
                <h4 className="card-title">Porsche lunches new models</h4>
                <p><small>OCTOBER 20,2021</small></p>
                <p className="card-text">Integer tortor bibendum est faucibus gravida aliquam nulla lectus lacinia eget lorem acdua eros pharetral interdum quisque convallis nula dpsum val mualiq amet consectetur adipisicing sed eiusmod tem pory.</p>
            </div>
        </div>
    );
}
// Home - Main function
function Home() {
    return (
        <>
            <main className="Home">
                { /* LUXURY AUTO SHOP - HEADER */ }
                <header className="pt-5 d-flex flex-wrap align-content-center justify-content-center">
                    <div>
                        <h2>Luxury Auto Shop</h2>
                        <h3>Only from the best - Porsche</h3>
                        <p>over 1,000 selections and 100 locations</p>
                    </div>
                </header>
                { /* OUR BENEFITS - Card1 - SECTION */ }
                <section className="pt-5 bg-white d-flex flex-wrap align-content-center justify-content-center">
                    <div className="Benefits">
                        { /* - CONTAINER - */ }
                        <div className="pb-5">
                            { /* TITLE */ }
                            <h3>OUR BENEFITS</h3>
                            { /* DESCRIPTION */ }
                            <p><i>Automaster Luxury Auto Shop</i></p>
                        </div>
                        { /* - CONTAINER - */ }
                        <div className="container">
                            <div className="row">
                                { /* CARD 1 */ }
                                <Card1
                                    title="Best Customer Service Ratings"
                                    icon="&#128113;"
                                    link="#"
                                    linkName="See Profile"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation"
                                /> 
                                { /* CARD 2 */}
                                <Card1
                                    title="Easy Delivery Anytime"
                                    icon="&#128650;"
                                    link="#"
                                    linkName="See Profile"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation"
                                />  
                                { /* CARD 3 */}
                                <Card1
                                    title="Over 100 Locations"
                                    icon="&#127750;"
                                    link="#"
                                    linkName="See Profile"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation"
                                />
                            </div>
                        </div>                    
                    </div>
                </section> 
                { /* HOW DOES THE AUTOMASTER RENTAL WORKS - Card2 - SECTION */ }
                <section className="HowItWorks pt-5 d-flex flex-wrap align-content-center justify-content-center">
                    { /* - CONTAINER - */ }
                    <div className="p-3">
                        { /* TITLE */ }
                        <h3>HOW DOES AUTOMASTER'S DELIVERY WORKS</h3>
                        { /* DESCRIPTION */ }
                        <p><i>Veniam quis notrud exercitation</i></p>
                    </div>
                    { /* - CONTAINER - */ }
                    <div className="container">
                        <div className="row">
                            { /* CARD 1 */}
                            <Card2/>
                            { /* CARD 2 */ }
                            <Card2/>
                            { /* CARD 3 */ }
                            <Card2/>
                        </div>
                    </div>
                </section> 
                { /* MOST POPULAR CARS - Card3 - SECTION */ }
                <section className="container-fluid py-5 bg-white flex-wrap align-content-center justify-content-center" id="about">
                    { /* - CONTAINER - */ }
                    <div className="p-5">
                        { /* TITLE */ }
                        <h3>MOST POPULAR CARS</h3>
                        { /* DESCRIPTION */ }
                        <p><i>Automaster Luxury Auto Shop</i></p>
                        { /* MORE DESCRIPTION */ }
                        <p>Amco laboris nisi ut aliquip xea comod consequt duis aute irure dolor reprehenderit voluptate velit cillum dolore fugiat lore ipsum dolor </p>
                    </div>
                    { /* - CONTAINER - */ }
                    <div className="container">
                        <div className="row justify-content-around">
                            { /* CARD 1 */}
                            <Card3/>
                            { /* CARD 2 */}
                            <Card3/>
                            { /* CARD 3 */}
                            <Card3/>
                            <Card3/>
                        </div>
                    </div>
                </section>
                { /* Autostar Rental Service With ... - Card4 - SECTION */ }
                <section className="row m-0"> 
                    <section className="col-md-6 text-left p-md-5 py-5" style={{ backgroundColor: "#f7f7f7" }}>
                    { /* - CONTAINER - */ }
                    <div className="container">
                        { /* TITLE */ }
                        <h3>Autostar Rental Service With a wide range of Vehicles</h3>
                        { /* DESCRIPTION */ }
                        <p>Amco laboris nisi ut aliquip xea comod consequt duis aute irure dolor reprehenderit voluptate velit cillum dolore fugiat lore ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt</p>
                        <p>Ut enim ad minim ven quis nostrud exercitation ulamco laboris nisi ut aliquip exl dolor in reprehenderit voluptate velit non proident sunt in culpa.</p>
                            { /* Card 1 */}
                            <Card4
                                title="Easy & Competitive Prices"
                                icon="fab fa-btc"
                                description="Faucibus gravida aliquam nulla lectus lacinia eget"
                            />
                            { /* Card 2 */}
                            <Card4
                                title="Breakdown Assistance"
                                icon="fas fa-car-crash"
                                description="Faucibus gravida aliquam nulla lectus lacinia eget"
                            /> 
                            { /* Card 3 */}
                            <Card4
                                title="24/7 Free Customer Support"
                                icon="fas fa-phone-volume"
                                description="Faucibus gravida aliquam nulla lectus lacinia eget"
                            />
                            { /* Card 4 */}
                            <Card4
                                title="Trusted Rent Service"
                                icon="far fa-handshake"
                                description="Faucibus gravida aliquam nulla lectus lacinia eget"
                            /> 
                             
                    </div>
                        </section> 
                </section>
                { /* BANNER */ }
                <div className="p-5 bg-dark text-light" style={{ fontSize: "1.5rem" }}>
                    <p>Call Today For Booking Your Next Ride <b>(800) 650 743</b> Operators available 24/7</p>
                </div>
                { /* CAROUSEL */ }
                <section className="bg-white py-5" >
                    <div id="testimonials">
                        <h3>CUTSOMER REVIEWS</h3>
                        <p><i>Automaster Luxury Auto Shop</i></p>
                    </div>
                    <div id="demo" className="carousel slide pt-5" data-ride="carousel">
                        { /* Indicators */ }
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        { /* The slideshow */ }
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Card5/> 
                            </div>
                            <div className="carousel-item">
                                <Card5/>
                            </div>
                            <div className="carousel-item">
                                <Card5/> 
                            </div>
                        </div>
                        { /* Left and right controls */ }
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="fas fa-angle-double-left"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="fas fa-angle-double-right"></span>
                        </a>
                    </div>
                </section>
                { /* CAROUSEL */}
                <section className="bg-white py-5 border-top">
                    <div className="">
                        <h3>LATEST NEWS</h3>
                        <p><i>Automaster Luxury Auto Shop</i></p>
                    </div>
                    <div id="demo1" className="carousel slide pt-5" data-ride="carousel">
                        { /* Indicators */}
                        <ul className="carousel-indicators d-none">
                            <li data-target="#demo1" data-slide-to="0" className="active"></li>
                            <li data-target="#demo1" data-slide-to="1"></li>
                            <li data-target="#demo1" data-slide-to="2"></li>
                        </ul>
                        { /* The slideshow */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div>
                                    <Card6/> 
                                    <Card6/> 
                                    <Card6/> 
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div>
                                    <Card6 />
                                    <Card6 />
                                    <Card6 />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div>
                                    <Card6 />
                                    <Card6 />
                                    <Card6 />
                                </div>
                            </div>
                        </div>
                        { /* Left and right controls */}
                        <a className="carousel-control-prev" href="#demo1" data-slide="prev">
                            <span className="fas fa-angle-double-left"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo1" data-slide="next">
                            <span className="fas fa-angle-double-right"></span>
                        </a>
                    </div>
                </section>
            </main>
        </>
        );
}

export default withRouter(Home);
