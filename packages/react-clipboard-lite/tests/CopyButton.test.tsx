import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CopyButton } from "../src/CopyButton";

describe("CopyButton", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(() => Promise.resolve()),
      },
    });
  });

  it("renders with default text", () => {
    render(<CopyButton text="test" />);
    expect(screen.getByRole("button")).toHaveTextContent("Copy");
  });

  it("renders with custom children", () => {
    render(<CopyButton text="test">Copy this</CopyButton>);
    expect(screen.getByRole("button")).toHaveTextContent("Copy this");
  });

  it("copies text to clipboard on click", async () => {
    render(<CopyButton text="test content" />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("test content");
    await waitFor(() => {
      expect(button).toHaveTextContent("Copied!");
    });
  });

  it("calls onCopied callback", async () => {
    const onCopied = vi.fn();
    render(<CopyButton text="test" onCopied={onCopied} />);

    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(onCopied).toHaveBeenCalled();
    });
  });
});
