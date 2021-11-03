import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="img-container">
            <img className="w-100" src="https://i.ibb.co/K5CnwKk/Template-for-web-page-with-404-error-Trendy-fun-character-design-in-esp10-Page-is-lost-and-not-found.jpg" alt="not_Found" />
            <div className="content mx-auto">
                <hr />
                <Link to="/home"><button className="btn btn-warning">Go back to Home</button></Link>
                
            </div>
        </div>
    );
};

export default NotFound;