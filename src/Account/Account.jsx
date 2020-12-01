import React from "react";
import PropTypes from "prop-types";
import styles from "./Account.module.css";

const Account = (props) => {
  return (
    <div className={styles.accountContainer}>
      <h4 className={styles.profile}>Public profile!</h4>
      <p className={styles.subtext}>Basic information about yourself</p>
      <label>
        Basics: 
        <div className={styles.username}>{props.username}</div>
      </label>        
    </div>
  );
};

Account.propTypes = {
  username: PropTypes.string.isRequired
};

export default Account;