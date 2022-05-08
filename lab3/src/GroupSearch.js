import "./styles.css";
//import groupData from "./groupData.js";
import Scroll from "./Scroll.js";
import SearchGroupList from "./SearchGroupList.js";
import { useState } from "react";
import Navbar from "./Navbar";

function GroupSearch(props) {
  const {setGroupData, groupData} = props;
  const [searchField, setSearchField] = useState("");


  function checkList(list) {
    let isTrue = false;
    list.forEach(e => {
      if (e.toLowerCase().includes(searchField.toLowerCase()))
        isTrue = true;
    });
    return isTrue;
  }

  const filteredGroups = groupData.filter(
    group => {
      return (
        group
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        group
        .description
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        group
        .lesson
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        checkList(group.members) ||
        checkList(group.jobs)
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchGroupList() {
    return (
      <Scroll>
        <SearchGroupList filteredGroups={filteredGroups} />
      </Scroll>
    );
  }

  return (
    <div className="group-page">
      <Navbar />
      <div className="search-bar">
          <input 
            className="group-input"
            type = "search" 
            placeholder = "Search Groups" 
            onChange = {handleChange}
          />
      </div>
      <div className="group-form-list">
        {searchGroupList()}
      </div>
    </div>
  );
}

export default GroupSearch;