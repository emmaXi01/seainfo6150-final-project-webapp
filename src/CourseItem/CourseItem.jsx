import React from "react";
import { Link }from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CourseItem.module.css";
import CourseImage from "../CourseImage/CourseImage.jsx";

const CourseItem = (props) => {

  return (
    <div className={ props.recommend ? styles.recommendContainer : styles.courseItemContainer}>
      <div className={styles.imageBlock}>
        <CourseImage title={props.course.title} url={props.course.image._url}/>
      </div>
      <div className={styles.corseInfo}>
        <Link to={`/courses/${props.course.slug}`}><h2>{props.course.title}</h2></Link>
        <p className={styles.text}>{props.course.shortText}</p>
        <div className={styles.instructor}>{props.course.instructor}</div>
      </div>
    </div>
  );
};

CourseItem.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseItem;