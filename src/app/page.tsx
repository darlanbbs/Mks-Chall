"use client";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { fetchApiData } from "@/services/database";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchApiData().then((data) => {
      setData(data.data);
    });
  }, []);
  console.log(data);

  return (
    <>
      <Header />
      <main>
        <p>tesste</p>
      </main>
      <Footer />
    </>
  );
}
