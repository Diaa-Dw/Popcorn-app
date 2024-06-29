import { StyledToggleTheme } from "./ToggleTheme.style";

function ToggleTheme({ setTheme }) {
  const onToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <StyledToggleTheme onClick={onToggleTheme}>
      <input type='checkbox' name='checkbox' className='switch' />
    </StyledToggleTheme>
  );
}

export default ToggleTheme;
