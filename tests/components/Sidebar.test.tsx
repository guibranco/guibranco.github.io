import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Sidebar from "../../src/components/Sidebar/Sidebar";

const setInnerWidth = (width: number) => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
};

const Harness = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/work-experience")}>Navigate</button>
      <Sidebar />
    </>
  );
};

describe("Sidebar", () => {
  beforeEach(() => {
    localStorage.clear();
    setInnerWidth(1024);
  });

  it("renders sections expanded by default", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/about-me"]}>
        <Sidebar />
      </MemoryRouter>,
    );

    expect(container.querySelectorAll("section.widget.collapsed")).toHaveLength(0);
  });

  it("collapses all sections on route change when the viewport is mobile-sized", () => {
    setInnerWidth(500);
    const { container } = render(
      <MemoryRouter initialEntries={["/about-me"]}>
        <Harness />
      </MemoryRouter>,
    );

    expect(container.querySelectorAll("section.widget.collapsed")).toHaveLength(0);

    fireEvent.click(screen.getByText("Navigate"));

    expect(container.querySelectorAll("section.widget.collapsed").length).toBeGreaterThan(0);
  });

  it("does not collapse sections on route change when the viewport is desktop-sized", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/about-me"]}>
        <Harness />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText("Navigate"));

    expect(container.querySelectorAll("section.widget.collapsed")).toHaveLength(0);
  });
});
