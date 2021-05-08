
import React, { useState } from 'react';

import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {

  const [usersList, setUserList] = useState([])

  const addUserHandler = (userName, userAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, {
        name: userName, age: userAge, id: Math.random().toString()
      },
    ];
    });
  }
  return (
    // build in wrapper components either use <> or <React.Fragment>
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </>
  )
}

export default App;