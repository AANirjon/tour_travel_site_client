import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Package = (props) => {
    const { user } = useAuth();

    const { title, img, description, time, price, type, _id } =
        props.package || {};

    // Package delete handler
    const deletePackage = (id) => {
        const proceed = window.confirm("Is want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/packages/delete/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
    };

    return (
        <div className="col text-start">
            <div className="card h-100">
                <img src={img} className="img-fluid rounded-top" alt="" />

                <div className="card-body">
                    <h5 className="card-title m-0">{title}</h5>
                    <div className="d-flex mt-1 justify-content-between align-items-center">
                        <h6 className="m-0 text-info">
                            <small>Duration: {time} Day</small>
                            <br />
                            <small>About: {type}</small>
                        </h6>
                        <h4 className="m-0">
                            <span className="text-success">
                                <u>Price: ${price}</u>
                            </span>
                        </h4>
                    </div>
                    <p className="card-text m-0">
                        <small>{description.slice(0, 140)}...</small>
                    </p>
                </div>

                <div className="px-3 pb-2 d-flex justify-content-evenly align-items-center">
                    {user?.email && (
                        <Link to={`/updatePackage/${_id}`}>
                            <button className="btn-sm btn-primary">
                                Update Info
                            </button>
                        </Link>
                    )}

                    <Link to={`/package/${_id}`}>
                        <button className="btn-sm btn-warning">Book now</button>
                    </Link>
                    {user?.email && (
                        <button
                            onClick={() => deletePackage(_id)}
                            className="btn-sm btn-danger"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Package;
