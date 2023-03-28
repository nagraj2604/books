import React from "react";
import { render, cleanup } from "@testing-library/react";
import SearchForm from "./SearchForm";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<SearchForm />);
  expect(asFragment()).toMatchSnapshot();
});
