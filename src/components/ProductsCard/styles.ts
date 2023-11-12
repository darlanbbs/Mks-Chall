import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 1.125rem 0.5rem 3rem;
  width: 218px;
  height: 285px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  span {
    font-size: 15px;
    line-height: 19px;
  }
  span:last-child {
    padding: 0.25rem 0.5rem;
    background-color: #373737;
    color: white;
    font-weight: 700;
    border-radius: 5px;
  }
  img {
    object-fit: contain;
  }

  p {
    margin-top: 0.5rem;
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    color: #2c2c2c;
  }
`;

export const CarDesc = styled.div`
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
  width: 100%;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.backgroundColors.primary};
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0px 0px 8px 8px;

  svg {
    margin-right: 8px;
  }
`;
