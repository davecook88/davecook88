import { render } from "@testing-library/preact";
import { JsonExplorer } from "./JsonExplorer";
import { JsonObject } from "../utils/jsonTypes";

describe("JsonExplorer", () => {
  test("renders plain JSON correctly", () => {
    const data: JsonObject = {
      name: "John Doe",
      age: 30,
      active: true,
      address: {
        street: "123 Main St",
        city: "Anytown",
      },
    };

    const { container } = render(<JsonExplorer data={data} defaultOpen={true} />);
    expect(container).toBeTruthy();
  });

  test("renders link correctly when _link attribute is present", () => {
    const data: JsonObject = {
      name: "John Doe",
      _link: "https://example.com",
    };

    const { container } = render(<JsonExplorer data={data} defaultOpen={true} />);
    const linkElement = container.querySelector("a");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://example.com");
    expect(linkElement).toHaveClass("cursor-pointer");
  });
});
