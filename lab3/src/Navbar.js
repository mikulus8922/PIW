import "./Navbar.css"
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-text">
                Navigation bar
            </div>
            <div className="navbar-links">
                <NavLink to="/">Search students</NavLink>
                <NavLink to="/addStudentForm">New student form</NavLink>
            </div>
        </div>
    );
  }
  
  export default Navbar;
  