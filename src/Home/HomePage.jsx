import React, { useState, useEffect } from "react";

import introPicture from "../images/introPicture.png";
import head from "../images/head.png";
import teacher from "../images/teacher.png";
import degree from "../images/degree.png";
import organization from "../images/organization.png";
import CourseItem from "../CourseItem/CourseItem.jsx";
import Comment from "../Comment/Comment.jsx";
import styles from "./HomePage.module.css";


const HomePage = () => {
  const [recommendCourses, setRecommendCourses] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchRecommendCourses = async () => {
    // performs a GET request
      const response = await fetch("https://demo0156473.mockable.io/recommendedCourses");
      const responseJson = await response.json();
      setRecommendCourses(Object.values(responseJson));
    };

    const fetchComments = async () => {
      // performs a GET request
        const response = await fetch("https://demo0156473.mockable.io/comments");
        const responseJson = await response.json();
        setComments(Object.values(responseJson));
      };

    if (!recommendCourses.length) {
      fetchRecommendCourses();
    }

    if (!comments.length) {
      fetchComments();
    }
  }, [recommendCourses, comments]);

  let displayCourses;
  if (recommendCourses.length) {
    displayCourses = (
      <ul className={styles.courses}>
        {recommendCourses.map(course => (
          <li key={course.slug}>
            <CourseItem recommend={true} course={course}/>
          </li>
        ))}
      </ul>
    );
  }

  let displayComments;
  if (comments.length) {
    displayComments = (
      <ul className={styles.comments}>
        {comments.map(comment => (
          <li key={comment.slug}>
            <Comment comment={comment}/>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <div className={styles.itemsCenter}>
        <div>
          <h1>Enrich yourself by Learning Online Free</h1>
          <p className={styles.itemContent}>Build skills with courses, certificates, and degrees online from excellent instructors.</p>
        </div>
        <div className={styles.image}><img src={introPicture} alt="introduce pricture" /></div>
      </div>
      <div className={styles.introduction}>
        <h2>Achieve your goals with OnlineEdu</h2>
        <ul className={styles.introductionContainer}>
          <li>
            <div><img src={head} alt="head pricture" /></div>
            <div>
              <span>Learn the <br></br>latest skills</span>
              <p>like business analytics, graphic design, Python, and more</p>
            </div>
          </li>
          <li>
            <div><img src={teacher} alt="teacher pricture" /></div>
            <div>
              <span>Get ready<br/> for a career</span>
              <p>in high-demand fields like IT, AI and cloud engineering</p>
            </div>
          </li>
          <li>
            <div><img src={degree} alt="degree pricture" /></div>
            <div>
              <span>Earn <br/> a degree</span>
              <p>from a leading university in business, computer science, and more</p>
            </div>
          </li>
          <li>
            <div><img src={organization} alt="organization pricture" /></div>
            <div>
              <span>Upskill your <br/> organization</span>
              <p>with on-demand training and development programs</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.coursesContainer}>
        <h2>Short and sweet courses for you</h2>
        {displayCourses}
      </div>
      <div className={styles.commentsContainer}>
        <h2>From the OnlineEdu Community</h2>
        {displayComments}
      </div>
    </div>
  );
};

export default HomePage;
