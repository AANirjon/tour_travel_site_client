// import axios from "axios";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddNewPack = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        axios.post("http://localhost:5000/packages", data).then((res) => {
            if (res?.data?.acknowledged) {
                alert("Your Plan added successful. Thank you!");
                reset();
            }
        });
    };

    return (
        <div className="container mt-5 py-5 w-50 mx-auto">
            <h2 className="text-primary">Add Your New Tour Plan!</h2>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="form-control mt-3"
                    placeholder="Tour title"
                    {...register("title", { required: true })}
                />
                {errors.title && <span>This field is required</span>}

                <input
                    className="form-control mt-3"
                    placeholder="Image url"
                    {...register("img", { required: true })}
                />
                {errors.img && <span>This field is required</span>}

                <input
                    className="form-control mt-3"
                    placeholder="Price"
                    {...register("price", { required: true })}
                />
                {errors.price && <span>This field is required</span>}

                <input
                    className="form-control mt-3"
                    placeholder="Tour time"
                    {...register("time", { required: true })}
                />
                {errors.time && <span>This field is required</span>}

                <input
                    className="form-control mt-3"
                    placeholder="Tour type"
                    {...register("type", { required: true })}
                />
                {errors.type && <span>This field is required</span>}

                <textarea
                    className="form-control mt-3"
                    placeholder="Description"
                    {...register("description", { required: true })}
                ></textarea>
                {errors.description && <span>This field is required</span>}

                <input
                    className="btn btn-primary mt-3"
                    type="submit"
                    value="Add"
                />
            </form>
        </div>
    );
};

export default AddNewPack;
