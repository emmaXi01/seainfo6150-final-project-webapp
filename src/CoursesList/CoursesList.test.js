import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import CoursesList from "./CoursesList.jsx";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: () => ({ url: '' }),
}));

describe("CoursesList tests", () => {
  const courseList = [
    {
      "slug": "170321135754-airport-security-line",
      "category": "Computer Science",
      "title": "Java In-Depth: Become a Complete Java Engineer!",
      "shortText": "Comprehensive Java programming course integrated with design principles, best practices & instructor-led Java EE project",
      "instructor": "Luella Mccall",
      "pubDate": "11/2020",
      "image": {
        "_url": "https://img-a.udemycdn.com/course/240x135/358540_d06b_11.jpg?lsaRdWOfyyOFnCz9KovMox34gK-3G6UsnZgjEOeh07Q_SHEe3Z9n9Z02mUXmGQznMKo3pk8Y2Awhe8WDW3S8fcYGnnSGesSt478TTBYn3HmXXfK8qyh5IDV0zhde_w",
        "_height": "619",
        "_width": "1100"
      },
      "skillsLearning": "Gain in-depth understanding of core & advanced features of Java including JVM internals",
      "content": ["Java, a High Level Language with a Purpose.", "The four principles of object-oriented programming are encapsulation, abstraction, inheritance, and polymorphism."],
      "feedBack": {
          "reviewer":"Debangshi Satapathy",
          "text":"This course has me clinged on till the very end. I find it pretty much interesting and for me who wanted to learn a language, I wouldn't want to hop on to any other course except for Dheeru Mundluru Sir's. Thank You so much Sir!! "
      }
    },
    {
      "slug": "181119170125-ploughgate-creamery-butter-ball",
      "category": "Computer Science",
      "title": "Web Design for Beginners: Real World Coding in HTML & CSS",
      "shortText": "Launch a career as a web designer by learning HTML5, CSS3, responsive design, Sass and more!",
      "instructor": "Kate Farley",
      "pubDate": "11/2020",
      "image": {
        "_url": "https://img-a.udemycdn.com/course/240x135/246154_d8b0_3.jpg?aBllZUevJOgxDAyfy0KmGxZGoPJu5BLonfU25_WbWPrDrTOdjs_fH1MsvvS8yTLpQlF_h3h1a30AO2th19gZGtFs7_MhHupQB2r8_exSotdvNMZ4n4X90gystipV",
        "_height": "619",
        "_width": "1100"
      },
      "skillsLearning": "Create any website layout you can imagine",
      "content": ["HTML Essentials.", "CSS Essentials."],
      "feedBack": {
          "reviewer":"Brad Schiff",
          "text":"I have previous experience trying to learn HTML and CSS in my graphic design courses a decade ago but it was taught by someone who had trouble teaching."
      }
    }
  ]

  it("renders the course list component correctly", () => {
    const { container } = render(<MemoryRouter><CoursesList courseList={courseList} intro="All courses"/></MemoryRouter>);
    expect(container).toMatchSnapshot();
  });

  it("renders the course list component correctly when there is no course", () => {
    const { container } = render(<MemoryRouter><CoursesList courseList={[]}/></MemoryRouter>);
    expect(container).toMatchSnapshot();
  });
});