import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders intro page", () => {
  const { getAllByText } = render(<App />);
  const headerElements = getAllByText(/pandemic/i);
  expect(headerElements.length).toBeGreaterThan(0);
});
