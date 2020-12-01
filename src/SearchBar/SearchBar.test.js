import React from "react";
import { render } from "@testing-library/react";
import SearchBar from "./SearchBar.jsx";

describe("SearchBar tests", () => {
  it("renders the search bar component correctly", () => {
    const { container } = render(<SearchBar onSearch={()=>{}}/>);
    expect(container).toMatchSnapshot();
  });
});