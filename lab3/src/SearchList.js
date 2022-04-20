import StudentForm from './StudentForm';

function SearchList({ filteredStudents }) {
  let filtered = filteredStudents.map(student => <StudentForm key={student.id} student={student} />); 
  return (
    <div>
        { filtered }
    </div>
  );
}

export default SearchList;

