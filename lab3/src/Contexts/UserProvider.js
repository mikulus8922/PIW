import React from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
    const[user, setUser] = React.useState({email: '', login: '', password: '', auth: false});

    const login = (email, login, password) => {
        setUser((user) => ({
            email: email,
            login: login,
            password: password,
            auth: true
        }))
    } 

    const logout = () => {
        setUser((user) => ({
            email: '',
            login: '',
            password: '',
            auth: false
        }))        
    }


    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  }

  export default UserProvider;