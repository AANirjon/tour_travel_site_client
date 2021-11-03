import React from "react";
import Feedbacks from "../Feedbacks/Feedbacks";

const About = () => {
    return (
        <div className="text-start">
            <div className="img-container">
                <img
                    className="w-100"
                    src="https://i.ibb.co/p1F0766/bd-ban.png"
                    alt=""
                />
                <div className="content ps-3">
                    <h1>An award winning tour operator in Bangladesh!</h1>
                </div>
            </div>
            <Feedbacks/>
        </div>
    );
};

export default About;
