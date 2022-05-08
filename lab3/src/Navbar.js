import "./Navbar.css"
import { NavLink } from "react-router-dom";
import UserContext from './Contexts/UserContext';
import React from "react";

function Navbar() {

    const { user, logout } = React.useContext(UserContext);
    function greetingText() {

        return user.auth ? `Hello ${user.login}` : "Please log in";
    }

    function handleSubmit(e) {
        e.preventDefault();
        logout();
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
  