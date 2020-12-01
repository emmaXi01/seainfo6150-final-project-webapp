import React from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from "prop-types";

import CourseItem from "../CourseItem/CourseItem.jsx";
import CourseDetail from "../CourseDetail/CourseDetail.jsx";
import styles from "./CoursesList.module.css";

const CoursesList = (props) => {
  let { url } = useRouteMatch();

  let displayContent;
  let introduction;

  if(props.intro) {
    if (props.intro === "All Courses") {
      introduction = <h2> All courses</h2>
    } else if (["Computer Science", "Data Science", "Marketing", "Business", "Fiance"].includes(props.intro)) {
      introduction = <h2>{`All ${props.intro} courses`}</h2>
    } else {
      introduction =<h2>{`Total ${props.courseList.length} course(s) for ${props.intro}`}</h2>
    }
  } 
  if (props.courseList.length) {
    displayContent = (
      <div>
        <div className={styles.result}>
          {introduction}
        </div>
        <ul>
          {props.courseList.map(course => (
            <li key={course.slug}>
              <CourseItem course={course}/>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    displayContent = <div className={styles.warning}>No relevant Courses! Please search other courses!</div>;
  }

  return (
    <div className={styles.courseListcontainer}>
      {<Switch>
        {props.courseList.map(course => (
          <Route path={`${url}/${course.slug}`} exact key={course.slug}><CourseDetail course={course}/></Route>
        ))}
        <Route path={url}>{displayContent}</Route>
        <Route path="/search">{displayContent}</Route>
      </Switch>}
    </div>
  );
};

CoursesList.propTypes = {
  courseList: PropTypes.array.isRequired,
  intro: PropTypes.string
};

export default CoursesList;