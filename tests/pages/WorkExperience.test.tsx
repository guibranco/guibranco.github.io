import { render, screen } from "@testing-library/react";
import WorkExperience from "../../src/pages/WorkExperience";
import workExperienceData from "../../src/data/work-experience.json";

describe("WorkExperience page", () => {
  it("renders the page heading", () => {
    render(<WorkExperience />);

    expect(screen.getByRole("heading", { level: 1, name: "Work Experience" })).toBeInTheDocument();
  });

  it("renders the content section with the work-experience anchor", () => {
    const { container } = render(<WorkExperience />);

    expect(container.querySelector("section#content")).toBeInTheDocument();
    expect(container.querySelector("div.anchor#work-experience")).toBeInTheDocument();
  });

  it("renders one experience card per entry in the data source", () => {
    render(<WorkExperience />);

    workExperienceData.experiences.forEach((experience) => {
      expect(
        screen.getByRole("heading", { level: 2, name: experience.company }),
      ).toBeInTheDocument();
    });
  });
});
