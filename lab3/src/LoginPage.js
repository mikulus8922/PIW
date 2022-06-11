import { useState, useContext } from "react";
import React from "react";
import Navbar from "./Navbar";
import "./LoginPage.css"
import { useNavigate } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import UserProvider from "./Contexts/UserProvider";
import LoginWithGoogle from "./LoginWithGoogle";
import LoginWithGithub from "./LoginWithGithub";
import { auth } from "./firebase/init";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { async } from "@firebase/util";




function LoginPage(props) {
    const {setUserData, userData} = props;

    const [nameLogin, setNameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const [emailRegister, setEmailRegister] = useState("");
    const [nameRegister, setNameRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");

    const {login, register} = React.useContext(UserContext);

    
    let navigate = useNavigate();


    const signInWithEmail = async (email, password) => {
        console.log(email, password);
        const userCredential = await createUserWithEmailAndPassword
        (auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(email, password);
          navigate("/studentSearch");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }



    const logInWithEmail = async (email, password) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/studentSearch");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }



    function handleLoginSubmit(e) {
        e.preventDefault();

        
        const foundUser = userData.find(user => (user.password === passwordLogin && user.username === nameLogin))
        if (foundUser != null) {
            login(foundUser.email, nameLogin, passwordLogin);
            navigate("/studentSearch");
        }
        
    }
    function handleRegisterSubmit(e) {
        e.preventDefault();

        if (emailRegister === '' || nameRegister === '' || passwordRegister === '')
            return;


        console.log(userData);
        if (userData.find(user => user.email === emailRegister) != null || userData.find(user => user.username === nameRegister))
            return;
        
        const id = userData.length + 1;

        setUserData(userData.concat({
            id: id,
            email: emailRegister,
            username: nameRegister,
            password: passwordRegister
        }))
        
        login(emailRegister, nameRegister, passwordRegister);
        navigate("/studentSearch");
    }

    function signInWithMail(e) {
        e.preventDefault();

        if (emailRegister === '' || passwordRegister === '')
            return;

        signInWithEmail(emailRegister, passwordRegister);
        
    }


    function loginWithMail(e) {
        e.preventDefault();

        if (emailRegister === '' || passwordRegister === '')
            return;

        logInWithEmail(emailRegister, passwordRegister);
    }


    return(
        <>
        <div className="info-text"> Please log in
        <LoginWithGoogle/>
        <LoginWithGithub/>
        </div>
        <div className="login-page">
            <div className="login-column">
                <div className="login-form">
                    <div className="add-div">
                        <div>Username:</div>
                        <input onChange={event => setNameLogin(event.target.value)} />
                    </div>
                    <div className="add-div">
                        <div>Password:</div>
                        <input onChange={event => setPasswordLogin(event.target.value)} />
                    </div>
                </div>
                
                <form className="button-login" onSubmit={handleLoginSubmit}>
                    <button type="submit">Login</button>
                </form>
            </div>

            <div className="register-column">
                <div className="register-form">
                    <div className="add-div">
                        <div>Email:</div>
                        <input onChange={event => setEmailRegister(event.target.value)} />
                    </div>
                    <div className="add-div">
                        <div>Username:</div>
                        <input onChange={event => setNameRegister(event.target.value)} />
                    </div>
                    <div className="add-div">
                        <div>Password:</div>
                        <input onChange={event => setPasswordRegister(event.target.value)} />
                    </div>
                </div>

                <form className="button-register" onSubmit={handleRegisterSubmit}>
                    <button type="submit">Register</button>
                </form>

                <form className="button-login" onSubmit={signInWithMail}>
                    <button type="submit">register with mail/password</button>
                </form>

                <form className="button-login" onSubmit={loginWithMail}>
                    <button type="submit">login with mail/password</button>
                </form>
            </div>

        </div>
        </>
    )
}

export default LoginPage;