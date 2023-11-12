import styled, { css, keyframes } from "styled-components";

const shimmer = css`
  background: #f6f7f8
    linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #ecebeb 100%
    )
    no-repeat;
  background-size: 800px 800px;
  display: inline-block;
  position: relative;
  border-radius: 5px;

  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const Skeleton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.backgroundColors.primary};
  gap: 10px;
  padding: 1.125rem 0.5rem 1.25rem;
  border-radius: 5px;
  position: relative;
`;

export const Box = styled.div`
  ${shimmer};
  display: flex;
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const Text = styled.div`
  ${shimmer};
  width: 100%;
  height: 15px;
  border-radius: 0 0 5px 5px;
  :last-child {
    position: absolute;
    bottom: 0;
  }
`;
