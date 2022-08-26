import App from "../src/App"
import {screen, render} from "@testing-library/react"
import "@testing-library/jest-dom"

describe("App", () => {
  const { container } = render(<App/>);

  it("should show Oi", () => {
    expect(container.textContent).toEqual("Oi")
  })
})
