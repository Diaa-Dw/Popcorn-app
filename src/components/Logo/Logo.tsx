import { LogoProps } from "../../types";
import { StyledLogo } from "./Logo.style";

function Logo({ theme }: LogoProps) {
  return (
    <StyledLogo className='logo'>
      <img src={`${theme}_logo.png`} alt='logo' />
    </StyledLogo>
  );
}

export default Logo;
