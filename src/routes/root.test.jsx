import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { mockedResponse } from "../mocks/handlers";

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

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    expect(screen.getAllByTestId("user")).toHaveLength(mockedResponse.length);
  });

  it("should allow user use navigation", async () => {
    render(<RouterProvider router={router} />);

    const navLink = screen.getByText(/about/i);

    // Go to about page
    await user.click(navLink);

    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });

  it("should allow user see user details", async () => {
    const fullName =
      mockedResponse[0].firstName + " " + mockedResponse[0].lastName;
    render(<RouterProvider router={router} />);

    const navLink = screen.getByText(/home/i);

    // Come back to home page
    await user.click(navLink);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    const userLink = screen.getByRole("link", {
      name: new RegExp(mockedResponse[0].firstName, "i"),
    });

    await user.click(userLink);

    expect(screen.getByText(fullName)).toBeInTheDocument();
  });
});
