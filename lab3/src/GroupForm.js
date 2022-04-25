import "./GroupForm.css"

function GroupForm({group}) {
    return (
        <div className="group-form">
            <div className="group-name">
                <div>{group.name}</div>
                <div>{group.lesson}</div>
            </div>
            <div className="group-description">
                {group.description}</div>
            <div className="group-members">
                {
                    group.members.map(function(member){
                        return <div className="group-member">{member} </div>
                    })
                }
            </div>
            <div className="group-jobs">
                {
                    group.jobs.map(function(job){
                        return <div className="group-job"> {job} </div>
                    })
                } 
            </div>
        </div>
    );
  }
  
  export default GroupForm;
  