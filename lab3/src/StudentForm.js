import "./StudentForm.css"

function StudentForm({student}) {
    return (
      <div className="student-form">
          <div className="student-name">
              {student.name}</div>
          <div className="student-description">
              {student.description}</div>
          <div className="student-tags">
              {
                  student.tags.map(function(name){
                      return <div className="student-tag">{name}</div>
                  })
              }
          </div>
          <div className="student-lessons">
                {
                  student.lessons.map(function(name){
                      return <div className="student-lesson"> {name} </div>
                  })
              } 
          </div>
      </div>
    );
  }
  
  export default StudentForm;
  