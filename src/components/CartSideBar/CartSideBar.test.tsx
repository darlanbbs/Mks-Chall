import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { store } from "@/store";
import CartSideBar from "./CartSideBar";

describe("SideBar component", () => {
  it("should render the cart component correctly", () => {
    render(
      <Provider store={store}>
        <CartSideBar cartopen={false} />
      </Provider>
    );
    expect(CartSideBar).toMatchSnapshot();
  });
});
