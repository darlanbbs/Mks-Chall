import { Product } from "@/@Types/Types";
import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { FiShoppingBag } from "react-icons/fi";
import { Skeleton } from "../Skeleton/styles";

const ProductsCard = ({
  id,
  name,

  description,
  photo,
  price,
}: Product) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) setIsLoading(false);
  }, [id]);

  return (
    <div>
      {!isLoading ? (
        <C.Card key={id}>
          <img src={photo} width={150} height={150}></img>
          <C.CarDesc>
            <span>{name}</span>
            <span>
              R$
              {parseFloat(price.toString().replace(",", ""))}
            </span>
          </C.CarDesc>
          <p>{description}</p>
          <C.CardButton>
            <FiShoppingBag />
            Comprar
          </C.CardButton>
        </C.Card>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductsCard;
