import styled, { keyframes } from 'styled-components';

const bottomBorderAnimation = keyframes`
	50% {
		opacity: 0;
		-webkit-transform: translate3d(1em, 0, 0);
		transform: translate3d(1em, 0, 0);
	}
	51% {
		opacity: 0;
		-webkit-transform: translate3d(-1em, -40%, 0);
		transform: translate3d(-1em, -40%, 0);
	}
	100% {
		opacity: 1;
		-webkit-transform: translate3d(0, -40%, 0);
		transform: translate3d(0, -40%, 0);
	}
`;

interface InputContainerProps {
  borderColor?: string;
  labelColor?: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  .input {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 100%;
  }

  .input__field {
    position: relative;
    display: block;
    padding: 0.8em;
    border: none !important;
    border-radius: 0;
    background: #f0f0f0;
    color: #aaa;
    font-size: 18px;
    -webkit-appearance: none;
  }

  .input__field:focus {
    outline: none;
  }

  .input__label {
    display: inline-block;
    width: 40%;
    color: ${(props) => props.labelColor || '#6a7989'};
    font-weight: bold;
    font-size: 70.25%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .input__label-content {
    position: relative;
    display: block;
    padding: 1.6em 0;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  /* Hoshi */
  .input--hoshi {
    overflow: hidden;
  }

  .input__field--hoshi {
    margin-top: 0.85em;
    padding: 0.85em 0.15em;
    width: 100%;
    background: transparent;
    color: ${(props) => props.theme.dialog.text};
  }

  .input__label--hoshi {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: left;
    pointer-events: none;
  }

  .input__label-content--hoshi {
    position: absolute;
  }

  .input__label--hoshi::before,
  .input__label--hoshi::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 10px);
    border-bottom: 1px solid #b9c1ca;
  }

  .input__label--hoshi::after {
    border-bottom: 4px solid red;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
  }

  .input__label--hoshi-color-1::after {
    border-color: ${(props) => props.borderColor || '#7159c1'};
  }

  .input__field--hoshi:focus + .input__label--hoshi::after,
  .input--filled + .input__label--hoshi::after {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .input__field--hoshi:focus
    + .input__label--hoshi
    .input__label-content--hoshi,
  .input--filled + .input__label--hoshi .input__label-content--hoshi {
    -webkit-animation: ${bottomBorderAnimation} 0.3s forwards;
    animation: ${bottomBorderAnimation} 0.3s forwards;
  }
`;
