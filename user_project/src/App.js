import React, {useState} from 'react';
import NewUser from './components/NewUser/NewUser';
import UserList from './components/UserList/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = newUser => {
    setUsers(prevState => {
      return [...prevState, newUser]
    })
  }

  return (
    <>
      <NewUser onNewUser={addUser}/>
      <UserList users={users}/>
    </>
  );
};

export default App;