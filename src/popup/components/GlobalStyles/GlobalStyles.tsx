import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const fontStyles = css`
	line-height: 1.4;
	font-family: ${({ theme: { font } }) => font};
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;
export const GlobalStyles = createGlobalStyle`
	${reset};

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	* {
		color: white;
	}

	body,
	label,
	button,
	input,
	input::placeholder {
		${fontStyles}
	}

	body {
		width: 300px;
		background: black;
	}

	label,
	button {
		cursor: pointer;
		user-select: none;
	}
	
	h1 {
		font-size: 2.5rem;
	}
	h2 {
		font-size: 1.85rem;
	}
	h3 {
		font-size: 1.5rem;
	}
	h4 {
		font-size: 1.3rem;
	}
	h5,
	small {
		font-size: 0.85rem;
	}
	h6 {
		font-size: 0.7rem;
	}
	button,
	input {
		font-size: 1rem;
		background: transparent;
		padding: 0;
		border: none;
		display: block;
		width: 100%;
	}

	::-webkit-scrollbar {
		width: 15px;
	}
	::-webkit-scrollbar-track {
		background: black;
	}
	::-webkit-scrollbar-thumb {
		background: grey;
	}
	::-webkit-scrollbar-thumb:hover {
		background: lightgray;
	}
  `;
