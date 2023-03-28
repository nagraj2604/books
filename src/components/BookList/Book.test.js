import React from "react";
import { render, cleanup } from "@testing-library/react";
import Book from "./Book";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Book />);
  expect(asFragment()).toMatchSnapshot();
});
