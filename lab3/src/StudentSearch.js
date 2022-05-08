import "./styles.css";
//import studentData from "./studentData.js";
import Scroll from "./Scroll.js";
import SearchList from "./SearchList.js";
import { useState } from "react";
import Navbar from "./Navbar";

function StudentSearch(props) {
  const {setStudentData, studentData} = props;
  const [searchField, setSearchField] = useState("");

  

  function checkList(list) {
    let isTrue = false;
    list.forEach(e => {
      if (e.toLowerCase().includes(searchField.toLowerCase()))
        isTrue = true;
    });
    return isTrue;
  }

  const filteredStudents = studentData.filter(
    student => {
      return (
        student
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        student
        .description
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        checkList(student.tags) ||
        checkList(student.lessons)
      );
    }
  );



  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredStudents={filteredStudents} />
      </Scroll>
    );
  }

  return (
    <div className="student-page">
      <Navbar />
      <div className="search-bar">
          <input 
            className="student-input"
            type = "search" 
            placeholder = "Search Students" 
            onChange = {handleChange}
          />
      </div>
      <div className="student-form-list">
        {searchList()}
      </div>
    </div>
  );
}

export default StudentSearch;
