import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    // reload redirect
    if (isLoading) {
        return (
            <div style={{ height: "600px" }} className="pt-5 mt-5">
                <Spinner animation="grow" />
                <h5>Loading..</h5>
            </div>
        );
    } else {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    )
                }
            />
        );
    }
};

export default PrivateRoute;
