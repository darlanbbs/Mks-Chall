import { Product } from "@/@Types/Types";
import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { FiShoppingBag } from "react-icons/fi";
import Image from "next/image";

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
          <Image
            src={photo}
            width={150}
            height={150}
            alt={`imagem do ${name}`}
            priority={true}
            quality={80}
          />
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
