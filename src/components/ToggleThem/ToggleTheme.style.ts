import styled from "styled-components";

export const StyledToggleTheme = styled.div`
justify-self: end;
  .switch {
    position: relative;
    width: 80px; /* Updated width */
    height: 30px; /* Updated height */
    margin: 0px;
    appearance: none;
    -webkit-appearance: none;
    background-color: rgb(4, 52, 73);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 15px; /* Updated to match new height */
    transition: background-image 0.7s ease-in-out;
    outline: none;
    cursor: pointer;
    overflow: hidden;
  }

  .switch:checked {
    background-color: rgb(0, 195, 255);
    background-size: cover;
    transition: background-image 1s ease-in-out;
  }

  .switch:after {
    content: "";
    width: 26px; /* Updated width */
    height: 26px; /* Updated height */
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 2px;
    top: 2px;
    transform: translateX(0px);
    animation: off 0.7s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    box-shadow: inset 5px -5px 4px rgba(53, 53, 53, 0.3);
  }

  @keyframes off {
    0% {
      transform: translateX(50px); /* Updated transform */
      width: 26px; /* Updated width */
    }

    50% {
      width: 45px; /* Updated width */
      border-radius: 15px; /* Updated to match new height */
    }

    100% {
      transform: translateX(0px);
      width: 26px; /* Updated width */
    }
  }

  .switch:checked:after {
    animation: on 0.7s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    box-shadow: inset -5px -5px 4px rgba(53, 53, 53, 0.3);
  }

  @keyframes on {
    0% {
      transform: translateX(0px);
      width: 26px; /* Updated width */
    }

    50% {
      width: 45px; /* Updated width */
      border-radius: 15px; /* Updated to match new height */
    }

    100% {
      transform: translateX(50px); /* Updated transform */
      width: 26px; /* Updated width */
    }
  }

  .switch:checked:before {
    content: "";
    width: 10px; /* Updated width */
    height: 10px; /* Updated height */
    border-radius: 50%;
    position: absolute;
    left: 10px; /* Updated position */
    top: 3px; /* Updated position */
    transform-origin: 33px 6px; /* Updated transform origin */
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
    animation: sun 0.7s forwards ease;
  }

  @keyframes sun {
    0% {
      transform: rotate(170deg);
      background-color: transparent;
      box-shadow: 5px -1px 0px #fff;
      filter: blur(0px);
    }

    50% {
      background-color: transparent;
      box-shadow: 5px -1px 0px #fff;
      filter: blur(0px);
    }

    90% {
      background-color: #f5daaa;
      box-shadow: 0px 0px 10px #f5deb4, 0px 0px 20px #f5deb4,
        0px 0px 30px #f5deb4, inset 0px 0px 2px #efd3a3;
      filter: blur(1px);
    }

    100% {
      transform: rotate(0deg);
      background-color: #f5daaa;
      box-shadow: 0px 0px 10px #f5deb4, 0px 0px 20px #f5deb4,
        0px 0px 30px #f5deb4, inset 0px 0px 2px #efd3a3;
      filter: blur(1px);
    }
  }

  .switch:before {
    content: "";
    width: 10px; /* Updated width */
    height: 10px; /* Updated height */
    border-radius: 50%;
    position: absolute;
    left: 10px; /* Updated position */
    top: 3px; /* Updated position */
    filter: blur(1px);
    background-color: #f5daaa;
    box-shadow: 0px 0px 10px #f5deb4, 0px 0px 20px #f5deb4, 0px 0px 30px #f5deb4,
      inset 0px 0px 2px #efd3a3;
    transform-origin: 33px 6px; /* Updated transform origin */
    animation: moon 0.7s forwards ease;
  }

  @keyframes moon {
    0% {
      transform: rotate(0deg);
      filter: blur(1px);
    }

    50% {
      filter: blur(1px);
    }

    90% {
      background-color: transparent;
      box-shadow: 5px -1px 0px #fff;
      filter: blur(0px);
    }

    100% {
      transform: rotate(170deg);
      background-color: transparent;
      box-shadow: 5px -1px 0px #fff;
      filter: blur(0px);
    }
  }
`;
