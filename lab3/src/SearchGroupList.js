import GroupForm from './GroupForm';

function SearchGroupList({ filteredGroups }) {
  let filtered = filteredGroups.map(group => <GroupForm key={group.id} group={group} />); 
  return (
    <div>
        { filtered }
    </div>
  );
}

export default SearchGroupList;
