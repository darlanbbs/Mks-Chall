import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100%;
  z-index: 11;
  background-color: #0f52ba;
  height: 101px;
`;
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Logo = styled.div`
  color: #fff;
  display: flex;
  align-items: baseline;
  span {
    font-size: 40px;
    font-weight: 400;
    margin-right: 8px;
    mix-blend-mode: normal;
  }
  h1 {
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
  }
`;
