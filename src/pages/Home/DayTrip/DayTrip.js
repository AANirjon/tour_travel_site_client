import React from "react";
import { Link } from "react-router-dom";

const DayTrip = (props) => {
    const { title, img, description, time, price, type, _id } = props.dayTrip || {};
    return (
        <div className="col text-start">
            <div className="card h-100">
                <div className="tour-container">
                    <img src={img} className="img-fluid rounded-top" alt="" />
                    <div className="tour-content ps-2">
                        <h5>{title}</h5>
                    </div>
                </div>
                <div className="card-body">
                    <h6 className="d-flex mt-1 justify-content-between">
                        <span>Duration: {time} Day</span>
                        <span>Type: {type}</span>
                    </h6>
                    <p className="card-text m-0">
                        {description.slice(0, 80)}...
                    </p>
                </div>

                <div className="px-3 pb-2 d-flex justify-content-between align-items-center">
                    <h5 className="m-0">
                        <span className="text-danger">
                            <u>Price: ${price}</u>
                        </span>
                    </h5>
                    <Link to={`/package/${_id}`}>
                        <button className="btn btn-warning rounded-pill">
                            Book now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DayTrip;
