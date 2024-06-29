import { useState } from "react";
import { StyledBox } from "./Box.style";
import { ChildrenProps } from "../../types";

function Box({ children }: ChildrenProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StyledBox>
      <button className='btn-toggle' onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </StyledBox>
  );
}

export default Box;
