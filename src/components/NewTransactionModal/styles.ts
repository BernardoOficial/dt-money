import styled from 'styled-components';
import closeModalImg from '../../assets/icone-fechar.svg';
import depositImg from '../../assets/seta-entradas.svg';
import withdrawalImg from '../../assets/seta-saidas.svg';

import { darken, transparentize } from 'polished';

export const Container = styled.div`
	max-width: 576px;
	width: 100%;
	height: auto;
	overflow-y: auto;
	position: relative;
`

export const Form = styled.form`
	max-width: 576px;
	width: 100%;
	height: auto;
	padding: 3rem 4rem;
	border-radius: 5px;
	display: block;
	background-color: var(--background);

	button.new-transaction__close-modal {
		background-image: url(${closeModalImg});
		position: absolute;
		top: 20px;
		right: 20px;
		width: 14px;
		height: 14px;
		border: none;
		background-color: transparent;

		background-repeat: no-repeat;
		background-size: 14px 14px;
		background-position: center;
		font-size: 0;

		transition: 0.3s ease-in;

		&:hover {
			transform: scale(0.98);
			opacity: 0.8;
		}
	}

	h4 {
		font-size: 1.5rem;
		line-height: 1.5;
		font-weight: 600;
		color: var(--text-title);
		margin-bottom: 2rem;
	}

	input[type='text'],
	input[type='number'] {
		background-color: var(--shape-input);
		padding: 1.25rem;
		display: block;
		width: 100%;
		border: 1px solid var(--border-color);
		border-radius: 5px;

		font-size: 1rem;
		line-height: 1.5;
		color: var(--text-body);
		font-weight: 400;
		

		&::placeholder {
			font-size: 1rem;
			line-height: 1.5;
			color: var(--text-body);
			font-weight: 400;
		}

		& ~ input {
			margin-top: 1rem;
		}
	}

	.new-transaction__transaction {
		display: flex;
		align-items: center;
		justify-content: stretch;
		margin-top: 1rem;
	}

	button[type='submit'] {
		background-color: var(--green);
		padding: 1.25rem;
		height: 64px;
		width: 100%;
		display: block;
		border-radius: 5px;
		border: none;
		margin-top: 1.5rem;

		font-size: 1rem;
		line-height: 1.5;
		color: var(--text-white);
		text-align: center;
		font-weight: 400;

		
		transition: 0.3s ease-in;

		&:hover {
			transform: scale(0.98);
			opacity: 0.8;
		}
	}

`

interface RadioBoxProps {
	isActive: boolean;
	activeColor: string;
}

export const RadioBox = styled.button<RadioBoxProps>`
	color: var(--text-title);
	background-color: ${(props) => props.isActive ? transparentize(0.9, props.activeColor) : "#F0F2F5" };
	border: 1px solid var(--border-color);
	border-radius: 5px;
	text-align: center;
	padding: 0.2rem 1rem;
	height: 4rem;
	flex: 1 1 50%;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;

	transition: 0.3s ease-in;

	&--active {
		background-color: var(--blue);
		color: var(--text-white);
	}

	&:hover {
		border-color: ${darken(0.2, '#D7D7D7')};
	}

	& ~ button {
		margin-left: 8px;
	}

	label {
		font-size: 1rem;
		line-height: 1.5;
		font-weight: 400;

		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		&[for="deposit"]::before {
			content: '';
			background-image: url(${depositImg});
		}
		
		&[for="withdrawal"]::before {
			content: '';
			background-image: url(${withdrawalImg});
		}

		&::before {
			content: '';
			background-color: transparent;
			background-repeat: no-repeat;
			background-size: 24px 24px;
			background-position: center;
			width: 24px;
			height: 24px;
			margin-right: 1.1rem;
			display: inline-block;		
		}

	}
`