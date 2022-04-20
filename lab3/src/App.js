import StudentSearch from './StudentSearch';
import AddStudentForm from "./AddStudentForm.js"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<StudentSearch />}></Route>
                <Route path="/addStudentForm" element={<AddStudentForm />}></Route>
            </Routes>
        </Router>
    );
}

export default App;