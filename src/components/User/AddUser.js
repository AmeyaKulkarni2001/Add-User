import React, { useState }  from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";
const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = (e) =>{
      setEnteredUsername(e.target.value);
  }

  const ageChangeHandler = (e) =>{
    setEnteredAge(e.target.value);
}

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input onChange={usernameChangeHandler} id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input onChange={ageChangeHandler} id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
