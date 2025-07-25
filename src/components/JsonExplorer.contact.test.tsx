import { render } from "@testing-library/preact";
import { JsonExplorer } from "./JsonExplorer";
import { JsonObject } from "../utils/jsonTypes";

describe("JsonExplorer Contact Section", () => {
  test("renders email as clickable mailto link in contact section", () => {
    const data: JsonObject = {
      contact: {
        email: "test@example.com"
      }
    };

    const { container } = render(<JsonExplorer data={data} parentKey="root" defaultOpen={true} />);
    const emailLink = container.querySelector("a[href^='mailto:']");

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:test@example.com");
    expect(emailLink).toHaveTextContent('"test@example.com"');
  });

  test("renders URL as clickable link in contact section", () => {
    const data: JsonObject = {
      contact: {
        website: "https://example.com"
      }
    };

    const { container } = render(<JsonExplorer data={data} parentKey="root" defaultOpen={true} />);
    const urlLink = container.querySelector("a[href='https://example.com']");

    expect(urlLink).toBeInTheDocument();
    expect(urlLink).toHaveAttribute("href", "https://example.com");
    expect(urlLink).toHaveTextContent('"https://example.com"');
    expect(urlLink).toHaveAttribute("target", "_blank");
  });

  test("does not make non-email/non-URL strings in contact section clickable", () => {
    const data: JsonObject = {
      contact: {
        phone: "+1 234 567 8900"
      }
    };

    const { container } = render(<JsonExplorer data={data} parentKey="root" defaultOpen={true} />);
    const phoneElement = container.querySelector("span.text-green-400");

    expect(phoneElement).toBeInTheDocument();
    expect(phoneElement).toHaveTextContent('"+1 234 567 8900"');
    // Check that there's exactly one link (the root object toggle)
    const links = container.querySelectorAll("a");
    expect(links.length).toBe(0); // No links for non-URL/non-email values
  });
});