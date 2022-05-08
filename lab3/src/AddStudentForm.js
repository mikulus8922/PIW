import { useState } from "react";
import "./AddStudentForm.css"
//import studentData from "./studentData";
import Navbar from "./Navbar";

function AddStudentForm(props) {
    const {setStudentData, studentData} = props;

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const [lessons, setLessons] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if (name === '' || email === '')
            return;

        const tagsSep = tags.split(";");
        const lessonsSep = lessons.split(";");

        const id = studentData.length + 1;

        setStudentData(studentData.concat({
            id: id,
            email: email,
            name: name,
            description: description,
            tags: tagsSep,
            lessons: lessonsSep,
        }));
    }

    return(
        <>
            <Navbar />
            <div className="add-student-form">
                <div className="add-div">
                    <div>First name:</div>
                    <input onChange={event => setName(event.target.value)} />
                </div>
                <div className="add-div">
                    <div>Email:</div>
                    <input onChange={event => setEmail(event.target.value)} />
                </div>
                <div className="add-div">
                    <div>Description:</div>
                    <input onChange={event => setDescription(event.target.value)} />
                </div>
                <div className="add-div">
                    <div>Tags (separated by ";"):</div>
                    <input onChange={event => setTags(event.target.value)} />
                </div>
                <div className="add-div">
                    <div>Lessons (separated by ";"):</div>
                    <input onChange={event => setLessons(event.target.value)} />
                </div>
            </div>
            <form className="button-submit" onSubmit={handleSubmit}>
                    <button type="submit">Add form</button>
            </form>
        </>
    );
}

export default AddStudentForm;