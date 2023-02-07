import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes";

/**
 * Docs
 * https://reactrouter.com/en/main/routers/create-memory-router#type-declaration
 */
const router = createMemoryRouter(routes, {
  initialEntries: ["/", "/about"],
  initialIndex: 0,
});

describe("Root component", () => {
  const user = userEvent.setup();
  it("full app rendering/navigating", async () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByText("Home Page")).toBeInTheDocument();

    await user.click(screen.getByRole("link", { name: /about/i }));

    expect(screen.getByText("About page")).toBeInTheDocument();
  });
});
