import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=9&sortBy=name&orderBy=DESC"
  );

  if (!res.ok) {
    throw new Error("Erro na requisição");
  }

  const data = await res.json();
  console.log(data);
  return NextResponse.json({ data });
}
