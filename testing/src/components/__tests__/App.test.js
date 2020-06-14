import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "../App";

test('shows a comment box', () => {
  const { container, getByText } = render(<App />);
  console.log(container);
  const linkElement = getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
})

