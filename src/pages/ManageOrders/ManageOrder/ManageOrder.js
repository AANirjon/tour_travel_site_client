import React, { useEffect, useState } from "react";

const ManageOrder = (props) => {
    const [singleOrder, setSingleOrder] = useState({});
    const { _id, email, package_id, district } = props.order || {};
    const url = `https://protected-hamlet-47437.herokuapp.com/order/${package_id}`; 

    // Load order
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setSingleOrder(data));
    }, []);

    // delete order
    const cancelOrder = (id) => {
        const proceed = window.confirm("Is want to delete?");
        if (proceed) {
            fetch(`https://protected-hamlet-47437.herokuapp.com/orders/delete/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
    };
    console.log(singleOrder)
    const { title, img } = singleOrder || {};
    return (
        <div className="container mb-5 w-75">
            <div className="mx-5 row g-2">
                <div className=" col-12 col-md-3 ">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className=" col-12 col-md-9">
                    <h5 className="ps-2 text-start">{title}</h5>
                    <div className="d-flex flex-md-row flex-column justify-content-evely">
                        <span>{email}</span>
                        <span>From {district}</span>
                    </div>
                    <div className="text-end">
                        <button
                            onClick={() => cancelOrder(_id)}
                            className="btn btn-danger"
                        >
                            X cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;
