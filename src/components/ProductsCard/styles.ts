import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0.1rem 0.1rem;
  width: 218px;
  height: 285px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px #00000022;

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
  span:last-child {
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    background: #373737;
    padding: 8px;
    border-radius: 8px;
    color: #fff;
  }
  img {
    object-fit: contain;
  }

  p {
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: left;
    color: #2c2c2c;
    margin-top: 5px;
  }
`;

export const CardDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CardButton = styled.button`
  padding: 0.5rem 0;
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;

  font-size: 14px;
  width: 218px;
  border: none;
  outline: none;
  background: #0f52ba;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0px 0px 8px 8px;

  svg {
    margin-right: 8px;
  }
`;
