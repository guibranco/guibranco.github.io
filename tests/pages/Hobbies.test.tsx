import { render, screen } from "@testing-library/react";
import Hobbies from "../../src/pages/Hobbies";
import hobbiesData from "../../src/data/hobbies.json";

describe("Hobbies page", () => {
  it("renders the page heading", () => {
    render(<Hobbies />);

    expect(screen.getByRole("heading", { level: 1, name: "Hobbies" })).toBeInTheDocument();
  });

  it("renders the content section with the hobbies anchor", () => {
    const { container } = render(<Hobbies />);

    expect(container.querySelector("section#content")).toBeInTheDocument();
    expect(container.querySelector("div.anchor#hobbies")).toBeInTheDocument();
  });

  it("renders one embed per Instagram post in the data source", () => {
    const { container } = render(<Hobbies />);

    const embeds = container.querySelectorAll("blockquote.instagram-media");
    expect(embeds).toHaveLength(hobbiesData.instagramPosts.length);
  });

  it("renders a follow button linking to the Instagram profile", () => {
    render(<Hobbies />);

    expect(screen.getByRole("link", { name: /follow me on instagram/i })).toHaveAttribute(
      "href",
      `https://www.instagram.com/${hobbiesData.instagramUsername}/`,
    );
  });
});
