import { useState } from "react";
import { StyledBox } from "./Box.style";
import { BoxProps } from "../../types";

function Box({ children, styles }: BoxProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StyledBox style={{ ...styles }}>
      <button className='btn-toggle' onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </StyledBox>
  );
}

export default Box;
