import { ArrProduct } from "@/@Types/Types";
import { fetchApiData } from "@/services/database";
import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";

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
