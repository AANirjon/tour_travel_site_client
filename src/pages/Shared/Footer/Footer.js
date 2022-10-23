import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <div className="container">
                <div className="pt-2 anchor-s row justify-content-start align-items-center text-start">
                    <div className="col-md-4 col-12">
                        <h5>NEED HELP?</h5>
                        <p className="m-0 text-warning">
                            <i className="fas fa-blender-phone"></i> +323456789
                        </p>
                        <p className="m-0 text-warning">
                            <i className="far fa-envelope"></i>{" "}
                            tourholiday@help.com
                        </p>
                    </div>

                    <div className="col-md-4 col-12">
                        <h5>ABOUT</h5>
                        <p className="m-0">
                            <Link to="/about">About us</Link>
                        </p>
                        <p className="m-0">
                            <Link to="/login">Login</Link>
                        </p>
                        <p className="m-0"><Link to="/blogs#faq">FAQ</Link></p>
                        
                        <p className="m-0">Terms and conditions</p>
                    </div>
                    <div className="col-md-4 col-12">
                        <h5>DISCOVER</h5>
                        <p className="m-0">
                            <Link to="/blogs">Community blog</Link>
                        </p>
                        <p className="m-0">
                            <Link to="/packages">Tour list</Link>
                        </p>
                        <p className="m-0">Gallery</p>
                    </div>
                </div>
                <div>
                    <hr />
                    <p className="icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-youtube"></i>
                    </p>
                    <p className="text-secondary mb-0 pb-3">
                        <small>&copy; Tour holiday 2021</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
