import React from "react";
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from "prop-types";
import styles from "./Categories.module.css";

import CoursesList from "../CoursesList/CoursesList.jsx";
import { filterCourses } from "../service.js";

const Categories = (props) => {
  let { url } = useRouteMatch();
  
  const categories = [
    {
      "id": "all-course", 
      "name": "All Courses"
    },
    {
      "id": "computer-science", 
      "name": "Computer Science"
    },
    {
      "id": "data-science", 
      "name": "Data Science"
    },
    {
      "id": "business", 
      "name": "Business"
    },
    {
      "id": "marketing", 
      "name": "Marketing"
    },
    {
      "id": "finance", 
      "name": "Fiance"
    },
  ];

  const categoryList = (
    <nav className={styles.categories}>
      <ul className={styles.categoryList}>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`${url}/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
 
  return (
    <div>
      {categoryList}
      <Switch>
        {categories.map(category=> (
          <Route path={`${url}/category/${category.id}`} exact key={category.id}><CoursesList intro={category.name} courseList={filterCourses(props.courseList, category.name)}/></Route>
        ))}
        <Route path={url}><CoursesList courseList={props.courseList}/></Route>
      </Switch>
    </div>   
  );
};

Categories.propTypes = {
  courseList: PropTypes.array.isRequired
};

export default Categories;