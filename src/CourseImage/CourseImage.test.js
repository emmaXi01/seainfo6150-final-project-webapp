import React from "react";
import { render } from "@testing-library/react";
import CourseImage from "./CourseImage.jsx";

describe("CourseImage tests", () => {
  it("renders the course imagecomponent correctly", () => {
    const url =  "https://img-a.udemycdn.com/course/240x135/533682_c10c_4.jpg?nZ46z0qISmfa8qZFWvm7OpzmPyGFyNfEOoSySIzYsx6snPkgqmsyFUGUkjWkr84nTmwc5wuy5d2Bsla_fyNXS0Ct9txcLvpUI9erTWZ0CNQULjdN6KrFhZhg72uK";
    const title =  "Java Programming Masterclass for Software Developers";
    
    const { container } = render(<CourseImage url={url} title={title}/>);
    expect(container).toMatchSnapshot();
  });
});