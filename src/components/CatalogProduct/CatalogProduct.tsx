import { fetchApiData } from "@/services/database";
import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import { Container, CatalogArea } from "./styles";

type Props = {};

const CatalogProduct = (props: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApiData().then((data) => {
      setData(data.data.products);
    });
  }, []);
  return (
    <Container>
      <CatalogArea>
        <ProductsCard products={data} />
      </CatalogArea>
    </Container>
  );
};

export default CatalogProduct;
