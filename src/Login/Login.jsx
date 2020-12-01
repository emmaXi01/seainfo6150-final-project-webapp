import React, {useState} from 'react';
import PropTypes from "prop-types";
import login from "../images/login.png";
import {checkUser} from "../service.js";
import styles from "./Login.module.css";

const Login = (props) => {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const onUsernameChange = (e) => {
      setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const performLogin = () => {
    if(!username || username.trim() === "") {
        setErrorText("You should Enter an User Name!");
        return;
    }

    if(!password || password.trim() === "") {
      setErrorText("You should Enter a Password!");
      return;
    }

    if(!checkUser(username, password)) {
      setErrorText("user name or password is wrong!");
      return;
    }

    setErrorText('');
    props.onLogin(username);
  };

  return(
    <div className={styles.loginContainer}>
      <div className={styles.picture}>
          <img className={styles.loginImage} src={login} alt="login"/>
      </div>
      <h4 className={styles.greeting}>hello :)</h4>
      <p className="error">{errorText}</p>
      <div className="login-body">
          <input className={styles.username} onChange={onUsernameChange} value={username} placeholder="User name"/>
          <input className={styles.password} onChange={onPasswordChange} value={password} placeholder="Password"/>
          <button className={styles.loginButton} onClick={ performLogin }>Log In</button>    
      </div>       
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Login;