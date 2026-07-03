import { render, screen } from "@testing-library/react";
import AboutMe from "../../src/pages/AboutMe";

describe("AboutMe page", () => {
  it("renders the page heading", () => {
    render(<AboutMe />);

    expect(screen.getByRole("heading", { level: 1, name: "ABOUT ME" })).toBeInTheDocument();
  });

  it("renders the content section with the about-me anchor", () => {
    const { container } = render(<AboutMe />);

    expect(container.querySelector("section#content")).toBeInTheDocument();
    expect(container.querySelector("div.anchor#about-me")).toBeInTheDocument();
  });

  it("renders the expected sub-sections", () => {
    render(<AboutMe />);

    expect(screen.getByRole("heading", { level: 3, name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Work Permit" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Projects I Worked On" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Time Coded" })).toBeInTheDocument();
  });
});
