import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--red: #E52E4D;
		--blue: #5429CC;
		--green: #33CC95;
		--green-light: #12A454;

		--blue-light: #6933FF;

		--text-title: #363F5F;
		--text-body: #969CB3;
		--text-white: #FFFFFF;

		--background: #F0F2F5;
		--shape: #FFFFFF;
		--shape-input: #E7E9EE;

		--border-color: #D7D7D7;

	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 100%;

		@media and (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media and (max-width: 720px) {
			font-size: 87.5%;
		}

	}

	body {
		background-color: var(--background);
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font-family: 'Poppins', 'Calibri', sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.react-modal-overlay {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.react-modal-content {
		max-width: 576px;
		width: 100%;
	}
};

`