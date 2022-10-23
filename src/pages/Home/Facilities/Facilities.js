import React from "react";
import "./Facilities.css";

const Facilities = () => {
    return (
        <div className="bg-light">
            <h2 className="p-2 rounded text-color">
                Our Facilities
            </h2>
            <div className="container">
                <div className="row p-4 border rounded c-bg">
                    <div className="col-sm-12 col-md-6 p-1 m-0">
                        <div className="img-container">
                            <img
                                className="img-fluid rounded"
                                src="https://i.ibb.co/WtYz60H/f-offers.jpg"
                                alt=""
                            />
                            <div className="content">
                                <h2>Best Offers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-1 m-0 row">
                        <div className="row col-12 p-1 m-0">
                            <div className="col-6 pe-1 m-0">
                                <div className="img-container">
                                    <img
                                        className="img-fluid rounded"
                                        src="https://i.ibb.co/V2DTKTx/f-tour.jpg"
                                        alt=""
                                    />
                                    <div className="content">
                                        <h5>Tour Events</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ps-1  m-0">
                                <div className="img-container">
                                    <img
                                        className="img-fluid rounded"
                                        src="https://i.ibb.co/x3jSMHk/f-hotels.jpg"
                                        alt=""
                                    />
                                    <div className="content">
                                        <h5>Classic Hotels</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-2 m-0">
                            <div className="img-container">
                                <img
                                    className="img-fluid rounded"
                                    src="https://i.ibb.co/PjkKFJF/f-restaurant.jpg"
                                    alt=""
                                />
                                <div className="content">
                                    <h3>Testie Restaurants</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;
