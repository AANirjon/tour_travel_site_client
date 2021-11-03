import React from "react";

const EasyTour = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-warning mb-0">
                PLAN<span className="text-dark"> YOUR TOUR </span>EASLY
            </h2>
            <p className="mt-0 mb-4 fs-5">
                Planning a trip overseas, whether long or short,It will also
                give you easy access to your embassy in the country you're
                visiting.
            </p>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col">
                    <img
                        className="img-fluid"
                        src="http://www.ansonika.com/citytours/img/adventure_icon_1.svg"
                        alt=""
                    />
                    <h5>Itineraries studied in detail</h5>
                    <p>
                        <small>
                            A detailed plan for a journey, especially a list of
                            places to visit; plan of travel. a line of travel;
                            route. an account of a journey; record of travel.
                        </small>
                    </p>
                </div>

                <div className="col">
                    <img
                        className="img-fluid"
                        src="http://www.ansonika.com/citytours/img/adventure_icon_3.svg"
                        alt=""
                    />
                    <h5>Everything organized</h5>
                    <p>
                        <small>
                            Organized tours are great for those who don't have
                            the time, or the interest, in planning every detail
                            of a trip.
                        </small>
                    </p>
                </div>
                <div className="col">
                    <img
                        className="img-fluid"
                        src="http://www.ansonika.com/citytours/img/adventure_icon_2.svg"
                        alt=""
                    />
                    <h5>Room and food included</h5>
                    <p>
                        <small>
                            Inclusive Tour means a journey by air organized by a
                            tour operator, that includes arranged other
                            transportations and hotel.
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EasyTour;
