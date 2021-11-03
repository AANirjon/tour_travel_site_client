import React, { useEffect, useState } from "react";
import DayTrip from "../DayTrip/DayTrip";
import "./DayTrips.css";

const DayTrips = () => {
    const [dayTrips, setDayTrips] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/oneDayTours")
            .then((res) => res.json())
            .then((data) => setDayTrips(data));
    }, []);

    return (
        <div className="bg-home-tour">
            <h2 className="pt-2 pb-4">
                Best<span className="text-success"> Weekend</span> Trips
            </h2>
            <div className="container pb-3">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {dayTrips.map((dayTrip) => (
                        <DayTrip key={dayTrip._id} dayTrip={dayTrip}></DayTrip>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DayTrips;
