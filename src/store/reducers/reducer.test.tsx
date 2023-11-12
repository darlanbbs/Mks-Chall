import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../index";
import { addToCart } from "./cartReducer";
import ProductsCard from "../../components/ProductsCard/ProductsCard";

describe("addToCart", () => {
  test("should add an item to the cart", () => {
    render(
      <Provider store={store}>
        <ProductsCard
          product={[
            {
              id: 1,
              name: "Product 1",
              quantity: 1,
              price: 100,
              brand: "teste",
              description: "teste",
              photo:
                "http://localhost:3000/_next/image?url=https%3A%2F%2Fmks-sistemas.nyc3.digitaloceanspaces.com%2Fproducts%2Fmacbookair.webp&w=256&q=80",
              total: 100,
            },
          ]}
        />
      </Provider>
    );

    store.dispatch(addToCart({ id: 1, name: "Product 1", quantity: 1 }));

    expect(screen.getByText(/Product 1/)).toBeInTheDocument();
  });
});
