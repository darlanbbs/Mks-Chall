"use client";
import { theme } from "@/Theme/theme";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { fetchApiData } from "@/services/database";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./GlobalStyle";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchApiData().then((data) => {
      setData(data.data);
    });
  }, []);
  console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <p>tesste</p>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
