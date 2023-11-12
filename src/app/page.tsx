"use client";
import { theme } from "@/Theme/theme";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ThemeProvider } from "styled-components";
import { Container } from "./GlobalStyle";
import { store } from "./../store/index";
import { Provider } from "react-redux";

import CatalogProduct from "@/components/CatalogProduct/CatalogProduct";

export default function Home() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <CatalogProduct />
          <Footer />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}
