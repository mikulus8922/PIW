import StudentSearch from './StudentSearch';
import AddStudentForm from "./AddStudentForm.js";
import GroupSearch from "./GroupSearch";
import AddGroupForm from "./AddGroupForm";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoginPage from './LoginPage';
import UserContext from './Contexts/UserContext';
import UserProvider from './Contexts/UserProvider';
import StudentInfo from './StudentInfo';

function App() {
    const [userData, setUserData] = useState([]);
    const [studentData, setStudentData] = useState([]);
    const [groupData, setGroupData] = useState([]);
    const { user } = React.useContext(UserContext);

    useEffect(() => {
        axios.get("http://localhost:3000/data/userData.json")
        .then(res => {
            const userData = res.data;
            setUserData(userData);
        });
    }, []);


    useEffect(() => {
        axios.get("http://localhost:3000/data/studentData.json")
        .then(res => {
            const studentData = res.data;
            setStudentData(studentData);
        });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3000/data/groupData.json")
        .then(res => {
            const groupData = res.data;
            setGroupData(groupData);
        });
    }, []);

    function is_logged() {
        return user.auth ? true : false;
    }

    return (
        <UserProvider>
        <Router>
            <Routes>

                <Route path="/" element={<LoginPage userData={userData} setUserData={setUserData}></LoginPage>}>
                </Route>
                <Route path="/studentSearch" element={<StudentSearch studentData={studentData} setStudentData={setStudentData}/>}>
                </Route>
                <Route path="/addStudentForm" element={<AddStudentForm studentData={studentData} setStudentData={setStudentData}/>}>
                </Route>

                <Route path="/groupSearch" element={<GroupSearch groupData={groupData} setGroupData={setGroupData}/>}>
                </Route>

                <Route path="/addGroupForm" element={<AddGroupForm groupData={groupData} setGroupData={setGroupData}/>}>
                </Route>

                <Route path="/studentInfo" element={<StudentInfo />}>
                </Route>
            </Routes>
        </Router>
        </UserProvider>
    );
}

export default App;