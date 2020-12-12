import { render, screen, act, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouter from "testingUtils/renderWithRouter";

import ConstructorPage from "./";

const arrangeTest = ({ updateOrderContext = jest.fn() } = {}) => {
  return render(<ConstructorPage updateOrderContext={updateOrderContext} />);
};

afterEach(cleanup);

describe("ConstructorPage", () => {
  it("calculates price on each click", () => {
    arrangeTest();

    act(() => {
      userEvent.click(screen.getByLabelText("35cm"));
    });

    expect(screen.getByText("Заказать за 229$")).toBeInTheDocument();

    act(() => {
      userEvent.click(screen.getByLabelText("пышное"));
    });

    expect(screen.getByText("Заказать за 258$")).toBeInTheDocument();

    act(() => {
      userEvent.click(screen.getByLabelText("белый"));
    });

    expect(screen.getByText("Заказать за 287$")).toBeInTheDocument();

    act(() => {
      userEvent.click(screen.getByLabelText("моцарелла"));
    });

    expect(screen.getByText("Заказать за 316$")).toBeInTheDocument();

    act(() => {
      userEvent.click(screen.getByText("чеддар"));
      userEvent.click(screen.getByText("перец"));
    });

    expect(screen.getByText("Заказать за 374$")).toBeInTheDocument();

    act(() => {
      userEvent.click(screen.getByText("бекон"));
    });

    expect(screen.getByText("Заказать за 403$")).toBeInTheDocument();
  });

  it("redirects to checkout page on submit", async () => {
    const { history } = renderWithRouter(
      <ConstructorPage updateOrderContext={jest.fn()} />
    );

    act(() => {
      userEvent.click(screen.getByText("Заказать за 200$"));
    });

    await waitFor(() => {
      expect(history.location.pathname).toBe("/checkout");
    });
  });
});
