import styled from "styled-components";
import { respondTo } from "../../style/_responsive";

export const StyledToggleTheme = styled.label`
  justify-self: end;

  --secondary-container: #3a4b39;
  --primary: #84da89;
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.7em;
  height: 1.8em;

  input {
    display: none;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.2s;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.text};
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.2em;
    bottom: 0.2em;
    background-color: #2a3549;
    transition: 0.4s;
  }

  .checked + .slider::before {
    background-color: var(--primary);
  }

  .checked + .slider {
    background-color: var(--secondary-container);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--secondary-container);
  }

  .checked + .slider:before {
    transform: translateX(1.9em);
  }

  ${respondTo.medium`
    width: 2.7em;
  height: 1.2em;

  .slider:before {
  top: .2rem;
    height: 1em;
    width: 1em;

  }

  .checked + .slider:before {
    transform: translateX(1.3em);
  }

  `}
`;
