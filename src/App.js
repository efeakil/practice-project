import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import { useState, Fragment } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { key: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </Fragment>
  );
}

export default App;
