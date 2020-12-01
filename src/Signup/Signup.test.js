import React from "react";
import { render } from "@testing-library/react";
import Signup from "./Signup.jsx";

describe("Signup tests", () => {
  it("renders the signup component correctly", () => {
    const { container } = render(<Signup onSignup={()=>{}}/>);
    expect(container).toMatchSnapshot();
  });
});