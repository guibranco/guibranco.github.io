import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  it("closes the mobile menu when the route changes", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    // Clicking the desktop menu link navigates without closing the mobile
    // menu itself, so this only passes if App reacts to the route change.
    fireEvent.click(screen.getAllByText("Work Experience")[0]);

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("keeps the mobile menu closed when it was already closed on navigation", () => {
    render(<App />);

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );

    fireEvent.click(screen.getAllByText("Education")[0]);

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
