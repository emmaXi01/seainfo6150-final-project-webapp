import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error.jsx";

describe("Error test", () => {
  it("renders the error component correctly", () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
  });
});