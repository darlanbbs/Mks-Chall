import { ArrProduct } from "@/@Types/Types";
import { fetchApiData } from "@/services/database";
import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import { Container, CatalogArea } from "./styles";

type Props = {};

const CatalogProduct = (props: Props) => {
  const [data, setData] = useState<ArrProduct[]>([]);

  useEffect(() => {
    fetchApiData().then((data) => {
      setData(data.data.products);
    });
  }, []);
  return (
    <Container>
      <CatalogArea>
        <ProductsCard product={data} />
      </CatalogArea>
    </Container>
  );
};

export default CatalogProduct;
