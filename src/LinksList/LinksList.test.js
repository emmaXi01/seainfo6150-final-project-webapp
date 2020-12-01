import React from "react";
import { render } from "@testing-library/react";
import LinksList from "./LinksList.jsx";

describe("LinksList tests", () => {
  it("renders the LinksList component correctly", () => {
    const links= ["About", "Leadership", "Careers", "Catalog"];  
    const { container } = render(<LinksList links={links} />);
    expect(container).toMatchSnapshot();
  });
});