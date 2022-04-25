import React from "react";
import "./AddGroupForm.css"
import groupData from "./groupData";
import Navbar from "./Navbar";


class AddGroupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            lesson: "",
            members: "",
            emails: "",
            jobs: ""
        }


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.name === '' || this.state.lesson === '')
            return;

        const membersSep = this.state.members.split(";");
        const emailsSep = this.state.emails.split(";");
        const jobsSep = this.state.jobs.split(";");

        if (membersSep.length > 5 || membersSep.length < 1 || membersSep.length !== emailsSep.length || membersSep.length !== jobsSep.length)
            return;

        const id = groupData.length + 1;

        groupData.push({
            id: id,
            name: this.state.name,
            description: this.state.description,
            lesson: this.state.lesson,
            members: membersSep,
            emails: emailsSep,
            jobs: jobsSep
        });
    }


    render() {    
        return(
            <>
                <Navbar />
                <div className="add-student-form">
                    <div className="add-div">
                        <div>Group Name:</div>
                        <input onChange={event => this.setState({name: event.target.value})} />
                    </div>
                    <div className="add-div">
                        <div>Description:</div>
                        <input onChange={event => this.setState({description: event.target.value})} />
                    </div>
                    <div className="add-div">
                        <div>Lessons:</div>
                        <input onChange={event => this.setState({lesson: event.target.value})} />
                    </div>
                    <div className="add-div">
                        <div>Members (separated by ";"):</div>
                        <input onChange={event => this.setState({members: event.target.value})} />
                    </div>
                    <div className="add-div">
                        <div>Emails (separated by ";"):</div>
                        <input onChange={event => this.setState({emails: event.target.value})} />
                    </div>
                    <div className="add-div">
                        <div>Jobs (separated by ";"):</div>
                        <input onChange={event => this.setState({jobs: event.target.value})} />
                    </div>
                </div>
                <form className="button-submit" onSubmit={this.handleSubmit}>
                        <button type="submit">Add form</button>
                </form>
            </>
        );
    }
}


export default AddGroupForm;