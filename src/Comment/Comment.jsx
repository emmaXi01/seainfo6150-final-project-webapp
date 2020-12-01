import React from "react";
import PropTypes from "prop-types";

import Julia from "../images/Julia.jpeg";
import Kara from "../images/Kara.png";
import Mirela from "../images/Mirela.jpg";
import Sabrina from "../images/Sabrina.jpg";
import styles from "./Comment.module.css"

const Comment = (props)  =>  {
  let photo;
  if (props.comment.name === "Julia R.") {
    photo = <img className={styles.studentImage} src={Julia} alt="Julia pricture"></img>
  } else if (props.comment.name === "Kara A.") {
    photo = <img className={styles.studentImage} src={Kara} alt="Kara pricture"></img>
  } else if (props.comment.name === "Mirela I.") {
    photo = <img className={styles.studentImage} src={Mirela} alt="Mirela pricture"></img>
  } else {
    photo = <img className={styles.studentImage} src={Sabrina} alt="Sabrina pricture"></img>
  }

  return(
    <div className={styles.commentBlock}>
      <div>{photo}</div>
      <div>
        <h3 className={styles.studentName}>{props.comment.name}</h3>
        <div className={styles.position}>{props.comment.position}</div>
        <div className={styles.inline}></div>
        <div><span className={styles.comment}>{props.comment.comment}</span></div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;