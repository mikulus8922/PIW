import {useLocation} from 'react-router-dom';
import Navbar from './Navbar';

function StudentInfo() {

    const location = useLocation();
    const student = location.state;

    return (
        <>
        <Navbar></Navbar>
      <div className="student-form">
          <div className="student-name">
              {student.name}</div>
          { <img style={{margin: 'auto', display : 'block', marginBottom : '2rem'}} src={student.imageURL}></img> }
      </div>
      </>
    );
  }
  
  export default StudentInfo;