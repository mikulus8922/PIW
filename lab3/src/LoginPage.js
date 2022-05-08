import { useState, useContext } from "react";
import React from "react";
import Navbar from "./Navbar";
import "./LoginPage.css"
import UserContext from "./Contexts/UserContext";
import UserProvider from "./Contexts/UserProvider";

function LoginPage(props) {
    const {setUserData, userData} = props;

    const [nameLogin, setNameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const [emailRegister, setEmailRegister] = useState("");
    const [nameRegister, setNameRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");

    const {login, register} = React.useContext(UserContext);

    function handleLoginSubmit(e) {
        e.preventDefault();

        
        const foundUser = userData.find(user => (user.password === passwordLogin && user.username === nameLogin))
        if (foundUser != null) {
            login(foundUser.email, nameLogin, passwordLogin);
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
    }


    return(
        <>
        <Navbar/>
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
            </div>

        </div>
        </>
    )
}

export default LoginPage;