import { useState, useEffect } from "react";
import "./AddStudentForm.css"
//import studentData from "./studentData";
import Navbar from "./Navbar";
import axios from 'axios';

function AddStudentForm(props) {
    const {setStudentData, studentData} = props;

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const [lessons, setLessons] = useState("")
    const [imageURL, setImageURL] = useState("")

    useEffect(() => {
        axios.get("https://picsum.photos/200/300")
        .then(res => {
            const imageID = res.headers['picsum-id'];
            setImageURL('https://picsum.photos/200/300?image=' + imageID);
        });
    })


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
            imageURL: imageURL
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