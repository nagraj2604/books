import React from "react";
import { render, cleanup } from "@testing-library/react";
import BookDetails from "./BookDetails";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<BookDetails />);
  expect(asFragment()).toMatchSnapshot();
});
