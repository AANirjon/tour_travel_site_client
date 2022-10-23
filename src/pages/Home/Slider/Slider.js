import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1xXMm7nCl1I1TX-XGT1Qmxa8Lp0CFjQOQw&usqp=CAU"
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>Make Tour Enjoyable!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZeVPU_6qlTDaDKFd2FBmT72uwAlT7ZA9xzA&usqp=CAU"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Spend Spacial Time</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1iwKvnTx7FxHKfcjLPLXvilcT_PcRrktNg&usqp=CAU"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Advanture Friendly</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprIpeeoREuI-XMB4pj9OaLRmIh7xQJDSTkQ&usqp=CAU"
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h3>Best Guided</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQ1Z9dSRFf86Tqn43PsuzYkTBVwIZZOdt4Q&usqp=CAU"
                    alt="Fifth slide"
                />

                <Carousel.Caption>
                    <h3>Make Every Tour Cinematic!</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
