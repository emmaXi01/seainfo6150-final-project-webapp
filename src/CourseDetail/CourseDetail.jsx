import React, { useState } from "react";
import PropTypes from "prop-types";

import RegisterForm from "../RegisterForm/RegisterForm.jsx";
import styles from "./CourseDetail.module.css"

const CourseDetail = (props) => {
  const [showForm, setShowForm] = useState(false);

  const onRegister = () => {
    setShowForm(true);
  }

  const onBack = () => {
    setShowForm(false);
  }

  let dispalyContent;
  if (showForm) {
    dispalyContent = <RegisterForm onBack={onBack} course={props.course}/>
  } else {
    dispalyContent = (
      <div className={styles.detailContainer}>
        <div className={styles.topContainer}>
          <div className={styles.topWrapper}>
            <h1>{props.course.title}</h1>  
            <p>{props.course.shortText}</p>
            <div>{`${props.course.pubDate} update`}</div>
            <button className={styles.register}onClick={onRegister}>Register the course</button>
          </div>   
        </div>
        <div className={styles.wrapper}>
          <div className={styles.skills}>
            <h2>What you'll learn</h2> 
            <ul><li>{props.course.skillsLearning}</li></ul>
          </div>  
        </div>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2>Course content</h2> 
            <ol>
              {props.course.content.map(item => ( <li key={item}>{item}</li> ))}
            </ol>
          </div>   
        </div>
        <div className={styles.wrapper}>
          <div className={styles.instructor}>
            <h2>Instructor</h2> 
            <div className={styles.name}>{props.course.instructor}</div>
          </div>  
        </div>
        <div className={styles.wrapper}>
          <div className={styles.feedbacks}>
            <h2>Student feedback</h2> 
            <div className={styles.reviewer}>{props.course.feedBack.reviewer}</div>
            <div className={styles.feedback}>{props.course.feedBack.text}</div>
          </div>  
        </div>
      </div>
    );
  }

  return (   
    <div>
      {props.course ? dispalyContent : <div></div>}  
    </div>
  );
};

CourseDetail.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseDetail;