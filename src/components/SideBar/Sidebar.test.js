import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";

test("display toggle menu className", () => {
  const { container } = render(<Sidebar />);
  expect(
    container.getElementsByClassName("sidebar collapse-width").length
  ).toBe(1);
  expect(
    container.getElementsByClassName("sidebar-menu icon-pos-collapse").length
  ).toBe(1);
  expect(container.getElementsByClassName("collapse-menu").length).toBe(2);

  const btnToggle = screen.getByTestId("sidebar");
  fireEvent.click(btnToggle);

  expect(container.getElementsByClassName("sidebar full-width").length).toBe(1);
  expect(
    container.getElementsByClassName("sidebar-menu icon-pos-full").length
  ).toBe(1);
  expect(container.getElementsByClassName("full-menu").length).toBe(2);
});
