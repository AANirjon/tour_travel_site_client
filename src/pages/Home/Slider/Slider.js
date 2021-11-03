import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/8Nhz4s2/slide-1.png"
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>Make Tour Enjoyable!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/HnY91W6/slide-2.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Spend Spacial Time</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/QrTnKVQ/slide-3.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Advanture Friendly</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/qnmxNNc/slide-4.png"
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h3>Best Guided</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/b5zszgf/slide-6.png"
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
