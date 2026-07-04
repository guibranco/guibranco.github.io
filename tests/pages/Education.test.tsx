import { render, screen } from "@testing-library/react";
import Education from "../../src/pages/Education";
import educationData from "../../src/data/education.json";
import languagesData from "../../src/data/languages.json";

describe("Education page", () => {
  it("renders the page heading", () => {
    render(<Education />);

    expect(screen.getByRole("heading", { level: 1, name: "Education" })).toBeInTheDocument();
  });

  it("renders the content section with the education anchor", () => {
    const { container } = render(<Education />);

    expect(container.querySelector("section#content")).toBeInTheDocument();
    expect(container.querySelector("div.anchor#education")).toBeInTheDocument();
  });

  it("renders the expected sub-sections", () => {
    render(<Education />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Academic Education" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Additional Courses" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Languages" })).toBeInTheDocument();
  });

  it("renders one card per academic education and course entry", () => {
    render(<Education />);

    [...educationData.education, ...educationData.courses].forEach((entry) => {
      expect(screen.getByRole("heading", { level: 2, name: entry.company })).toBeInTheDocument();
    });
  });

  it("renders every language from the data source", () => {
    render(<Education />);

    languagesData.languages.forEach((lang) => {
      expect(screen.getByText(lang.description)).toBeInTheDocument();
    });
  });
});
