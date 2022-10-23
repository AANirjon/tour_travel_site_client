import React from "react";
import { Link } from "react-router-dom";
import "./BlogIntro.css";

const BlogIntro = () => {
    return (
        <div className="container my-5 text-white">
            <div className="img-blog shadow">
                <img
                    className="rounded"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFS4SypZZSq5XUb_j4AomkM0z0UI_ju9Pn7DdAnm9uqCXAIKYAL28Eah1vV76YcUIlTLk&usqp=CAU"
                    alt=""
                />
                <div className="content-blog ms-5 text-start">
                    <h1 className="">
                        YOUR&nbsp;
                        <span className="text-colour">
                            PERFECT <br /> TOUR
                        </span>
                        &nbsp;EXPRRIENCE
                    </h1>
                    <p className="fs-4 mb-4">Activities and accommodations</p>
                    <Link to="/blogs">
                        <button className="btn btn-warning mb-md-5">
                            Read more
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogIntro;
