import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const UpdatePack = () => {
    const [info, setInfo] = useState({});
    const { updateId } = useParams();
    const { register, handleSubmit } = useForm();
    const url = `http://localhost:5000/Packages/${updateId}`;

    // load defalut values
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setInfo(data));
    }, []);
    const { title, img, description, time, price, type } = info || {};
    const onSubmit = (data) => {
        console.log(data);
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((updateData) => {
                if (updateData.modifiedCount > 0) {
                    alert("Document updated!");
                }
            });
    };
    return (
        <div className="container mt-5">
            <h1>Update Package</h1>
            <div className="p-5 w-75 mx-auto">
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="form-control mt-3"
                        placeholder="Tour title"
                        defaultValue={title}
                        {...register("title", { required: true })}
                    />

                    <input
                        className="form-control mt-3"
                        placeholder="Image url"
                        defaultValue={img}
                        {...register("img", { required: true })}
                    />

                    <input
                        className="form-control mt-3"
                        placeholder="Price"
                        defaultValue={price}
                        {...register("price", { required: true })}
                    />

                    <input
                        className="form-control mt-3"
                        placeholder="Tour time"
                        defaultValue={time}
                        {...register("time", { required: true })}
                    />

                    <input
                        className="form-control mt-3"
                        placeholder="Tour type"
                        defaultValue={type}
                        {...register("type", { required: true })}
                    />

                    <textarea
                        className="form-control mt-3"
                        placeholder="Description"
                        {...register("description", { required: true })}
                        defaultValue={description}
                    ></textarea>

                    <input
                        className="btn btn-primary mt-3"
                        type="submit"
                        value="Update"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdatePack;
