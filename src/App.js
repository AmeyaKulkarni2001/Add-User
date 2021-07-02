import React ,{ useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';


function App() {
  const[userList, addUserList] = useState([]);
  const addUserHandler = (uName,uAge) =>{
    addUserList((prev) => {
      return [...prev,{name: uName, age: uAge, key: Math.random().toString()}]
    })
  }
  return (
    <div>
    <AddUser onAddUser={addUserHandler}/>
    <UserList users={userList}/>
    </div>
  );
}

export default App;