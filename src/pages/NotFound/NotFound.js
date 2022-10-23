import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="img-container">
            <img className="w-100" src="https://image.shutterstock.com/image-vector/neon-sign-404-error-page-260nw-1044266959.jpg" alt="not_Found" />
            <div className="content mx-auto">
                <hr />
                <Link to="/home"><button className="btn btn-warning">Go back to Home</button></Link>
                
            </div>
        </div>
    );
};

export default NotFound;