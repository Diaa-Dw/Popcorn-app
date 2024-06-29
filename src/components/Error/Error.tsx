import { StyledError } from "./Error.style";
import { ErrorProps } from "../../types";

function Error({ errorContext }: ErrorProps) {
  return <StyledError>{errorContext}</StyledError>;
}

export default Error;
