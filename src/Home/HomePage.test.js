import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage.jsx";

describe("HomePage tests", () => {
  it("renders the home page component correctly", () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});