import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase/init";
import { logInWithGithub } from "./firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


function LoginWithGithub() {


    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);
        if (loading)
            return
        if (user)
            navigate("/studentSearch");
        if(error)
            console.error({error});
        }, [user, loading]);

    return (
    <div className="login">
        <br/>
        <button onClick={logInWithGithub}>
            Login with Github
        </button>
        <br/>
    </div>
    );
}
export default LoginWithGithub;
