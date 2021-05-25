import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// TODO: Import SearchBar component

let container = null;

beforeEach(() => {
  // Setup a DOM element as the target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exiting to prevent this test from altering the results of future tests
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Renders a list of issues", () => {
  it("renders", () => {
    // TODO: Use the render method to make sure that the component renders properly
    act(() => render());
  });

  it("matches snapshot", () => {
    // TODO: Check to see if the component matches the snapshot
    const fragment = render();
    expect(fragment).toMatchSnapshot();
  });
});
