import { ArrProduct } from "@/@Types/Types";
import { fetchApiData } from "@/services/database";
import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import { Skeleton } from "../Skeleton/styles";
import { CatalogArea, Container } from "./styles";

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
        {data.length > 0 ? (
          data.map((product: any) => (
            <div key={product.id}>
              <ProductsCard
                brand={product.brand}
                quantity={product.quantity}
                total={product.total}
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
      </CatalogArea>
    </Container>
  );
};

export default CatalogProduct;
