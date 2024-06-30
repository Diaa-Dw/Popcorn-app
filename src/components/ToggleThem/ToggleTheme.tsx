import { useState } from "react";
import { ToggleThemeProps } from "../../types";
import { StyledToggleTheme } from "./ToggleTheme.style";

function ToggleTheme({ setTheme }: ToggleThemeProps) {
  const [isChecked, setIsChecked] = useState(false);
  const onToggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChecked((prev) => !prev);
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <StyledToggleTheme onClick={onToggleTheme}>
      <input type='checkbox' className={`${isChecked && "checked"}`} />
      <span className={`slider ${isChecked ? "dark" : "light"}`}></span>
    </StyledToggleTheme>
  );
}

export default ToggleTheme;
