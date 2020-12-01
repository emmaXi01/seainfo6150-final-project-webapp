import React from "react";
import PropTypes from "prop-types";
import styles from "./LinksList.module.css";

const LinkList = (props) => {
  const displayContent = (
    <ul className={styles.linksList}>
        { props.links.map((link) => <li key={link}>{link}</li>) }
    </ul>
  );

  return (
    <div>
      { displayContent }
    </div>
  );
};

LinkList.propTypes = {
  links: PropTypes.array.isRequired
}

export default LinkList;