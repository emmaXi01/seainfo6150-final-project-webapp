import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login.jsx";

describe("Login tests", () => {
  it("renders the login component correctly", () => {
    const { container } = render(<Login onLogin={()=>{}} />);
    expect(container).toMatchSnapshot();
  });
});