import { render, screen } from "@testing-library/react";
import Projects from "../../src/pages/Projects";
import projectsData from "../../src/data/projects.json";
import profilesData from "../../src/data/profiles.json";
import personalPrivateProjectsData from "../../src/data/personal-private-projects.json";

describe("Projects page", () => {
  it("renders the page heading", () => {
    render(<Projects />);

    expect(screen.getByRole("heading", { level: 1, name: "Projects" })).toBeInTheDocument();
  });

  it("renders the content section with the projects anchor", () => {
    const { container } = render(<Projects />);

    expect(container.querySelector("section#content")).toBeInTheDocument();
    expect(container.querySelector("div.anchor#projects")).toBeInTheDocument();
  });

  it("renders a group heading for every project section", () => {
    render(<Projects />);

    projectsData.sections.forEach((section) => {
      expect(screen.getByRole("heading", { level: 2, name: section.title })).toBeInTheDocument();
    });
  });

  it("renders the GitHub profiles section", () => {
    const { container } = render(<Projects />);

    expect(screen.getByRole("heading", { level: 2, name: "GitHub Profiles" })).toBeInTheDocument();
    profilesData.profiles.forEach((profile) => {
      expect(container.querySelector(`[data-user="${profile.username}"]`)).toBeInTheDocument();
    });
  });

  it("renders the personal/private projects section", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Personal/Private Projects" }),
    ).toBeInTheDocument();
    personalPrivateProjectsData.projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });
});
