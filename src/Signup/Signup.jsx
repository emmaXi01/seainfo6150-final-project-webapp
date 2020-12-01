import React, { useState } from 'react';
import PropTypes from "prop-types";
import { addUser } from "../service.js";
import styles from "./Signup.module.css";

const Signup = (props) => {
  const[newUsername, setNewUsername] = useState('');
  const[newPassword, setNewPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const onUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const performSignup = () => {
    if(!newUsername || newUsername.trim() === "") {
      setErrorText("You should Enter an User Name!");
      return;
    }

    if(!newPassword || newPassword.trim() === "") {
      setErrorText("You should Enter a Password!");
      return;
    }

    const user = {"name": newUsername, "password": newPassword};
    addUser(user);

    setErrorText('');
    props.onSignup(newUsername);
  };

  return(
    <div className={styles.container}>
      <h4 className={styles.greeting}>Sign Up and Start Learning!</h4>
      <p className="error">{errorText}</p>
      <div className="signup-body">
        <input className={styles.username} onChange={onUsernameChange} value={newUsername} placeholder="User name"/>
        <input className={styles.password} onChange={onPasswordChange} value={newPassword} placeholder="Password"/>
        <button className={styles.sigupButton} onClick={performSignup }>Sign Up</button>    
      </div>     
    </div>
  );
};

Signup.propTypes = {
  onSignup: PropTypes.func.isRequired
};

export default Signup;