import { ChildrenProps } from "../../types";
import { StyledMain } from "./Main.style";

function Main({ children }: ChildrenProps) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
