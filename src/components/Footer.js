import React from 'react';
import { Link } from "react-router-dom";
import '../css/Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <footer className="container-fluid px-3 pt-3 text-justify">
                <div className="row pt-5">
                    { /* - AUTOMASTER - */ }
                    <section className="col-md-3 px-lg-5">
                        <h5>- Automaster -</h5>
                        <p>Copyright &copy; 2021 Kayamba React Theme. All Rights Reserved.</p>
                    </section>
                    { /* USEFUL LINK */ }
                    <div className="col-md-3">
                        <h5>USEFUL LINKS</h5>
                        <h6><Link to="/about">About us</Link></h6>
                        <h6><Link to="/">Our Services</Link></h6>
                        <h6><Link to="/">Information</Link></h6>
                        <h6><Link to="/">Privacy Policy</Link></h6>
                    </div>
                    { /* OUR TERMS */ }
                    <div className="col-md-3">
                        <h5>OUR TERMS</h5>
                        <h6><Link to="/">Support</Link></h6>
                        <h6><Link to="/contact">Contact</Link></h6>
                        <h6><Link to="/">Typography</Link></h6>
                        <h6><Link to="/">FAQ</Link></h6>
                    </div>
                    { /* SHOWROOM */ }
                    <address className="col-md-3 px-lg-5">
                        <h5>SHOWROOM</h5>
                        <h6>USA, Automaster, Lithonia GA 30058</h6>
                        <h6>Phone: +243 888-88-8888</h6>
                        <h6>Email: info@yebana.com</h6>
                        <h6>&copy; 2020 Automaster LTD</h6>
                    </address>                    
                    { /* COPYRIGHT */ }
                    <div className="col-md-12 border-top pt-3 mt-lg-5 text-center">
                        <p>Copyright &copy; 2018 WordPress Theme. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
        );
}

export default Footer;
