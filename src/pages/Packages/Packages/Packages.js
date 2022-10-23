import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Package from "../Package/Package";

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch("https://ahnaf-tourism.herokuapp.com/packages")
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, [packages]);
    if (!packages.length) {
        return (
            <div className="p-5" style={{ minHeight: "600px" }}>
                <Spinner animation="border" variant="secondary" />
            </div>
        );
    } else {
        return (
            <div className="bg-dark">
                <div className="img-container">
                    <img
                        className="w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfeYBQdRG9xnPDRhe7YapB1hDTVp5QCylAmQ&usqp=CAU"
                        alt=""
                    />
                    <div className="content">
                        <h3>
                            “The world is a book and those who do not travel
                            read only one page.” <br /> ~ Saint Augustine
                        </h3>
                    </div>
                </div>
                <div className="container">
                    <h1 className="text-light py-3 text-light">
                        <u>Tour</u>{" "}
                        <span className="text-primary">Packages</span>
                    </h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {packages.map((pack) => (
                            <Package key={pack._id} package={pack}></Package>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default Packages;
