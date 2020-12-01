import React from "react";
import { render } from "@testing-library/react";
import RegisterForm from "./RegisterForm.jsx";

describe("RegisterForm tests", () => {
  const course = {
    "slug": "181122102925-statue-of-liberty-crown",
    "category": "Computer Science",
    "title": "Java Programming Masterclass for Software Developers",
    "shortText": "Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills And Java Certification",
    "instructor": "Kate Farley",
    "pubDate": "11/2020",
    "image": {
      "_url": "https://img-a.udemycdn.com/course/240x135/533682_c10c_4.jpg?nZ46z0qISmfa8qZFWvm7OpzmPyGFyNfEOoSySIzYsx6snPkgqmsyFUGUkjWkr84nTmwc5wuy5d2Bsla_fyNXS0Ct9txcLvpUI9erTWZ0CNQULjdN6KrFhZhg72uK",
      "_height": "619",
      "_width": "1100"
    },
    "skillsLearning": "Learn the core Java skills needed to apply for Java developer positions in just 14 hours.",
    "content": ["Java, a High Level Language with a Purpose.", "How Java Programming Works."],
    "feedBack": {
        "reviewer":"Rafael Santos",
        "text":"I'm really learning a LOT. To be honest some topics are extensive, and sometimes too heavy on detail (and a bit boring at first), but if you insist, Tim always finds a way to make it interesting again. "
    }
  }

  it("renders the register form component correctly", () => {
    const { container } = render(<RegisterForm onBack={()=>{}} course={course}/>);
    expect(container).toMatchSnapshot();
  });
});

