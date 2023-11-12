import * as C from "./styles";

export const CardSkeleton = () => {
  return (
    <C.Skeleton>
      <C.Box />
      <C.Text />
      <C.Text />
      <C.Text />
    </C.Skeleton>
  );
};
