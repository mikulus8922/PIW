import StudentSearch from './StudentSearch';
import AddStudentForm from "./AddStudentForm.js";
import GroupSearch from "./GroupSearch";
import AddGroupForm from "./AddGroupForm";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StudentSearch />}></Route>
                <Route path="/addStudentForm" element={<AddStudentForm />}></Route>
                <Route path="/groupSearch" element={<GroupSearch />}></Route>
                <Route path="/addGroupForm" element={<AddGroupForm />}></Route>
            </Routes>
        </Router>
    );
}

export default App;