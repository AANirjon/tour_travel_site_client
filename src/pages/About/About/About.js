import React from "react";
import Feedbacks from "../Feedbacks/Feedbacks";

const About = () => {
    return (
        <div className="text-start">
            <div className="img-container">
                <img
                    className="w-100 h-25"
                    src="https://img.freepik.com/free-photo/female-tourists-hand-have-happy-travel-map_1150-7411.jpg?w=2000"
                    alt=""
                />
                <div className="content ps-3">
                    <h1>Best travel agency of Bangladesh</h1>
                </div>
            </div>
            <Feedbacks/>
        </div>
    );
};

export default About;
