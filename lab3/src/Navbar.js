import "./Navbar.css"
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from './Contexts/UserContext';
import React from "react";

function Navbar() {
    let navigate = useNavigate();
    const { user, logout } = React.useContext(UserContext);
    function greetingText() {
        if (!user.auth)
            navigate("/");
        return `Hello ${user.login}`;
    }

    
    function handleSubmit(e) {
        e.preventDefault();
        logout();
        navigate("/");
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
  