import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || email.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and/or email (non-empty values).',
      });
      return;
    }
    if(!emailIsValid(email)){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid email.',
      });
      return;
    }
    props.onAddUser(name, email, comment);
    setName('');
    setEmail('');
    setComment('');
  };

  const emailIsValid = (email)=>{
    //going to try regex to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const commentHandler = (event)=>{
    setComment(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={nameHandler}
          />
          <label htmlFor="Email">Email</label>
          <input
            id="Email"
            type="text"
            value={email}
            onChange={emailHandler}
          />
          <label htmlFor="comment">comments</label>
          <input
            id="comment"
            type="text"
            value={comment}
            onChange={commentHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
