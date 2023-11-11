import React from "react";
import * as C from "./styles";

export const Header = () => {
  return (
    <C.HeaderContainer>
      <C.NavContainer>
        <C.Logo>
          <span>MKS</span>
          <h1>Sistemas</h1>
        </C.Logo>
      </C.NavContainer>
    </C.HeaderContainer>
  );
};
