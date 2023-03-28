import React from "react";
import { render, cleanup } from "@testing-library/react";
import Loader from "./Loader";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Loader />);
  expect(asFragment()).toMatchSnapshot();
});
