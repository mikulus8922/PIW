import "./Navbar.css"
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from './Contexts/UserContext';
import React from "react";
import { logout } from './firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase/init'

function Navbar() {
    let navigate = useNavigate();
    const { user, logoutN } = React.useContext(UserContext);
    let [userG , xd ,xd2] = useAuthState(auth);

    console.log(userG, xd, xd2);
    function greetingText() {
        if (!user.auth)
            navigate("/");
        
        let name = '';
        try {
            if (user.login !== null && user.login !== '') {
                name = user.login;
            }
        } catch {

        }
        try {
            if (userG.displayName !== null && userG.displayName !== '') {
                name = userG.displayName;
                user = ''
            }
                
        } catch {

        }
        try {
            if (userG.username != null && userG.username != '') {
                name = userG.username;
                user = ''
            }
                
        } catch {

        }
        try {
            if (userG.email != null && userG.email != '') {
                name = userG.email;
                user = ''
            }
                
        } catch {

        }



        return `Hello ${name}`;
    }

    
    function handleSubmit(e) {
        e.preventDefault();
        try {
            logout();
        } catch {

        };
        try {
            logoutN();
        } catch {

        };
        navigate('/');
    }

    return (
        <div className="navbar">
            <div className="navbar-text">
                {greetingText()}
            </div>
            <div className="navbar-links">
                <NavLink to="/studentSearch">Search students</NavLink>
                <NavLink to="/addStudentForm">New student form</NavLink>
                <NavLink to="/groupSearch">Search groups</NavLink>
                <NavLink to="/addGroupForm">New group form</NavLink>
            </div>
            <form className="button-logout" onSubmit={handleSubmit}>
                    <button type="submit">Log out</button>
            </form>
        </div>
    );
  }
  
  export default Navbar;
  