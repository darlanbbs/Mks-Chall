import { Product, Products } from "@/@Types/Types";
import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "./../../store/reducers/cartReducer";
import { CardSkeleton } from "../Skeleton/Skelenton";
const ProductsCard = ({ product }: Products) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) setIsLoading(false);
  }, [product]);

  return (
    <C.Container>
      {product.length > 0
        ? product.map((product) => (
            <C.Card key={product.id}>
              <Image
                src={product.photo}
                width={150}
                height={150}
                alt={`imagem do ${product.name}`}
                priority={true}
                quality={80}
              />
              <C.CardDesc>
                <span>{product.name}</span>
                <span>
                  R${parseFloat(product.price.toString().replace(",", ""))}
                </span>
              </C.CardDesc>
              <p>{product.description}</p>
              <C.CardButton onClick={() => dispatch(addToCart(product))}>
                <FiShoppingBag />
                Comprar
              </C.CardButton>
            </C.Card>
          ))
        : !isLoading && <CardSkeleton />}
    </C.Container>
  );
};

export default ProductsCard;
