import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load Contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load button inside Contact component", () => {
  render(<Contact />);
  //   const button = screen.getByRole("button");
  const button = screen.getByText("Submit");
  //Assertion
  expect(button).toBeInTheDocument();
});

test("Should load input inside Contact component", () => {
  render(<Contact />);
  const inputText = screen.getByPlaceholderText("Name");
  //Assertion
  expect(inputText).toBeInTheDocument();
});

test("Should load 2 TextBox inside Contact component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  //   console.log(inputBoxes);
  //Assertion
  expect(inputBoxes.length).toBe(2);
});
