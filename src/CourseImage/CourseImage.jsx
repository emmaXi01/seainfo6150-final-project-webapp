import React from "react";
import PropTypes from "prop-types";
import styles from "./CourseImage.module.css";

const CourseImage = (props) => {
    return (
        <img className={styles.courseImage} alt={props.title} src={props.url}/>
    );
};

CourseImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default CourseImage;