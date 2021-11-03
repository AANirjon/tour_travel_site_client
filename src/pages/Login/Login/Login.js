import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

import "./Login.css";

const Login = () => {
    const { signInGoogle, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    // redirect previous route after login
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then((result) => {
                setIsLoading(true);
                history.push(redirect_uri);
                setUser(result.user);
            })
            .catch((error) => console.log(error.message))
            .finally(() => setIsLoading(false));
    };
    return (
        <div className="login">
            <div className="bg-dark rounded m-5">
                <h2 className="p-3 text-light">Please Login</h2>
                <div className="login-box m-5 p-5">
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-primary"
                    >
                        <i className="fab fa-google" />
                        &nbsp; Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
