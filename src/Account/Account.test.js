import React from "react";
import { render } from "@testing-library/react";
import Account from "./Account.jsx";

describe("Account test", () => {
  it("renders the account component correctly", () => {
    const { container } = render(<Account username="Emma"/>);
    expect(container).toMatchSnapshot();
  });
});