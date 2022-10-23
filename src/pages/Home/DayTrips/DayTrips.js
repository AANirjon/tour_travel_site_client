import React, { useEffect, useState } from "react";
import DayTrip from "../DayTrip/DayTrip";
import "./DayTrips.css";

const DayTrips = () => {
    const [dayTrips, setDayTrips] = useState([]);
    useEffect(() => {
        fetch("https://ahnaf-tourism.herokuapp.com/oneDayTours")
            .then((res) => res.json())
            .then((data) => setDayTrips(data));
    }, []);

    return (
        <div className="bg-home-tour">
            <h2 className="pt-2 pb-4 test">
                Best<span className="text-primary"> Weekend</span> Trips
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
