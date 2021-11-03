import React, { useEffect, useState } from "react";
import ManageOrder from "../ManageOrder/ManageOrder";

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        // load order data
        fetch("http://localhost:5000/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orders]);

    return (
        <div className="p-4" style={{ minHeight: "600px" }}>
            <div className="container">
                <h1 className="bg-light pb-4">
                    Admin <span className="text-warning">DashBoard</span>
                </h1>
            </div>
            <div>
                {orders.map((order) => (
                    <ManageOrder key={order._id} order={order}></ManageOrder>
                ))}
            </div>
        </div>
    );
};

export default ManageOrders;
