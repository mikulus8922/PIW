import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase/init";
import { logInWithGoogle } from "./firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


function LoginWithGoogle() {


    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
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
        <button onClick={logInWithGoogle}>
            Login with Google
        </button>
        <br/>
    </div>
    );
}
export default LoginWithGoogle;
