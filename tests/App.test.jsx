import App from "../src/App";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("App", () => {
  const { container } = render(<App />); // Don't do this! Check this link https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-container-to-query-for-elements

  it("should show Oi", () => {
    expect(container.textContent).toEqual("Oi"); // https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-the-wrong-assertion
  });
});
