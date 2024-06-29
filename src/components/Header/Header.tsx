import { ChildrenProps } from "../../types";
import { StyledHeader } from "./Header.style";
// import { HeaderProps } from "../types";

function Header({ children }: ChildrenProps) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
