import React from "react";
import * as C from "./styles";
import CartSideBar from "../CartSideBar/CartSideBar";

export const Header = () => {
  return (
    <C.HeaderContainer>
      <C.NavContainer>
        <C.Logo>
          <span>MKS</span>
          <h1>Sistemas</h1>
        </C.Logo>
        <CartSideBar cartopen={false} />
      </C.NavContainer>
    </C.HeaderContainer>
  );
};
