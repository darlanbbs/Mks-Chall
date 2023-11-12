import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CartSideBar from "../../components/CartSideBar/CartSideBar";
import { increase } from "./cartReducer";
import { store } from "../index";

describe("increase", () => {
  test("should increase the quantity of an item in the cart", () => {
    render(
      <Provider store={store}>
        <CartSideBar cartopen={true} />
      </Provider>
    );

    store.dispatch(increase({ id: 1, name: "Product 1", quantity: 2 }));

    expect(screen.getByText(/2/)).toBeInTheDocument();
  });
});
