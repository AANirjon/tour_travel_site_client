import React from "react";
import BlogIntro from "../BlogIntro/BlogIntro";
import DayTrips from "../DayTrips/DayTrips";
import EasyTour from "../EasyTour/EasyTour";
import Facilities from "../Facilities/Facilities";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <DayTrips />
            <Facilities />
            <EasyTour />
            <BlogIntro />
        </div>
    );
};

export default Home;
