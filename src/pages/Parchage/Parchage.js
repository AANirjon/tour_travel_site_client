import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Parchage = () => {
    const [isclickd, setIsClicked] = useState(false);
    const [tourPack, setTourPack] = useState({});
    const { user } = useAuth();
    const { orderId } = useParams();
    console.log("orderid",orderId)
    // load single service for banner
    const url = `https://ahnaf-tourism.herokuapp.com/Packages/${orderId}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTourPack(data));
    }, []);

    const { _id, img, title, time, type, description } = tourPack || {};
    // from submit handler
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axios.post("https://ahnaf-tourism.herokuapp.com/orders", data).then((res) => {
            if (res?.data?.acknowledged) {
                alert("Welcome To trip!");
                reset();
                setIsClicked(true);
            }
        });
    };
    return (
        <div className="mt-5 pt-4 container">
            <div className="container">
                <div className="card">
                    <div className="img-container">
                        <img className="img-fluid" src={img} alt="" />
                        <div className="content">
                            <h3>{title}</h3>
                            <h6>
                                {time} Day &nbsp;{type}
                            </h6>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="text-start px-3">
                            <span className="fw-bold">Details: </span>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <h1 className="bg-light">
                Purchase Your <span className="text-danger">Choice</span>
            </h1>
            <p>{user.email}</p>
            <form
                className="row text-start w-75 mx-auto p-2"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-3">
                    <label htmlFor="Input" className="form-label">
                        Product_id
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="Input"
                        placeholder="Enter name"
                        defaultValue={_id}
                        {...register("package_id", { required: true })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Input1" className="form-label">
                        Your name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="Input1"
                        placeholder="Enter name"
                        defaultValue={user.displayName}
                        {...register("name")}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Input2" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="Input2"
                        placeholder="name@example.com"
                        defaultValue={user.email}
                        {...register("email")}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Input4" className="form-label">
                        You from
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="Input4"
                        placeholder="District"
                        {...register("district")}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Input3" className="form-label">
                        Location
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="Input3"
                        placeholder="Location"
                        {...register("location")}
                    />
                </div>

                <div className="mb-3">
                    {isclickd ? (
                        <input
                            className="btn btn-warning w-100"
                            disabled
                            value="Purchase"
                        />
                    ) : (
                        <input
                            className="btn btn-warning w-100"
                            type="submit"
                            value="Purchase"
                        />
                    )}
                </div>
            </form>
        </div>
    );
};

export default Parchage;
