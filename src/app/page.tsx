"use client";
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
    <main>
      <p>tesste</p>
    </main>
  );
}
