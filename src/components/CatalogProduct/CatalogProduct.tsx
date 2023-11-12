import { ArrProduct } from "@/@Types/Types";
import { fetchApiData } from "@/services/database";
import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import { Skeleton } from "../Skeleton/styles";
import { Container } from "./styles";

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
      {data.length > 0 ? (
        data.map((product: any) => (
          <div key={product.id}>
            <ProductsCard
              id={product.id}
              name={product.name}
              description={product.description}
              photo={product.photo}
              price={product.price}
            />
          </div>
        ))
      ) : (
        <Skeleton />
      )}
    </Container>
  );
};

export default CatalogProduct;
