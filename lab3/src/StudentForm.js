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
                  student.tags.map(function(tag){
                      return <div className="student-tag">{tag}</div>
                  })
              }
          </div>
          <div className="student-lessons">
                {
                  student.lessons.map(function(lesson){
                      return <div className="student-lesson"> {lesson} </div>
                  })
              } 
          </div>
      </div>
    );
  }
  
  export default StudentForm;
  